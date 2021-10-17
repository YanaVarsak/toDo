import React from "react";
import { ToDoListItem } from "./ToDoListItem";
interface TodoListProps {
  todos: Array<ToDo>;
  toggleTodo: ToggleTodo;
}
export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <ToDoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        );
      })}
    </ul>
  );
};
