import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'
import styled from '@emotion/styled'

const Header = styled.div`
  font-size: 2rem;
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  }
`


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // RUN ONCE when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  // USE EFFECT
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    const todoLocal = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(todoLocal);
  }

  return (
    <div className="App">
      <Header>
        <h1>Ed's Todo List</h1>
      </Header>
      <Form inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
