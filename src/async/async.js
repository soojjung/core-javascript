// async & await
// clear style of using promise

// Promise의 상태 (PromiseState) - pending, fullfilled, reject
// resolve, reject 아무것도 호출하지 않으면 pending 으로 남아있다

// 1. promise 복습
function fetchUser() {
  return new Promise((resolve, reject) => {
    // do network request in 10 secs..
    // return "soojin"; // 이렇게 하면 PromiseState가 "pending", PromiseResult는 undefined
    resolve("soojin"); // 이렇게 하면 PromiseState가 "fulfilled", PromiseResult가 "soojin"
  });
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. async - 자동적으로 함수 안의 코드들이 Promise로 변환된다.
async function fetchUser2() {
  // do network request in 10 secs..
  return "soojin";
}

const user2 = fetchUser2();
user2.then(console.log);
console.log(user2);

// 3. await
// await는 async가 붙은 함수 안에서만 쓸 수 있다.
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "apple";
}

async function getBanana() {
  await delay(1000);
  return "banana";
}

// 콜백 지옥
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 4. useful Promise APIs
function pickAllFruits() {
  // 모든 Promise들이 병렬적으로 다 받을때까지 모아준다.
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);

// 먼저 따지는 첫번째 과일
function getTheFirstOne() {
  return Promise.race([getApple(), getBanana()]);
}

getTheFirstOne().then(console.log);
