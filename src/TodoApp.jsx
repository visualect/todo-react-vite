import { useRef, useState } from 'react';
import { Toaster, toast } from 'sonner';
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
    inputRef.current.value = '';
  }

  function deleteItem(id) {
    setTodos(todos.filter(item => item.id !== id));
  }

  function completeItem(id) {
    setTodos(todos.map(item => {
      if (item.id === id) {
        item.done = !item.done
        return item;
      }
      return item;
    }));
  }

  return (
    <div className='container'>
      <Toaster />
      <form className="form" onSubmit={handleSubmit}>
        <input className="form__input" type="text" placeholder="Do" ref={inputRef} />
        <button className="btn btn-form">Add</button>
      </form>
      <ul className='list'>
        {todos.map((item, idx) => <TodoItem
          text={item.text}
          key={idx}
          deleteItem={() => {
            deleteItem(item.id)
            toast('Item successfully deleted');
          }}
          completeItem={() => completeItem(item.id)}
          done={item.done}
        />)}
      </ul>
    </div>
  )
}