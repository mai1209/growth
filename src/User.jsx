import Style from "./style/User.module.css";
import Footer from "./Footer";
import user from "./assets/IMG-20240611-WA0030-fotor-20240611145935.png";
import Nav from "./Nav";

function User() {
  return (
    <div className={Style.body}>
      <div>
        <Nav></Nav>
        <img className={Style.imgUser} src={user} alt="user-img" />
        <div className={Style.container}>
          <h2>Name User</h2>
          <p className={Style.title}>Personal Information</p>
          <form>
            <input
              type="text"
              className={Style.placeholder}
              placeholder="Name : Name User"
            />
            <input
              type="mail"
              className={Style.placeholder}
              placeholder="Email: emailUser@gmail.com"
            />
            <input
              type="number"
              className={Style.placeholder}
              placeholder="Phone: 333 333 333"
            />
            <input
              type="text"
              className={Style.placeholder}
              placeholder="Adress: Private"
            />
            <input
              type="text"
              className={Style.placeholder}
              placeholder="Website: www.UserWeb.com"
            />
            <input
              type="text"
              className={Style.placeholder}
              placeholder="About me: bla bla bla bla..."
            />
            <div className={Style.containerBtn}>
              <button>Save</button>
              <button>Discard</button>
            </div>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default User;
