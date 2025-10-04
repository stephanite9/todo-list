import {useState} from 'react';
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([
    "Task 1", 
    "Task 2"
  ]);

  return (
    <>
      <h1>My Todo List</h1>
      {todos.map((todo, index) => (
        <TodoItem text={todo} key={index}/>
      ))}
    </>
);
}

export default App;
