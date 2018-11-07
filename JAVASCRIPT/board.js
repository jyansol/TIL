// 페이지 그리는 함수 작성 순서
// 1. 템플릿 복사
// 2. 요소 선택
// 3. 필요한 데이터 불러오기
// 4. 내용 채우기
// 5. 이벤트 리스너 등록하기
// 6. 템플릿을 문서에 삽입

import '@babel/polyfill';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL,
});
// 외부에서 주입해준 환경변수를 사용하는 코드
// 환경변수 : 이것은 토큰 암호화를 위해 사용되는 문자열입니다.
// ★ ★ ★ ★ ★ 토큰 암호화 ?
// 알파벳 및 숫자를 띄어쓰기 없이 아무렇게나 넣어주시면 됩니다.
// .env파일에는 개발용 서버 주소를 가지고 있음
// 이렇게 설정해준 후 npm 껐다 켜야함

api.interceptors.request.use(function(config) {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers || {};
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  return config;
});
// localStorage에 token이 있으면 요청에 헤더 설정
// 없으면 아무것도 하지 않음

const templates = {
  loginForm: document.querySelector('#login-form').content,
  postList: document.querySelector('#post-list').content,
  postItem: document.querySelector('#post-item').content,
  postForm: document.querySelector('#post-form').content,
  postDetail: document.querySelector('#post-detail').content,
  commentItem: document.querySelector('#comment-item').content,
};
// template를 객체로 가져옴

const rootEl = document.querySelector('.root');

async function drawLoginForm() {
  const frag = document.importNode(templates.loginForm, true);
  //template로 만들었으니까 이렇게 불러와야함
  const formEl = frag.querySelector('.login-form');
  // loginForm frag의 자식들을 가져옴

  formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const res = await api.post('/users/login', {
      username,
      password,
    });
    // formEl의 자식인 .login-form한테 이벤트를 달거임
    // form은 submit!!!!기능이 있음
    // form에 이벤트 달아주려면 'submit', e.preventDefault()해줘야함 - 흰색페이지 출력을 막아야하거든
    // input은 e.target.elements."name".value로 값을 가져옴
    // async 랑 await로 비동기 코드를 작성하는 방법
    // 비동기 프로그래밍에는 콜백 (Callback), Promise, 비동기 함수 (Async Function) 등이 있음
    // 비동기 함수가 가장 사용하기 좋으니까!
    // ★ ★ ★ ★ ★  왜 이 이벤트를 비동기 함수로 불러오는거임?
    //

    localStorage.setItem('token', res.data.token);
    drawPostList();
  });

  rootEl.textContent = '';
  rootEl.appendChild(frag);
} //로그인폼을 그려주는 함수

async function drawPostList() {
  const frag = document.importNode(templates.postList, true);
  const listEl = frag.querySelector('.post-list');
  const createEl = frag.querySelector('.create');
  const { data: postList } = await api.get('/posts?_expand=user');
  for (const postItem of postList) {
    const frag = document.importNode(templates.postItem, true);
    const idEl = frag.querySelector('.id');
    const titleEl = frag.querySelector('.title');
    const authorEl = frag.querySelector('.author');

    idEl.textContent = postItem.id;
    titleEl.textContent = postItem.title;
    authorEl.textContent = postItem.user.username;

    listEl.appendChild(frag);

    titleEl.addEventListener('click', (e) => {
      drawPostDetail(postItem.id);
    });
  }
  createEl.addEventListener('click', (e) => {
    drawNewPostForm();
  });

  rootEl.textContent = '';
  rootEl.appendChild(frag);
}

async function drawPostDetail(postId) {
  const frag = document.importNode(templates.postDetail, true);
  const titleEl = frag.querySelector('.title');
  const authorEl = frag.querySelector('.author');
  const bodyEl = frag.querySelector('.body');
  const backEl = frag.querySelector('.back');
  const commentListEl = frag.querySelector('.comment-list');
  const commentFormEl = frag.querySelector('.comment-form');
  const updateEl = frag.querySelector('.update');
  const {
    data: { title, body, user, comments },
  } = await api.get('/posts/' + postId, {
    params: {
      _expand: 'user',
      _embed: 'comments',
    },
  });
  const params = new URLSearchParams();
  comments.forEach((c) => {
    params.append('id', c.userId);
  });
  const { data: userList } = await api.get('/users', {
    params,
  });
  titleEl.textContent = title;
  bodyEl.textContent = body;
  authorEl.textContent = user.username;
  for (const commentItem of comments) {
    const frag = document.importNode(templates.commentItem, true);
    const authorEl = frag.querySelector('.author');
    const bodyEl = frag.querySelector('.body');
    const deleteEl = frag.querySelector('.delete');

    bodyEl.textContent = commentItem.body;
    const user = userList.find((item) => item.id === commentItem.userId);
    authorEl.textContent = user.username;

    // 오류있음
    commentFormEl.addEventListener('submit', async (e) => {
      e.preventDefault();
      const body = e.target.elements.body.value;
      await api.post(`/posts/${postId}/comments`, {
        body,
      });
      drawPostDetail(postId);
    });
    commentListEl.appendChild(frag);
  }

  backEl.addEventListener('click', (e) => {
    drawPostList();
  });
  updateEl.addEventListener('click', (e) => {
    drawEditPostForm(postId);
  });
  rootEl.textContent = '';
  rootEl.appendChild(frag);
}

async function drawNewPostForm() {
  const frag = document.importNode(templates.postForm, true);
  const formEl = frag.querySelector('.post-form');
  const backEl = frag.querySelector('.back');
  formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const body = e.target.elements.body.value;
    await api.post('/posts', {
      title,
      body,
    });
    drawPostList();
  });
  backEl.addEventListener('click', (e) => {
    e.preventDefault();
    drawPostList();
  });
  rootEl.textContent = '';
  rootEl.appendChild(frag);
}

async function drawEditPostForm(postId) {
  const frag = document.importNode(templates.postForm, true);
  const formEl = frag.querySelector('.post-form');
  const backEl = frag.querySelector('.back');
  const titleEl = frag.querySelector('.title');
  const bodyEl = frag.querySelector('.body');
  const {
    data: { title, body },
  } = await api.get('/posts/' + postId);
  titleEl.value = title;
  bodyEl.value = body;
  formEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const body = e.target.elements.body.value;
    await api.patch('/posts/' + postId, {
      title,
      body,
    });
    drawPostList();
  });
  backEl.addEventListener('click', (e) => {
    e.preventDefault();
    drawPostList();
  });
  rootEl.textContent = '';
  rootEl.appendChild(frag);
}

if (localStorage.getItem('token')) {
  drawPostList();
} else {
  drawLoginForm();
}
