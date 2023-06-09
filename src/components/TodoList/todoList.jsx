import styles from "./todoList.module.css";
import { useState } from "react";
import TodoModel from "../UI/model/todoModel";
import propTypes from "prop-types";

const TodoList = (props) => {
  const [showUpdateModel, setShowUpdateModel] = useState(false);
  const [todoToUpdate, setTodoToUpdate] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const dismissModal = () => {
    setShowDeleteModal(false);
    setShowUpdateModel(false);
  };

  const todos = props.data.map((todo) => {
    return (
      <div className={styles.TodoCard__listItem} key={todo.key}>
        <div className={styles.TodoCard__listItem__todo}>
          <h2 className={styles.TodoCard__listItem__title}>
            {todo.value.title}
          </h2>
          <p className={styles.TodoCard__listItem__description}>
            {todo.value.description}
          </p>
          <div style={{ display: "flex", gap: "3rem" }}>
            <span className={styles.TodoCard__listItem__date}>
              <box-icon name="calendar" color="#007bff"></box-icon>
              <span>
                {new Date(todo.value.lastUpdated).toLocaleDateString()}
              </span>
            </span>
            {todo.value.completed == "true" ? (
              <span className={styles.TodoCard__listItem__date}>
                <box-icon name="list-check" color="#0dce07"></box-icon>
                <span>completed</span>
              </span>
            ) : (
              <span className={styles.TodoCard__listItem__date}>
                <box-icon name="list-check" color="#ff0000"></box-icon>
                <span>Not Completed</span>
              </span>
            )}
          </div>
        </div>
        <div className={styles.TodoCard__listItem__actions}>
          <button className={styles.TodoCard__listItem__actions__btn}>
            <box-icon
              name="edit"
              color="#007bff"
              onClick={() => {
                setShowUpdateModel(true);
                setTodoToUpdate(todo);
              }}
            ></box-icon>
          </button>
          <button
            className={styles.TodoCard__listItem__actions__btn}
            onClick={() => {
              setShowDeleteModal(true);
              setTodoToDelete(todo);
            }}
          >
            <box-icon name="trash-alt" color="#ff0000"></box-icon>
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      {showUpdateModel && (
        <TodoModel
          updatetodo={todoToUpdate}
          onUpdateTodo={props.onUpdateTodo}
          onClose={() => setShowUpdateModel(false)}
          onDismiss={dismissModal}
        />
      )}
      {showDeleteModal && (
        <TodoModel
          deletetodo={todoToDelete}
          onDeleteTodo={props.onDeleteTodo}
          onClose={() => setShowDeleteModal(false)}
          onDismiss={dismissModal}
        />
      )}
      <section className={styles.TodoCard__list}>
        <h3 className={styles.heading}>Tasks</h3>

        {/* actual todo */}
        {props.data.length === 0 && <p>No tasks !</p>}
        <div className={styles.scrollArea}>{todos}</div>
      </section>
    </>
  );
};

TodoList.propTypes = {
  data: propTypes.array.isRequired,
  onDeleteTodo: propTypes.func,
  onUpdateTodo: propTypes.func,
};

export default TodoList;
