type ToDo = {
  text: string;
  complete: boolean;
  isFilter: boolean;
};

type ToggleTodo = (selectedTodo: ToDo) => void;
type AddTodo = (newTodo: string) => void;
