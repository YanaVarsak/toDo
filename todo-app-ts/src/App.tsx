import React, { useState } from "react";
import { TodoList } from "./ToDoList/ToDoList";
import { AddTodoForm } from "./Form/AddToDoForm";

const initialTodos: Array<ToDo> = [
  { text: "walk the dog", complete: true, isFilter: false, },
  { text: "write app", complete: false, isFilter: false, },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false, isFilter: false }]);
  };
  return (
    <React.Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
