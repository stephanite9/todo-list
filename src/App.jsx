import {useState} from 'react';
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
    
      text: "Try to learn React",
      isCompleted: false,
    },{
      text:"Cry and eat snacks",
      isCompleted: false,
    },{
      text:"Git gud",
      isCompleted: false,
    
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
    };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <h1 className='todo-list'>My Todo List</h1>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={index} index={index} completeTodo={completeTodo}/>
      ))}
      <TodoForm addTodo={addTodo}/>
    </div>
);
}

export default App;
