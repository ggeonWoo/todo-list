import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./contents/Header.tsx";
import App from "./App.tsx";
import "./index.css";

const filters = ["all", "active", "completed"];
const Root = () => {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <React.StrictMode>
      <Header filter={filter} filters={filters} onChange={setFilter} />
      <App filter={filter} />
    </React.StrictMode>
  );
};
ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
