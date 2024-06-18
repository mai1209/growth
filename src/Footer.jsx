import { Link } from "react-router-dom";
import style from "./style/Footer.module.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IoHome,  IoPersonCircle , IoAddCircle} from "react-icons/io5";

import { TbCategoryFilled } from "react-icons/tb";


 
const Footer = () => {
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveIcon("home");
        break;
      case "/user":
        setActiveIcon("user");
        break;
      case "/categories":
        setActiveIcon("categories");
        break;
      case "/add":
        setActiveIcon("add");
        break;
      default:
        setActiveIcon("");
        break;
    }
  }, [location.pathname]);
  return (
    <>
      <div className={style.containerFooter}>
        <div
          className={`${style.containerIcon} ${
            activeIcon === "home" ? style.active : ""
          }`}
          onClick={() => setActiveIcon("home")}
        >
          <Link to="/">
            <IoHome size={30} className={style.settingIcon} />
          </Link>
        </div>
        <div
          className={`${style.containerIcon} ${
            activeIcon === "user" ? style.active : ""
          }`}
          onClick={() => setActiveIcon("user")}
        >
          <Link to="/user">
          <IoPersonCircle size={35} className={style.settingIcon} />
          
          </Link>
        </div>
        <div
          className={`${style.containerIcon} ${
            activeIcon === "categories" ? style.active : ""
          }`}
          onClick={() => setActiveIcon("categories")}
        >
          <TbCategoryFilled size={35} className={style.settingIcon} />
        </div>
        <div
          className={`${style.containerIcon} ${
            activeIcon === "add" ? style.active : ""
          }`}
          onClick={() => setActiveIcon("add")}
        >
          <Link to="/add">
          <IoAddCircle size={35} className={style.settingIcon}/>
       
   
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
