import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navs from "./Navs";
import Main from "../../pages/Main";
import Comments from "../../pages/Comments";
import About from "../../pages/About";
import Error from "../../router/Eror";

function Header(props) {
  return (
    <BrowserRouter>
      <Navs />
      <Routes>
        <Route path="/" element={<Main state = {props.state} doneAction={props.doneAction} updateStateText={props.updateStateText}  addTodo ={props.addTodo} updateCompliteList={props.updateCompliteList} /> } />
        <Route path="/comments" element={<Comments />} />
        <Route path="/about-us" element={<About />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default Header;
