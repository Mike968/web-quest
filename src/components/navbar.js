import React from "react";
import "../index.css";

function Navbar() {
  return (
    <div className="Navbar">
      <header className="flex items-center justify-between bg-teal-400 py-4">
        <h1 className="ml-5 text-xl font-bold">WebQuest</h1>
        <div className="mr-5 flex">
          <nav>
            <a href="/">Home</a>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
