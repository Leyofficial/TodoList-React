import Todo from "../Todo";
import style from "./MainWrapper.module.css";
function MainWrapper(props) {
  return (
    <div className={style.mainWrapper}>
      <div>
        <ul className={style.mainItems}>
          <Todo state={props.state.todoList} updateCompliteList={props.updateCompliteList} />
        </ul>
      </div>
    </div>
  );
}
export default MainWrapper;
