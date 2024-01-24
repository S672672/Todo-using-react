// Todo.js
import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = inputValue;
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        setTodos([...todos, inputValue]);
      }
      setInputValue('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setEditIndex(null);
  };

  const editTodo = (index) => {
    setEditIndex(index);
    setInputValue(todos[index]);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow border rounded-l px-3 py-2 focus:outline-none focus:border-blue-500"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded-r">
          {editIndex !== null ? 'Edit' : 'Add'}
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex items-center justify-between mb-2 px-4 py-2 border rounded bg-gray-100"
          >
            <span>{todo}</span>
            <div className="flex gap-2">
              <button
                onClick={() => removeTodo(index)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
              <button
                onClick={() => editTodo(index)}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
