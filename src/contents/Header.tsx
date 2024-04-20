import React from "react";

export default function Header({ filters, filter, onChange }) {
  return (
    <header>
      <ul>
        {filters.map((value: any, index: any) => (
          <li key={index}>
            <button
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
