import PropTypes from "prop-types";
import "boxicons";
import styles from './button.module.css'

const Button = (props) => {
  return (
    <button type="" onClick={props.onClick} className={styles} style={{width: "100%"}}>
      <box-icon
        name={props.iconName}
        color="#007bff"
      ></box-icon>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Button;
