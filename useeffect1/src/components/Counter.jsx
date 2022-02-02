import React, { useEffect, useState } from "react";

const Counter = () => {
  let [counter1, setCounter1] = useState(0);
  let [counter2, setCounter2] = useState(0);
  const handleClick = () => {
    setCounter1(counter1 + 1);
  };

  useEffect(() => {
    counter1 > 10 ? setCounter2(0) : setCounter2(counter1 * 2);
  }, [counter1]);

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-5 h2 ">
          <span className="text-primary"> Counter1</span> : {counter1}
        </div>
        <div className="col-7 h2 ">
          <span className="text-primary"> Counter2</span> : {counter2}
        </div>
      </div>
      <div className="row justify-content-md-center mt-5">
        <button className="btn btn-primary" onClick={handleClick}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Counter;
