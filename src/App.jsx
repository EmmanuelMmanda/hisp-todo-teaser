import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "boxicons";
import Card from "./components/UI/card/card";
import TodoList from "./components/TodoList/todoList";
import Button from "./components/UI/button/button";
import TodoModel from "./components/UI/model/todoModel";
import { useState } from "react";

const App = () => {
  const [showTodomodal, setShowTodoModla] = useState(false);

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
      {showTodomodal && <TodoModel onClose={() => setShowTodoModla(false)} addTodo={true} />}

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
          <TodoList />
        </Card>
      </div>
    </div>
  );
};

export default App;
