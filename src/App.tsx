import { useState } from "react";
import "./App.css";
import Add from "./contents/Add";
import Todo from "./contents/Todo";

export default function App() {
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

  return (
    <section>
      <ul
        style={{
          textAlign: "center",
          border: "2px solid black",
          width: "24rem",
          height: "24rem",
          backgroundColor: "#4B73E1",
          color: "white",
          fontSize: "1.5rem",
          overflow: "auto",
        }}
      >
        {list.map((item) => (
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
