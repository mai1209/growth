import Style from "./style/User.module.css";
import Footer from "./Footer";
import IngresoData from "./IngresoData";
import PropTypes from "prop-types";
import Money from "./Money";
import Secction from "./Secction";
import ViewMoney from "./ViewMoney";
import Nav from "./Nav";

function Home({ isChecked }) {
  return (
    <>
      <div className={Style.body}>
        <div>
          <Nav></Nav>
          <ViewMoney></ViewMoney>
          <Secction></Secction>
          <Money></Money>
          <IngresoData isChecked={isChecked}></IngresoData>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}
Home.propTypes = {
  isChecked: PropTypes.bool,
};

export default Home;
