import { useReducer, useState } from "react";
import "./todo_app.css";

const TodoInput = ({ onSubmit }) => {
  let [val, setVal] = useState("");

  return (
    <div className="todo-input-box">
      <input
        className="todo-input-field"
        placeholder="What to do?"
        onChange={(event) => {
          console.log(event.target.value);
          setVal(event.target.value);
        }}
      />
      <button
        className="todo-add-button"
        onClick={() => {
          onSubmit(val);
        }}
      >
        +
      </button>
    </div>
  );
};

const ListElem = ({ task, onBinned }) => {
  return (
    <div className="todo-elem">
      <div>{task}</div>
      <button onClick={onBinned}>-</button>
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
