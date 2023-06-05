import { useState } from "react";
import styles from "./input.module.css";
import propTypes from "prop-types";

const InputGroup = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div id="inputGroup" className={styles.TodoCard__inputGroup}>
      <h2 style={{ margin: 0, padding: 0 }}>
        {props.addTodo && "Add Todo"}
        {props.updateData && "Update Todo"}
        {props.deletetodo && "Delete Todo"}
      </h2>
      {props.deletetodo && (
        <>
          <label htmlFor="title">Title: {props.deletetodo.value.title}</label>
          <label htmlFor="description">
            Title: {props.deletetodo.value.description}
          </label>
          <h2 style={{ color: "red" }}>
            Are you sure you want to delete this todo?
          </h2>
        </>
      )}
      {!props.deletetodo && (
        <div className={styles.TodoCard__inputGroup_inputs}>
          <div className={styles.TodoCard__inputGroup_inputs_title}>
            <label htmlFor="title">To-do Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter todo title"
              defaultValue={
                props.updateData ? props.updateData.value.title : ""
              }
            />
          </div>
          <div className={styles.TodoCard__inputGroup_inputs_desc}>
            <label htmlFor="todo-descr">To-do Description</label>
            <textarea
              id="todo-descr"
              placeholder="Enter todo description"
              defaultValue={
                props.updateData ? props.updateData.value.description : ""
              }
            ></textarea>
          </div>
          {/* pass a todo key if updating data */}
          {props.updateData && (
            <>
              <h2 htmlFor="todo-atatus">To-do Status</h2>
              <select
                name="todo-status"
                className={styles.select}
                defaultValue={props.updateData.value.completed}
              >
                <option value="completed">Completed</option>
                <option value="pending">Pendig</option>
              </select>
              <input
                type="hidden"
                value={props.updateData ? props.updateData.key : ""}
              />
            </>
          )}
        </div>
      )}
      {!props.deletetodo && (
        <button
          className={styles.TodoCard__actions__btn}
          onClick={() => setIsLoading(true)}
        >
          {isLoading && (
            <span className="submit_btn">
              <box-icon
                name="loader-alt"
                color="#0074bf"
                animation="spin"
                flip="horizontal"
              ></box-icon>
              {props.updateData ? (
                <span>updating ..</span>
              ) : (
                <span>sending ..</span>
              )}
            </span>
          )}
          {!isLoading &&
            (props.updateData ? (
              <span className="submit_btn">
                <span>update</span>
                <box-icon name="edit" color="#0074bf"></box-icon>
              </span>
            ) : (
              <span className="submit_btn">
                <span>submit</span>
                <box-icon name="send" color="#28a74b"></box-icon>
              </span>
            ))}
        </button>
      )}
      {props.deletetodo && (
        <button
          className={styles.TodoCard__actions__delete_btn}
          onClick={() => setIsLoading(true)}
        >
          {isLoading && (
            <span className="submit_btn">
              <box-icon
                name="loader-alt"
                color="#0074bf"
                animation="spin"
                flip="horizontal"
              ></box-icon>
              <span>deleting ..</span>
            </span>
          )}
          {!isLoading && (
            <span className="submit_btn">
              <span>delete</span>
              <box-icon name="trash" color="#ff0000"></box-icon>
            </span>
          )}
        </button>
      )}
    </div>
  );
};

InputGroup.propTypes = {
  updateData: propTypes.object,
  deletetodo: propTypes.object,
  addTodo: propTypes.bool,
};

export default InputGroup;
