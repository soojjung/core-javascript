import React, { useState } from "react";

const ImmutableObject = () => {
  const user = { name: "정수진", gender: "female", age: 29 };
  const [user1, setUser1] = useState(user);
  const [user2, setUser2] = useState(user);
  const [showDeepCopyBtn, setShowDeepCopyBtn] = useState(false);

  const changeAge = (user) => {
    const newUser = user;
    newUser.age += 1;

    setUser1(user);
    setUser2(newUser);

    setTimeout(() => {
      alert(`user1: ${user1.age}살, user2: ${user2.age}살`);
      setShowDeepCopyBtn(true);
    }, 500);
  };

  const changeAgeByDeepCopy = (user) => {
    const newUser = {};
    for (const prop in user) {
      newUser[prop] = user[prop];
    }
    newUser.age += 1;

    setUser2(newUser);
  };

  return (
    <div>
      <div>
        <h2>2023: {JSON.stringify(user1)}</h2>
      </div>
      <div>
        <h2>2024: {JSON.stringify(user2)}</h2>
      </div>

      <button onClick={(e) => changeAge(user)}>
        새해가 밝았습니다. 떡국을 먹은 당신, 이 버튼을 눌러주세요.
      </button>

      {showDeepCopyBtn === true && (
        <button onClick={(e) => changeAgeByDeepCopy(user2)}>
          아니, 무슨 문제라도 있나요? 이 버튼을 눌러보세요!
        </button>
      )}
    </div>
  );
};

export default ImmutableObject;
