import style from "./style/App.module.css";
import logo from "./assets/settings_24dp.svg";
import Footer from "./Footer"
import IngresoData from "./IngresoData";
import PropTypes from 'prop-types';
import Money from "./Money";

function Home({isChecked }) {
  return (
    <>
      <div className={style.containerNav}>
        <h1 className={style.logo}>
          GROWTH <span>.</span>
        </h1>
        <img className={style.settingIcon} src={logo} alt="icon-setting" />
      </div>
      <Money ></Money>
      <IngresoData  isChecked={isChecked}></IngresoData>
      <Footer></Footer>
    </>
  );
}
Home.propTypes = {
  isChecked: PropTypes.bool,
 
};

export default Home;
