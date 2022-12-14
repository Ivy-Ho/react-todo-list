import Todo from "./Todo";
import styled from '@emotion/styled'

const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .todo-list {
    min-width: 30%;
    list-style: none;
  }
  
`

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <TodoContainer>
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Todo
            text={todo.text}
            key={todo.id}
            todos={todos}
            todo={todo}
            setTodos={setTodos} />
        ))}
      </ul>
    </TodoContainer>
  );
}

export default TodoList;