import propTypes from "prop-types";
import { createPortal } from "react-dom";
import styles from "./todoModel.module.css";
import InputGroup from "../input/input";

const TodoModel = (props) => {
  const ModalContents = () => {
    return (
      <>
        <div className={styles.backdrop} onClick={props.onClose}></div>
        <div className={styles.modal_Card}>
          <div className={styles.modal_container}>
            <box-icon
              name="exit"
              animation="flashing"
              rotate="180"
              color="red"
              onClick={props.onClose}
              className={styles.close}
              style={{ cursor: "pointer", float: "right" }}
            ></box-icon>
            {props.deletetodo && <InputGroup deletetodo={props.deletetodo} />}
              
            {props.updatetodo && ( <InputGroup updateData={props.updatetodo} /> )}
             
            { props.addTodo && ( <InputGroup addTodo={props.addTodo} />) }
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {createPortal(
        ModalContents(),
        document.getElementById("todo-modal-container")
      )}
    </>
  );
};

TodoModel.propTypes = {
  onClose: propTypes.func.isRequired,
  todo: propTypes.object,
  deletetodo: propTypes.object,
  updatetodo: propTypes.object,
  addTodo: propTypes.bool,
};

export default TodoModel;
