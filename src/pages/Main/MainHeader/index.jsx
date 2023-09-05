import style from "./MainHeader.module.css";
import { useRef } from "react";
function MainHeader(props) {
  const inputRef = useRef(null);

  function updateValue() {
    const inputValue = inputRef.current.value;
    props.updateStateText(inputValue)
  }
  function add () {
    const inputValue = inputRef.current.value;
    props.addTodo(inputValue)
  }

  return (
    <div className={style.mainTitle}>
      <h2>My to-do !</h2>
      <div className={style.inputBlock}>
        <div className={style.form}>
          <input
            ref={inputRef}
            onChange={updateValue}
            value={props.state.text}
            className={style.input}
            placeholder="Type your to-do"
            required=""
            type="text"
          />
          <span className={style.inputBorder}></span>
        </div>
        <button onClick={add}  className={style.mainButton}>Done</button>
      </div>
    </div>
  );
}

export default MainHeader;
