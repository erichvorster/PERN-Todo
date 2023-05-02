import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  return (
    <div>
      <h1 className="text-center text-2xl">Pern Todo List</h1>
      <form>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default InputTodo;
