import { useReducer, useState } from "react";
import "./todo_app.css";
import BinImage from "../../assests/trash-black-24.png";

const TodoInput = ({ onSubmit }) => {
  let [val, setVal] = useState("");

  return (
    <div className="todo-input-box">
      <input
        className="todo-input-field"
        placeholder='type task and press "Enter"'
        onChange={(event) => {
          setVal(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.code === "Enter" && val !== "") {
            onSubmit(val);
            event.target.value = "";
            setVal("");
          }
        }}
      />
    </div>
  );
};

const ListElem = ({ task, onBinned }) => {
  let [check, setCheck] = useState(false);

  return (
    <div className="todo-elem">
      <div
        className="todo-elem-left"
        onClick={() => {
          setCheck(!check);
        }}
      >
        <input type="checkbox" checked={check} />
        <div style={check ? { textDecoration: "line-through" } : {}}>
          {task}
        </div>
      </div>
      <button className="todo-elem-delete" onClick={onBinned}>
        <img src={BinImage} />
      </button>
    </div>
  );
};

const TodoList = ({ todoList, onBinned }) => {
  return (
    <div className="todo-list-box">
      {todoList.map((task, i) => (
        <ListElem
          key={i}
          task={task}
          onBinned={() => {
            onBinned(i);
          }}
        />
      ))}
    </div>
  );
};

function todoHandler(todos, action) {
  switch (action.name) {
    case "add":
      return [...todos, action.data];
    case "delete":
      return [...todos.filter((_, i) => action.data !== i)];
    default:
      throw Error("Hello");
  }
}

const TodoApp = () => {
  const [todos, todo_do] = useReducer(todoHandler, []);

  return (
    <div className="todo-app">
      <TodoInput
        onSubmit={(value) => {
          todo_do({ name: "add", data: value });
        }}
      />
      <TodoList
        todoList={todos}
        onBinned={(i) => todo_do({ name: "delete", data: i })}
      />
    </div>
  );
};

export default TodoApp;
