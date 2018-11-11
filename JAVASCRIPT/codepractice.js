// 상세페이지 그리기
// 제품 페이지에서 그 아이템의 id를 받아와서 실행시킬 함수.
async function drawProductDetail(productId) {
  // productId : 상품리스트 번호
  // 1. 템플릿 복사
  const frag = document.importNode(templates.productDetail, true);

  // 2. 요소 선택
  const mainImageEl = frag.querySelector('.main-image');
  const titleEl = frag.querySelector('.title');
  const descriptionEl = frag.querySelector('.description');
  const cartFormEl = frag.querySelector('.cart-form');
  const detailImageListEl = frag.querySelector('.detail-image-list');
  const selectEl = frag.querySelector('.option');
  const priceEl = frag.querySelector('.price');
  const quantityEl = frag.querySelector('.quantity');

  // 3. 필요한 데이터 불러오기
  const {
    data: { title, description, mainImgUrl, detailImgUrls, options },
  } = await api.get(`/products/${productId}`, {
    params: {
      _embed: 'options',
    },
  });

  // 4. 내용 채우기
  mainImageEl.setAttribute('src', mainImgUrl);
  titleEl.textContent = title;
  descriptionEl.textContent = description;

  for (const url of detailImgUrls) {
    const frag = document.importNode(templates.detailImage, true);

    const detailImageEl = frag.querySelector('.detail-image');

    detailImageEl.setAttribute('src', url);

    detailImageListEl.appendChild(frag);
  }

  for (const { id, title, price } of options) {
    const optionEl = document.createElement('option');
    optionEl.setAttribute('value', id);
    optionEl.textContent = `${title} (${price}원)`;
    selectEl.appendChild(optionEl);
  }

  // 5. 이벤트 리스너 등록하기
  function calculateTotal() {
    // 선택된 option 태그에 해당하는 옵션 객체를 찾는다.
    const optionId = parseInt(selectEl.value);
    const option = options.find((o) => o.id === optionId);
    // 찾지 못하면 함수를 종료시킨다.
    if (!option) return;
    // 수량을 가져온다.
    const quantity = parseInt(quantityEl.value);
    // 총액을 계산해서 표시한다.
    const price = option.price * quantity;
    priceEl.textContent = `${price.toLocaleString()}원`;
  }
  selectEl.addEventListener('change', calculateTotal);
  quantityEl.addEventListener('input', calculateTotal);

  cartFormEl.addEventListener(
    'submit',
    withAuth(
      withLoading(async (e) => {
        e.preventDefault();
        const optionId = parseInt(selectEl.value);
        const quantity = parseInt(quantityEl.value);

        // 이미 장바구니에 같은 상품이 들어있는지 확인
        const { data: orderedCartItems } = await api.get('/cartItems', {
          params: {
            ordered: false,
            optionId,
          },
        });
        if (orderedCartItems.length > 0) {
          if (confirm('이미 장바구니에 같은 상품이 존재합니다. 장바구니로 이동하시겠습니까?')) {
            await drawCartList();
          }
        } else {
          await api.post('/cartItems', {
            optionId,
            quantity,
            ordered: false,
          });
          if (confirm('장바구니에 담긴 상품을 확인하시겠습니까?')) {
            await drawCartList();
          }
        }
      }),
    ),
  );

  // 6. 템플릿을 문서에 삽입
  await drawFragment(frag);
}

