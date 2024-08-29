import { useReducer } from "react";
import "./todo_app.css";

const TodoInput = ({ onSubmit }) => {
  return (
    <div className="todo-input-box">
      <input className="todo-input-field" placeholder="What to do?" />
      <button className="todo-add-button">+</button>
    </div>
  );
};

const ListElem = ({ task, onDelete }) => {
  return (
    <div className="todo-elem">
      <p>{task}</p>
    </div>
  );
};

const TodoList = ({ todoList, onDelete }) => {
  return (
    <div className="todo-list-box">
      {todoList.map((i, task) => (
        <ListElem key={i} task={todoList[task]} onDelete={() => {}} />
      ))}
    </div>
  );
};

function todoHandler(todos, action) {}

const TodoApp = () => {
  let [todos, todo_do] = useReducer(todoHandler, []);
  return (
    <div className="todo-app">
      <TodoInput />
      <TodoList todoList={["task 1", "task 2"]} />
    </div>
  );
};

export default TodoApp;
