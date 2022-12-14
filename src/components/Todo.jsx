import { useEffect, useRef } from 'react'
import styled from '@emotion/styled'

const TodoWrapper = styled.div`
  margin: 0.5rem;
  background: white;
  font-size: 1.5rem;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all .5s ease;
  &.fall {
    transform: translateY(10rem) rotateZ(20deg);
    opacity: 0;
  } 
  .todo-item {
    padding: 0rem 0.5rem;
    flex: 1;
  }
  .trash-btn,
  .complete-btn {
    background: #ff6f47;
    color: white;
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1rem;
  }
  .complete-btn {
    background: rgb(11, 212, 162);
  }
  .fa-trash,
  .fa-check {
    pointer-events: none;
  } 
  .completed {
    text-decoration: line-through;
    opacity: 0.5;
  }
`

const Todo = ({ text, todos, setTodos, todo }) => {

  const transitionElement = useRef();

  // delete todo when transtion end
  useEffect(() => {
    transitionElement.current.addEventListener("transitionend", () => {
      setTodos(todos.filter(el => el.id !== todo.id));
    })
  }, [todos]);

  const fallHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          fall: true,
        }
      }
      return item;
    }))
  };

  const completeHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }))
  };

  return (
    <TodoWrapper className={todo.fall ? "fall" : ""} ref={transitionElement}>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={fallHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </TodoWrapper >
  );
}

export default Todo;