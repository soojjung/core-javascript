// Callback Hell To Promise exmple

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "soojin" && password === "1234") ||
          (id === "sooya" && password === "qwer")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "soojin") {
          resolve({ name: "soojin", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((userWithRole) =>
    alert(`Hello, ${userWithRole.name}, you have a ${userWithRole.role} role`)
  )
  .catch(console.log);
