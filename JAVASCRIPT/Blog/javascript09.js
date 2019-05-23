// Promise
// americano만 받는 객체 => americano가 아니면 주문오류
// 객체를 만든다 

const starbucks = (order) => {
  return new Promise((resolve, reject) => {
    order === 'americano' ? resolve('americano') : reject('주문오류')
  });
}

starbucks('americano')
  .then(
    function(order) {
      console.log(order)
    }
  )
  .catch(
    function(order) {
      console.log(order)
    }
  )


// Async / await
async function getAmericano(param) {
  try {
    const ame = await starbucks('americano');
    return ame
  }
  catch (error) {
    console.log(error)
  }
}
