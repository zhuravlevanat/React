import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Modal from './components/Modal';
import api from './services/api';

function App() {
  const [todos, setTodos] = useState([{id: 1, title: 'Task1', isDone: false}]);
  const [newTodo, setNewTodo] = useState({title: '', isDone: false});
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    api.get('').then(resp => setTodos(resp.data));
  }, []);

  const onTodoAdd = () => {
    setModalState(true);
  }

  const onTodoInputChange = (title) => {
    setNewTodo({
      ...newTodo,
      title,
    })
  }

  const onCancel = () => {
    setModalState(false);
    setNewTodo({title: '', isDone: false});
  }

  const createTodo = todo => {
    api.post('', todo).then(res => setTodos([...todos, res.data]));
  }

  const updateTodo = todo => {
    api.put(todo.id, todo).then(res => setTodos(todos.map(item => item.id === res.data.id ? res.data : item)));
  }

  const onFormSubmit = (e, todo) => {
    e.preventDefault();
    setModalState(false);
    if (todo.id) {
      updateTodo(todo);
    } else {
      createTodo(todo);
    }
    setNewTodo({title: '', isDone: false});
  }

  const onTodoDelete = (e, id) => {
    e.stopPropagation();
    api.delete(id).then(res => setTodos(todos.filter(todo => todo.id !== res.data.id)));
    
  }

  const onTodoDone = (id) => {
    let newTodo = todos.find(todo => todo.id === id);
    newTodo.isDone = !newTodo.isDone;
    const newTodos = todos.map(todo => todo.id === id ? newTodo : todo);
    setTodos(newTodos);
  }

  const onTodoEdit = (e, todo) => {
    e.stopPropagation();
    setModalState(true);
    setNewTodo(todo);
  }
  return (
    <>
      {(modalState && 
        <Modal onChange={onTodoInputChange} 
          todo={newTodo}
          onCancel={onCancel}
          onFormSubmit={onFormSubmit}/>)}
      <div style={containerStyle}>
        <Header onTodoAdd={onTodoAdd}/>
        <TodoList list={todos}
          onTodoDelete={onTodoDelete}
          onTodoDone={onTodoDone}
          onTodoEdit={onTodoEdit}/>       
      </div>
    </>
  );
}

const containerStyle = {
  width: '700px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#272726',
  color: '#ffffff'
}

export default App;
