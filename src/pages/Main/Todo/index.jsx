import React, { useState, useRef } from "react";
import style from "./Todo.module.css";

function Todo(props) {
  console.log(props);
  const pRef = useRef(null);

  function handleClick(item) {
    props.updateCompliteList(item)
  }
  const mainBtn2 = {
    border: "1px #ff5252 solid",
  };

  return (
    <>
      {props.state.map((item, index) => {
        return (
          <li key={index} className={style.mainItem}>
            <div className={style.item}>
              <div className={style.mainTitle}>
                <p
                 style={item.isComplite ? { color: "green" } : { color: "white" }}
                  ref={pRef}
                >
                  {item.todoText}
                </p>
              </div>
              <div>
                <button onClick={() => handleClick(item)} className={style.mainButton}>
                  Done
                </button>
                <button className={style.mainButton} style={mainBtn2}>
                  Cancel
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default Todo;

// const current = pRef.current;
// console.log(current);
// props.state.map((item) => {
//   if (item.isComplite) {
//     current.style = "color : white ; ";
//   } else {
//     current.style = "color : green ";
//   }
// });
// props.state.map((item) => {
//   // props.doneAction(item , current)
//
// })
