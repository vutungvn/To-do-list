import React, { useState } from "react";

type Todo = {
  id: number;
  title: string;
  status: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleSubmit = () => {
    // Bỏ khoảng trắng ở đầu và cuối
    const trimmedTitle = title.trim();
    if (trimmedTitle === "") return;

    const formData = {
      id: Date.now(),
      title: trimmedTitle,
      status: false,
    };

    setTodos([...todos, formData]);

    setTitle("");
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleToggleStatus = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Todo List</h2>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            value={title}
            onChange={handleChange}
            type="text"
            placeholder="Add Todo"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            disabled={title.trim() === ""}
            onClick={handleSubmit}
            className={`${title.trim() === "" ? "opacity-50 cursor-not-allowed" : "hover:bg-teal-700"} px-4 py-2 bg-teal-600 text-white rounded-lg transition`}
          >
            Add
          </button>
        </div>

        {/* Todo Item */}
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center justify-between mb-4">
            <p
              className={`${todo.status ? "text-gray-400 line-through" : "text-gray-700"}`}
            >
              {todo.title}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => handleToggleStatus(todo.id)}
                className="px-3 py-1 border rounded-lg hover:bg-gray-100"
              >
                {todo.status ? "Undone" : "Done"}
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="px-3 py-1 border rounded-lg text-red-500 hover:bg-red-50"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
