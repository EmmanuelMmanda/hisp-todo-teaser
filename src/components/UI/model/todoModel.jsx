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
            {props.deletetodo && (
              <InputGroup
                deletetodo={props.deletetodo}
                onDeleteTodo={props.onDeleteTodo}
                onClose={props.onClose}
                onDismiss={props.onDismiss}
              />
            )}

            {props.updatetodo && (
              <InputGroup
                updateData={props.updatetodo}
                onUpdateTodo={props.onUpdateTodo}
                onClose={props.onClose}
                onDismiss={props.onDismiss}
              />
            )}

            {props.addTodo && (
              <InputGroup
                addTodo={props.addTodo}
                onAddTodo={props.onAddTodo}
                onDismiss={props.onDismiss}
              />
            )}
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
  onAddTodo: propTypes.func,
  onDeleteTodo: propTypes.func,
  onUpdateTodo: propTypes.func,
  onDismiss: propTypes.func,
};

export default TodoModel;
