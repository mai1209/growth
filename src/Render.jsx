import App from "./App"
import PropTypes from 'prop-types';

function Render({ isChecked}) {
  return (
    <App  isChecked={isChecked} ></App>
  )
}
Render.propTypes = {
    isChecked: PropTypes.bool
  };
export default Render