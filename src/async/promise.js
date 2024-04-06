/**
 * Promise
 * 자바스크립트에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 Object 이다.
 * 정해진 장시간의 기능을 수행하고 나서 정상적으로 기능이 수행 되어졌다면 성공의 메세지와 함께 처리된 결과값을 전달해주고,
 * 만약 실패한다면(문제가 발생한다면) 에러를 전달해 줍니다.
 */

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer (이 콜백 함수에 또 다른 두가지의 콜백 함수를 받습니다.)
// when new Promise is created, the executor runs automatically.
// 프로미스를 만드는 순간 전달한 executor라는 콜백함수((resolve, reject) => {})가 바로 실행된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work.
  // 네트워크에서 데이터를 받아오거나 파일에서 큰 데이터를 읽어오는 과정은 시간이 꽤 걸린다.
  // 그런것들을 동기적으로 처리하게 되면 그동안 다음 라인의 코드가 실행되지 않는다.
  // 그래서 이렇게 시간이 걸리는 일들은 Promise를 만들어서 비동기적으로 처리하는 것이 좋다.
  console.log("doing something...");
  setTimeout(() => {
    // resolve("soojin");
    reject(new Error("no network")); // .catch를 해주지 않고 reject만 실행시키면 Uncaught Error 발생
  }, 2000);
});

// 2. Consumers: then, catch, finally 를 통해서 값을 받아올 수 있다.
promise
  .then((value) => {
    console.log(value); // soojin
    // resolve라는 콜백 함수를 통해서 전달한 값을 파라미터로 받을 수 있다.
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("finally"); // 성공하든 실패하든 상관없이 어떤 기능을 마지막으로 수행
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
// .then에서는 값을 바로 전달 하거나 다른 비동기인 프로미스를 전달 해도 된다.

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔", 1000));
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${hen} => 🥚`);
      reject(new Error(`error! ${hen} => 🥚`)); // 에러핸들링 하지 않으면 Uncaught Error
    }, 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));

getHen() // 더 간단하게 변경할 수 있다.
  .then(getEgg)
  // .catch((error) => {
  //   return '🥕'  // 이걸 해주면 최종 결과가 🥕 => 🍳 가 된다.
  // })
  .then(cook)
  .then(console.log)
  .catch(console.log); // catch를 밑에 써도 첫번째꺼에서 에러 나면 여기에서 에러가 잡힌다. (error! 🐔 => 🥚)
