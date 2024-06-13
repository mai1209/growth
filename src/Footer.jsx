import { Link } from "react-router-dom";
import style from "./style/Footer.module.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
            <svg
              className={style.settingIcon}
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#FFFFFF"
            >
              <path d="M200.67-160v-383.33L80-451.33 40-504l440-336 172 131.33V-800h106.67v172.67L920-504l-40.67 52.67L758.67-544v384h-232v-240h-93.34v240H200.67Zm66.66-66.67h99.34v-240h226.66v240H692v-367.66l-212-162-212.67 162v367.66Zm129.34-339.66h166.66q0-32.67-25-53.84-25-21.16-58.33-21.16t-58.33 21.06q-25 21.06-25 53.94Zm-30 339.66v-240h226.66v240-240H366.67v240Z" />
            </svg>
          </Link>
        </div>
        <div
          className={`${style.containerIcon} ${
            activeIcon === "user" ? style.active : ""
          }`}
          onClick={() => setActiveIcon("user")}
        >
          <Link to="/user">
            <svg
              className={style.settingIcon}
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#FFFFFF"
            >
              <path d="M226-262q59-42.33 121.33-65.5 62.34-23.17 132.67-23.17 70.33 0 133 23.17T734.67-262q41-49.67 59.83-103.67T813.33-480q0-141-96.16-237.17Q621-813.33 480-813.33t-237.17 96.16Q146.67-621 146.67-480q0 60.33 19.16 114.33Q185-311.67 226-262Zm253.88-184.67q-58.21 0-98.05-39.95Q342-526.58 342-584.79t39.96-98.04q39.95-39.84 98.16-39.84 58.21 0 98.05 39.96Q618-642.75 618-584.54t-39.96 98.04q-39.95 39.83-98.16 39.83ZM480.31-80q-82.64 0-155.64-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.51T80-480.18q0-82.82 31.5-155.49 31.5-72.66 85.83-127Q251.67-817 324.51-848.5T480.18-880q82.82 0 155.49 31.5 72.66 31.5 127 85.83Q817-708.33 848.5-635.65 880-562.96 880-480.31q0 82.64-31.5 155.64-31.5 73-85.83 127.34Q708.33-143 635.65-111.5 562.96-80 480.31-80Zm-.31-66.67q54.33 0 105-15.83t97.67-52.17q-47-33.66-98-51.5Q533.67-284 480-284t-104.67 17.83q-51 17.84-98 51.5 47 36.34 97.67 52.17 50.67 15.83 105 15.83Zm0-366.66q31.33 0 51.33-20t20-51.34q0-31.33-20-51.33T480-656q-31.33 0-51.33 20t-20 51.33q0 31.34 20 51.34 20 20 51.33 20Zm0-71.34Zm0 369.34Z" />
            </svg>
          </Link>
        </div>
        <div
          className={`${style.containerIcon} ${
            activeIcon === "categories" ? style.active : ""
          }`}
          onClick={() => setActiveIcon("categories")}
        >
          <svg
            className={style.settingIcon}
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#FFFFFF"
          >
            <path d="m260.67-524 220-356 220 356h-440ZM704-80q-74.33 0-125.17-50.83Q528-181.67 528-256t50.83-125.17Q629.67-432 704-432t125.17 50.83Q880-330.33 880-256t-50.83 125.17Q778.33-80 704-80Zm-584-23.33v-309.34h309.33v309.34H120Zm584.06-43.34q45.94 0 77.61-31.72 31.66-31.72 31.66-77.67 0-45.94-31.72-77.61-31.72-31.66-77.67-31.66-45.94 0-77.61 31.72-31.66 31.72-31.66 77.67 0 45.94 31.72 77.61 31.72 31.66 77.67 31.66ZM186.67-170h176v-176h-176v176ZM380-590.67h201.33L480.67-753.33 380-590.67Zm100.67 0ZM362.67-346ZM704-256Z" />
          </svg>
        </div>
        <div
          className={`${style.containerIcon} ${
            activeIcon === "add" ? style.active : ""
          }`}
          onClick={() => setActiveIcon("add")}
        >
          <Link to="/add">
            <svg
              className={style.settingIcon}
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#FFFFFF"
            >
              <path d="M448.67-280h66.66v-164H680v-66.67H515.33V-680h-66.66v169.33H280V-444h168.67v164Zm31.51 200q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Z" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
