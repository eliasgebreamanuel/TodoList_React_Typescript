import React, { useState, useEffect } from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';

interface Item {
  id: number;
  text: string;
  completed: boolean;
  category: string;
}

const categoryOptions = ['Personal', 'Work', 'Educational', 'Gym'];

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Item[]>(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const [input, setInput] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredTodos =
    activeCategory === 'All' ? todos : todos.filter((todo) => todo.category === activeCategory);

  const handleToggle = (id: number, checked: boolean) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: checked };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleClick = () => {
    const newTodo: Item = { id: Date.now(), text: input, completed: false, category: category };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setInput('');
    setCategory('');
  };

  return (
    <div className="main-container">
      <h1>Todo List</h1>
      <div className="category-tabs">
        <button className={activeCategory === 'All' ? 'active' : ''} onClick={() => setActiveCategory('All')}>
          All
        </button>
        {categoryOptions.map((option) => (
          <button
            key={option}
            className={activeCategory === option ? 'active' : ''}
            onClick={() => setActiveCategory(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <ul>
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggle(todo.id, !todo.completed)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text} - {todo.category}
            <input
              className="checked_lists"
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => handleToggle(todo.id, e.target.checked)}
            />
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(todo.id);
              }}
            >
              <RiDeleteBin2Line />
            </button>
          </li>
        ))}
      </ul>

      <div className="todo-input-container">
        <input
          className="todo_input"
          type="text"
          placeholder="Add todo item"
          value={input}
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <select
          className="category_input"
          value={category}
          onChange={(e) => setCategory(e.currentTarget.value)}
        >
          <option value="">Select a category</option>
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button className="bg-green-500 add-button" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoList;