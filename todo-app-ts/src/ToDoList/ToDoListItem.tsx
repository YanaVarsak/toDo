import React from "react";
import "./ToDoListItem.css";

interface TodoListItemProps {
  todo: ToDo;
  toggleTodo: ToggleTodo;
}

export const ToDoListItem: React.FunctionComponent<TodoListItemProps> = ({todo, toggleTodo}) => {
  return (
      
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input type="checkbox" checked={todo.complete}  onChange={()=> toggleTodo(todo)}/>
        {todo.text}
      </label>
    </li>
    
  );
};
