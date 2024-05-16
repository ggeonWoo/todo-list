import { useEffect, useState } from "react";
import "./App.css";
import Add from "./contents/Add";
import Todo from "./contents/Todo";
import "./index.css";
import create from "zustand";

const useStore = create((set) => ({
  
}));

interface TodoItem {
  id: number;
  text: string;
  state: string;
}

export default function App({ filter }: { filter: string }) {
  const [list, setList] = useState<TodoItem[]>([]);
  const handleAdd = (todo: TodoItem) => setList([...list, todo]);
  const handleUpDate = (updated: TodoItem) =>
    setList(list.map((list) => (list.id === updated.id ? updated : list)));
  const handleDelete = (deleted: TodoItem) =>
    setList(list.filter((list) => list.id !== deleted.id));

  const flietered = getFiltered(list, filter);

  const fetchMember = async () => {
    const response = await fetch("http://localhost:3001/list", {
      method: "GET",
    });
    const jsonData = await response.json();
    setList(jsonData);
  };

  const createMember = async (todo: TodoItem) => {
    console.log(todo);
    await fetch("http://localhost:3001/list", {
      method: "POST",
      body: JSON.stringify(todo),
    });
    fetchMember();
  };

  const deleteMember = async (todo: TodoItem) => {
    console.log(todo);
    await fetch("http://localhost:3001/list/" + todo.id, {
      method: "DELETE",
    });
    fetchMember();
  };

  useEffect(() => {
    fetchMember();
  }, []);

  return (
    <section>
      <ul>
        {flietered.map((item: TodoItem) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpDate}
            onDelete={deleteMember}
          />
        ))}
      </ul>
      <Add onClick={createMember} />
    </section>
  );
}

function getFiltered(list: TodoItem[], filter: string) {
  if (filter === "all") {
    return list;
  }
  return list.filter((list) => list.state === filter);
}
