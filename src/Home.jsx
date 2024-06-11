
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
      <Nav></Nav>
      <ViewMoney></ViewMoney>
      <Secction></Secction>
      <Money></Money>
      <IngresoData isChecked={isChecked}></IngresoData>
      <Footer></Footer>
    </>
  );
}
Home.propTypes = {
  isChecked: PropTypes.bool,
};

export default Home;
