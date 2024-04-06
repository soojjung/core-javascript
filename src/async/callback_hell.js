// Callback Hell example

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "soojin" && password === "1234") ||
        (id === "sooya" && password === "qwer")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "soojin") {
        onSuccess({ name: "soojin", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello, ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

/** 콜백 지옥의 문제점
 * 1. 읽기가 너무 힘들다. 가독성이 떨어진다.
 * 2. 비즈니스 로직을 한 눈에 이해하기도 어렵다.
 * 3. 디버깅이 어려워진다.
 * 4. 유지보수도 어려워진다.
 */
