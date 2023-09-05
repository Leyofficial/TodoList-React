import style from "./Main.module.css";
import MainHeader from "./MainHeader";
import MainWrapper from "./MainWrapper";
function Main(props) {
  return (
    <div className={style.main}>
      <div className={style.mainBlock}>
        <MainHeader
          state={props.state}
          updateStateText={props.updateStateText}
          addTodo={props.addTodo}
        />
        <MainWrapper updateCompliteList={props.updateCompliteList}  state={props.state} />
      </div>
    </div>
  );
}
export default Main;
