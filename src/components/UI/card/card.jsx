import styles from "./card.module.css";
import propTypes from "prop-types";

const Card = (props) => {
  return <div className={styles.TodoCard}>{props.children}</div>;
};

Card.propTypes = {
  children: propTypes.node,
};

export default Card;
