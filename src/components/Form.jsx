import styled from '@emotion/styled'

const TodoForm = styled.form`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  input, button {
    padding: 0.5rem;
    font-size: 2rem;
    border: none;
    background: white;
  }
  button {
    color: #ff6f47;
    background: #f7fffe;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background: #ff6f47;
      color: white;
    }
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0 !important;
    background-image: none;
    color: #ff6f47;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    width: 12rem;
    padding: 1rem;
  }
  .select {
    margin: 1rem;
    position: relative;
    overflow: hidden;
    &:after {
      content: "\\25BC";
      position: absolute;
      top: 0;
      right: 0;
      padding: 1rem;
      background: #ff6f47;
      cursor: pointer;
      pointer-events: none;
    }
  }
`

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

  const inputTextHandler = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText.trim().length) {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random() * 1000,
          fall: false
        }
      ]);
    } else {
      alert("Please add some content!");
    }

    setInputText("");
  }

  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return (
    <TodoForm>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </TodoForm>
  );
}

export default Form;