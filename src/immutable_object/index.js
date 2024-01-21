import React, { useState } from "react";
import { Link } from "react-router-dom";

const ImmutableObject = () => {
  const user = { name: "정수진", gender: "female", age: 29 };
  const [user1, setUser1] = useState(user);
  const [user2, setUser2] = useState(user);
  const [showDeepCopyBtn, setShowDeepCopyBtn] = useState(false);

  console.log(user1 === user2); // true
  console.log(user === user1); // 처음엔 true 였다가 버튼을 누른 후엔 false (setShowDeepCopyBtn(true);를 해주면 false가 되고 그렇지 않으면 true이다.)

  const changeAge = (user) => {
    const newUser = user;
    newUser.age += 1;

    // setUser1(user);
    // setUser2(newUser);
    // 위 setState 코드를 사용하지 않아도 user1과 user2의 나이는 변한다.
    // 이유: 새로운 주소가 할당된게 아니라서?

    // setTimeout(() => {
    // setShowDeepCopyBtn(true);
    alert(`user1: ${user1.age}살, user2: ${user2.age}살`);
    // }, 500);
  };

  const changeAgeByCopy = (user) => {
    setUser2({ ...user, age: user.age + 1 }); // 얕은 복사이긴 하지만 원뎁스 이니까 copyObjectDeep을 쓰지 않고 이렇게 리팩토링 할 수 있다.

    // const newUser = copyObjectDeep(user);
    // newUser.age += 1;
    // setUser2(newUser);
  };

  const copyObjectDeep = (user) => {
    let newUser = {};
    if (typeof user === "object" && user !== null) {
      for (const prop in user) {
        newUser[prop] = copyObjectDeep(user[prop]);
      }
    } else {
      newUser = user;
    }
    return newUser;
  };

  return (
    <div>
      <div>
        <h2>2023: {JSON.stringify(user1)}</h2>
      </div>
      <div>
        <h2>2024: {JSON.stringify(user2)}</h2>
      </div>

      <div style={{ margin: "0 0 20px" }}>
        <button onClick={(e) => changeAge(user)}>
          새해가 밝았습니다. 떡국을 먹은 당신, 이 버튼을 눌러주세요.
        </button>
      </div>

      <div style={{ margin: "0 0 20px" }}>
        {showDeepCopyBtn === true && (
          <button onClick={(e) => changeAgeByCopy(user2)}>
            아니, 무슨 문제라도 있나요? 이 버튼을 눌러보세요!
          </button>
        )}
      </div>

      <Link to="/immer">Immer 라이브러리 사용해보기</Link>
    </div>
  );
};

export default ImmutableObject;
