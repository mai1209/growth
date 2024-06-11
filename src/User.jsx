import style from "./style/App.module.css";
import logo from "./assets/settings_24dp.svg";
import Style from "./style/User.module.css";
import Footer from "./Footer";
import user from "./assets/person_20dp_FILL0_wght400_GRAD0_opsz20 (1).svg"

function User() {
  return (
    <>
      <div className={style.containerNav}>
        <h1 className={style.logo}>
          GROWTH <span>.</span>
        </h1>
        <img className={style.settingIcon} src={logo} alt="icon-setting" />
      </div>

      <img className={Style.imgUser} src={user} alt="user-img" />
      <div className={Style.container}>
        <h2>Name User</h2>
        <p className={Style.title} >Personal Information</p>
        <form>
        <input type="text" className={Style.placeholder} placeholder="Name : Name User" />
          <input type="mail" className={Style.placeholder} placeholder="Email: emailUser@gmail.com" />
          <input type="number" className={Style.placeholder} placeholder="Phone: 333 333 333" />
          <input type="text" className={Style.placeholder} placeholder="Adress: Private" />
          <input type="text" className={Style.placeholder} placeholder="Website: www.UserWeb.com" />
          <input type="text" className={Style.placeholder} placeholder="About me: bla bla bla bla..." />
          <div className={Style.containerBtn}> 
            <button>Save</button>
            <button>Discard</button>
          </div>
        </form>
      </div>
      <Footer ></Footer>
    </>
  );
}

export default User;
