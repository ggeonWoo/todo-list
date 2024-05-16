import { useState } from "react";
import "./App.css";
import Add from "./contents/Add";
import Todo from "./contents/Todo";
import './index.css';

export default function App({filter}) {
  const [list, setList] = useState([
    { id: 123, text: "공부하기", state: "active" },
    { id: 456, text: "놀기", state: "active" },
    { id: 789, text: "잠자기", state: "active" },
  ]);
  const handleAdd = (todo: any) => setList([...list, todo]);
  const handleUpDate = (updated: any) =>
    setList(list.map((list) => (list.id === updated.id ? updated : list)));
  const handleDelete = (deleted: any) =>
    setList(list.filter((list) => list.id !== deleted.id));

    const flietered= getFiltered(list,filter)
  return (
    <section>
      <ul>
        {flietered.map((item:any) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpDate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <Add onAdd={handleAdd} />
    </section>
  );
}

function getFiltered(list:any,filter:any){
  if(filter==='all'){
    return list;
  }return list.filter((list:any)=>list.state===filter)
}



