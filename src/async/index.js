// JavaScript is synchronous.

const Async = () => {
  /* Step1. setTimout의 사용 */
  console.log("1");
  setTimeout(() => console.log("2"), 1000);
  console.log("3");

  /* Step2. 콜백의 두가지 경우 */
  // Synchronous callback
  function printImmediately(print) {
    print();
  }
  printImmediately(() => console.log("hello"));
  // 여기까지 콘솔창에서 확인하면 1, 3, hello, 2 가 보인다.

  // Asynchronous callback
  function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
  }
  printWithDelay(() => console.log("async callback"), 2000);

  return (
    <div>
      <h1>동기와 비동기의 이해</h1>
    </div>
  );
};

export default Async;
