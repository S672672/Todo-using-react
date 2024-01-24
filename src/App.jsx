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
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>{editIndex !== null ? 'Edit' : 'Add'}</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
            <button onClick={() => editTodo(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
