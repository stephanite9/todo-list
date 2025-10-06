import {useState} from 'react';
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    "Task 1", 
    "Task 2",
    "Task 3",
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
    };

  return (
    <div className='app'>
      <h1 className='todo-list'>My Todo List</h1>
      {todos.map((todo, index) => (
        <TodoItem text={todo} key={index}/>
      ))}
      <TodoForm addTodo={addTodo}/>
    </div>
);
}

export default App;
