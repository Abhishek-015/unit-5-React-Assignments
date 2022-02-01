import React, { useState } from "react";
import Input from "./groceryInputField";
import List from "./groceryList";

const Grocery = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleText = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.length) {
      for (let el of data) {
        if (el === text) {
          alert(`Item with name "${text}" already exist`);
        } else {
          setData([...data, text]);
        }
      }
    } else {
      setData([...data, text]);
    }
    setText("");
  };

  const handleDelete = (key) => {
    const filteredData = data.filter((el) => el !== key);
    setData(filteredData);
  };

  return (
    <>
      <h1 className="text-center mt-3 mb-5 text-primary">
        Grocery Management System
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="container justify-content-md-center w-50">
          <div className="row  justify-content-md-center mt-5">
            <Input value={text} handleChange={handleText} />
            <div className="col col-lg-2">
              <button
                type="submit"
                className="btn btn-primary px-2"
                disabled={!text}
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="container justify-content-md-center w-50">
        <div className="row  justify-content-md-center my-10">
          <ol className="list-group mt-5">
            {data.map((el) => (
              <List key={el} id={el} title={el} handleDelete={handleDelete} />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Grocery;
