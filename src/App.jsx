import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "boxicons";
import Card from "./components/UI/card/card";
import TodoList from "./components/TodoList/todoList";
import Button from "./components/UI/button/button";
import TodoModel from "./components/UI/model/todoModel";
import { useState } from "react";
import { toast } from "react-toastify";
import Tododata from "./assets/dummyData.json";

const App = () => {
  let data = Tododata.entries;
  const [todoData, setTodoData] = useState(data);
  const [showTodomodal, setShowTodoModla] = useState(false);

  const addTodos = (todo) => {
    console.log(todo);
    setTodoData((prevState) => [...prevState, todo]);
    toast.success("Todo added Succesfully !");
  };

  const deleteTodo = (id) => {
    console.log("Deleting todo with id:", id);
    setTodoData((prevState) => {
      const updatedTodos = prevState.filter((todo) => todo.key !== id);
      return updatedTodos;
    });
    toast.success("Todo deleted successfully!");
  };

  const updateTodo = (id, updatedTodo) => {
    console.log("Updating todo with id:", id);
    setTodoData((prevState) =>
      prevState.map((todo) =>
        todo.key === id ? { ...todo, ...updatedTodo } : todo
      )
    );
    toast.success("Todo updated successfully!");
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        limit={3}
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick
        draggable
        pauseOnHover
      />
      {showTodomodal && (
        <TodoModel
          onClose={() => setShowTodoModla(false)}
          addTodo={true}
          onAddTodo={addTodos}
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
        </Card>
      </div>
    </div>
  );
};

export default App;
