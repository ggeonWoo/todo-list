import { FaTrashCan } from "react-icons/fa6";

export default function Todo({ todo, onUpdate, onDelete }:any) {
  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    const state=e.target.checked?'completed':'active';
    onUpdate({...todo,state});
  };
  const handleDelete=()=>(onDelete(todo))

  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={todo.state === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{todo.text}</label>
      <button onClick={handleDelete}>
        <FaTrashCan />
      </button>
    </li>
  );
}

