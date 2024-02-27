import PropTypes from "prop-types";
import { ButtonType, ButtonSize } from "./Theme.jsx";

function Button({ size, type, children }) {
  // This can be improved. I’m keeping it simple here by joining two strings.
  const classNames = ButtonType[type] + " " + ButtonSize[size];

  return <button className={classNames}>{children}</button>;
}

export default Button;

Button.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string,
};
