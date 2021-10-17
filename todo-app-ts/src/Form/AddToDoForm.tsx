import React, { ChangeEvent, FormEvent, useState } from "react";
interface AddToDoFormProps{
    addTodo: AddTodo
  }
export const AddTodoForm: React.FC<AddToDoFormProps> = ({addTodo}) => {
  const [newTodo, setNewTodo] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) =>{
      e.preventDefault();
      addTodo(newTodo)
      setNewTodo ("")
  }

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}> Add Todo</button>
      <label>
          <input type="checkbox" /> Показать фильтр

          
      </label>
    </form>

    
  );
};
