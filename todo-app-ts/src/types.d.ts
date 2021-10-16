type ToDo = {
  text: string;
  complete: boolean;
};

type ToggleTodo = (selectedTodo: ToDo) => void;
type AddTodo = (newTodo: string) => void;
