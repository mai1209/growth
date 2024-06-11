import style from "./style/App.module.css";
import logo from "./assets/settings_24dp.svg";

function Nav() {
  return (
    <div className={style.containerNav}>
        <h1 className={style.logo}>
          GROWTH <span>.</span>
        </h1>
        <img className={style.settingIcon} src={logo} alt="icon-setting" />
      </div>
  )
}

export default Nav