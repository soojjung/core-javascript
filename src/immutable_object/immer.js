import React, { useState } from "react";
import { Link } from "react-router-dom";
import { produce } from "immer";

const ImmutableObjectImmer = () => {
  const user = {
    name: "정수진",
    gender: "female",
    age: 29,
    favoriteFood: ["coffee", "apple", "pizza"],
  };
  const [user1, setUser1] = useState(user);
  const [user2, setUser2] = useState(user);

  const changeAgeByImmer = (user) => {
    const newUser = produce(user, (draft) => {
      draft.age += 1;
      draft.favoriteFood[1] = "banana";
    });

    setUser1(user); // user의 age는 변하지 않고
    setUser2(newUser); // newUser의 age만 잘 변한다.
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
        <button onClick={(e) => changeAgeByImmer(user)}>
          Immer를 사용한 버튼
        </button>
      </div>

      <Link to="/immutable-object"> 이전 페이지로 돌아가기 </Link>
    </div>
  );
};

export default ImmutableObjectImmer;
