import React from "react";

export function Header({ children }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        {children}
      </a>
    </nav>
  );
}
