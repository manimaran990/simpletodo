import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:5000/todos');
      const data = await response.json();
      setTodos(data.todos);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;