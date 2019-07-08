import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

const TodoList = ({ todos, removeTodo, toggleTodo }) => {
  // const renderTodos = () =>
  //   todos.map(todo => (
  //     <>
  //       <Todo todo={todo} key={todo.id} /> <Divider />
  //     </>
  //   ));

  const renderTodos = todos.map(todo => (
    <Todo
      key={todo.id}
      todo={todo}
      removeTodo={removeTodo}
      toggleTodo={toggleTodo}
    />
  ));
  return (
    <Paper>
      <List>{renderTodos}</List>
    </Paper>
  );
};

export default TodoList;
