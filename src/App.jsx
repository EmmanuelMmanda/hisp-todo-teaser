import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "boxicons";
import Card from "./components/UI/card/card";
import TodoList from "./components/TodoList/todoList";
import Button from "./components/UI/button/button";
import TodoModel from "./components/UI/model/todoModel";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
// import Tododata from "./assets/dummyData.json";
import {
  fetchAllTodos,
  addNewTodo,
  deleteATodo,
  updateATodo,
  fetchTodosByPage,
} from "./api";

const App = () => {
  const [todoData, setTodoData] = useState([]);
  const [showTodomodal, setShowTodoModla] = useState(false);

  const fetchTodosPage = async (pageno) => {
    const todos = await fetchTodosByPage(pageno);
    // console.log(todos);
    setTodoData(todos.entries);
  };

  const fetchTodos = async () => {
    const todos = await fetchAllTodos();
    setTodoData(todos.entries);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const dismissModal = () => {
    setShowTodoModla(false);
  };

  const addTodos = async (todo) => {
    // toast.info("Adding todo !");
    // send the todo request
    const res = await addNewTodo(todo);
    res.status == "OK"
      ? toast.success("Todo added Succesfully !")
      : toast.error("Failed to fetch todos!");
    // refreshn todo data
    res.status == "OK" && fetchTodos();
  };

  const deleteTodo = async (id) => {
    // toast.info("deleting todo !");
    const data = await deleteATodo(id);
    data.status == 200
      ? toast.success("Todo deleted successfully!")
      : toast.error("Failed to delete todo!");
    data.status == 200 && fetchTodos();
  };

  const updateTodo = async (id, updatedTodo) => {
    console.log("Updating todo with id:", id);
    // toast.info("Updating todo !");
    const update = await updateATodo(id, updatedTodo);

    update.status == "OK"
      ? toast.success("Todo updated successfully!")
      : toast.error("Failed to Update todo!");
    // refresh todos data
    update.status == "OK" && fetchTodos();
  };

  // console.log("curent data ", todoData[0]);

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        limit={2}
        autoClose={1500}
        hideProgressBar={false}
        closeOnClick
        draggable
        pauseOnHover
      />
      {showTodomodal && (
        <TodoModel
          onClose={() => setShowTodoModla(false)}
          addTodo={true}
          onAddTodo={addTodos}
          onDismiss={dismissModal}
        />
      )}

      <div className="TodoApp">
        <div className="TodoApp__title">
          <h1>HISP Todo Teaser</h1>
        </div>
        <Card>
          <Button
            onClick={() => setShowTodoModla(true)}
            text="Add Todo"
            iconName="plus"
          />
          <TodoList
            data={todoData}
            onDeleteTodo={deleteTodo}
            onUpdateTodo={updateTodo}
          />
          <div className="pager-comp">
            <button onClick={() => fetchTodosPage(1)}>Page 1</button>
            <button onClick={() => fetchTodosPage(2)}>Page 2</button>
            <button onClick={() => fetchTodosPage(3)}>Page 3</button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default App;
