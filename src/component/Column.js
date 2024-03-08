import React from 'react';

const Column = () => {
  const todoList = ['밥먹기', '코딩하기', '커피마시기'];
  return (
    <>
      {todoList.map((todo, idx) => {
        //return도 하나의 상위 태그만을 반환할 수 있따.
        return (
          //key를 넣어줘야할때는 <></>를 쓸 수 없다.
          //React.Fragment를써야한다.
          // React.Fragment는 key밖에 받을 수 없다.
          <React.Fragment key={idx}>
            <td>{todo}</td>
            <td>{todo}</td>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Column;
