import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClickSub() {
    setCount((preCount) => preCount - 1);
  }

  function handleClickAdd() {
    setCount((preCount) => preCount + 1);
  }

  return (
    <div className='body-counter'>
      <div className='counter'>
        <button className='counter--minus' onClick={handleClickSub}>
          –
        </button>
        <div className='counter--count'>
          <h1>{count}</h1>
        </div>
        <button className='counter--plus' onClick={handleClickAdd}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
