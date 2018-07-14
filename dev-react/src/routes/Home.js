import React from "react";

const Home = ({ history }) => {
  return (
    <div>
      홈
      <button
        onClick={() => {
          history.push("/posts");
        }}
      >
        버튼
      </button>
    </div>
  );
};

export default Home;
