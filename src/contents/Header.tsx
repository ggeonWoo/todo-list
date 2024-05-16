import React from "react";

export default function Header({ filters, filter, onChange }) {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid gray",
      }}
    >
      <ul style={{ display: "flex" }}>
        {filters.map((value: any, index: any) => (
          <li key={index}>
            <button
              style={{ margin: "0.4rem", fontSize: "1.8rem" }}
              onClick={() => {
                onChange(value);
              }}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