// 장바구니 담기
async function drawCartList() {
  // 1. 템플릿 복사
  const frag = document.importNode(templates.cartList, true);

  // 2. 요소 선택
  const cartListEl = frag.querySelector('.cart-list');
  const checkboxAllEl = frag.querySelector('.checkbox-all');
  const orderEl = frag.querySelector('.order');

  // 3. 필요한 데이터 불러오기
  const { data: cartItemList } = await api.get('/cartItems', {
    params: {
      ordered: 'false',
    },
  });

  const optionIds = cartItemList.map((c) => c.optionId);
  const params = new URLSearchParams();
  optionIds.forEach((optionId) => params.append('id', optionId));
  params.append('_expand', 'product');
  const { data: optionList } = await api.get('/options', {
    params,
  });

  // 4. 내용 채우기
  function updateCheckboxAll() {
    const checkboxEls = Array.from(cartListEl.querySelectorAll('.checkbox'));
    // 전부 체크되어 있다면, checkbox-all도 체크된 상태로 바꾸어줌
    if (checkboxEls.every((el) => el.checked)) {
      checkboxAllEl.checked = true;
    } else {
      checkboxAllEl.checked = false;
    }
  }
  for (const cartItem of cartItemList) {
    const frag = document.importNode(templates.cartItem, true);

    const mainImageEl = frag.querySelector('.main-image');
    const titleEl = frag.querySelector('.title');
    const optionEl = frag.querySelector('.option');
    const quantityEl = frag.querySelector('.quantity');
    const quantityFormEl = frag.querySelector('.quantity-form');
    const priceEl = frag.querySelector('.price');
    const deleteEl = frag.querySelector('.delete');
    const checkboxEl = frag.querySelector('.checkbox');

    const option = optionList.find((o) => o.id === cartItem.optionId);

    const price = parseInt(cartItem.quantity) * option.price;
    mainImageEl.setAttribute('src', option.product.mainImgUrl);
    titleEl.textContent = option.product.title;
    optionEl.textContent = option.title;
    quantityEl.value = cartItem.quantity;
    priceEl.textContent = `${price.toLocaleString()}원`;
    checkboxEl.setAttribute('data-id', cartItem.id);
    // 혹은 이렇게 해도 됨: checkboxEl.dataset.id = cartItem.id

    quantityFormEl.addEventListener(
      'submit',
      withLoading(async (e) => {
        e.preventDefault();
        const quantity = parseInt(e.target.elements.quantity.value);
        if (Number.isNaN(quantity)) {
          alert('수량이 잘못되었습니다. 다시 확인해주십시오.');
          return;
        }
        if (confirm('정말 수정하시겠습니까?')) {
          await api.patch(`/cartItems/${cartItem.id}`, {
            quantity,
          });
          await drawCartList();
        }
      }),
    );

    deleteEl.addEventListener(
      'click',
      withLoading(async (e) => {
        if (confirm('정말 삭제하시겠습니까?')) {
          await api.delete(`/cartItems/${cartItem.id}`);
          await drawCartList();
        }
      }),
    );

    checkboxEl.addEventListener('click', (e) => {
      updateCheckboxAll();
    });

    cartListEl.appendChild(frag);
  }

  // 5. 이벤트 리스너 등록하기
  checkboxAllEl.addEventListener('click', (e) => {
    const checkboxEls = Array.from(cartListEl.querySelectorAll('.checkbox'));
    if (e.target.checked) {
      checkboxEls.forEach((el) => (el.checked = true));
    } else {
      checkboxEls.forEach((el) => (el.checked = false));
    }
  });

  orderEl.addEventListener(
    'click',
    withLoading(async (e) => {
      const checkboxEls = Array.from(cartListEl.querySelectorAll('.checkbox'));
      const selectedIds = checkboxEls.filter((el) => el.checked).map((el) => parseInt(el.getAttribute('data-id')));
      // 혹은 이렇게 해도 됨: .map(el => parseInt(el.dataset.id))

      const {
        data: { id: orderId },
      } = await api.post('/orders', {
        orderTime: Date.now(),
      });

      await Promise.all(
        selectedIds.map((cartItemId) => {
          return api.patch(`/cartItems/${cartItemId}`, {
            ordered: true,
            orderId,
          });
        }),
      );

      if (confirm('주문이 완료되었습니다. 주문 내역을 확인하시겠습니까?')) {
        await drawOrderList();
      } else {
        await drawCartList();
      }
    }),
  );

  // 6. 템플릿을 문서에 삽입
  await drawFragment(frag);
}
