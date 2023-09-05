import { NavLink } from "react-router-dom";
import style from "./Navs.module.css";

function Navs() {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <ul className={style.navItems}>
          <li className={style.navItem}>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink to={"/comments"}>Comments</NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink to={"/about-us"}>About-us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navs;
