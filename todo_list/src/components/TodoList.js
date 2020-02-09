import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({list, onTodoDelete, onTodoDone, onTodoEdit}) => {
  return (
    <ul style={listStyle}>
        {list.map(todoItem => (
          <TodoListItem key={todoItem.id} item={todoItem}
            onTodoDelete={onTodoDelete}
            onTodoDone={onTodoDone}
            onTodoEdit={onTodoEdit}/>
        ))}
      </ul>
  );
}

const listStyle = {
  listStyle: 'none', 
  margin: '0',
  padding: '0',
}

export default TodoList;
