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
  };
  console.log(send);
  return (
    <div>
      <h1>Todo-list Practice !!</h1>
      <div>
        <input id="name" type="text" placeholder="write your name!" />
      </div>

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
        </form>
      </div>
      <button>Add To Do</button>
			{send}
    </div>
  );
}

export default App;

/**
 * 왜 form태그를 사용해야 할까?
 * form태그가 onSubmit 이벤트가 있는 것으로 알고 있는데
 * 새로고침이 자동으로 돼서 막아줘야 한다는 것은 인지.
 *
 * 사용자가 입력시 할 일에 대해 랜더링 되고,
 *
 */