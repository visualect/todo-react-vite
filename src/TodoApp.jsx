import { useRef, useState } from 'react';
import TodoItem from './TodoItem';

export default function TodoApp() {
  const inputRef = useRef(null);
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputRef.current.value) return;

    const newItem = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      done: false,
      text: inputRef.current.value,
    }

    setTodos([...todos, newItem]);
    console.log(todos);
    inputRef.current.value = '';
  }

  function deleteItem(id) {
    setTodos(todos.filter(item => item.id !== id));
  }

  return (
    <div className='container'>
      <form className="form" onSubmit={handleSubmit}>
        <input className="form__input" type="text" placeholder="Do" ref={inputRef} />
        <button className="btn btn-form">Add</button>
      </form>
      <ul className='list'>
        {todos.map(item => <TodoItem text={item.text} key={item.id} deleteItem={() => deleteItem(item.id)} />)}
      </ul>
    </div>
  )
}