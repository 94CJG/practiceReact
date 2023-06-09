import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [send, setSend] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === '') {
      return;
    }
    setSend((addList) => [todo, ...addList]);
    setTodo('');
  };

  return (
    <div>
      <h1>Todo-list Practice !!</h1>
      <form>
        <div>
          <input id="name" type="text" placeholder="write your name!" />
          <button>Add User Name</button>
        </div>
      </form>

      {/* ToDolist 작성하는 곳 */}
      <div>
        <h2>add ToDo-List</h2>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={todo}
            id="list"
            type="text"
            placeholder="write your toDolist"
          />
          <button>Add To Do</button>
        </form>
        <ul>
          {send.map((item, num) => (
            <li key={num}> {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;


