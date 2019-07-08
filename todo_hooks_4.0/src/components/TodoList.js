/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  const renderTodos = todos.map(
    (todo, i) => (
      <>
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
        {i < todos.length - 1 && <Divider />}
      </>
    ),
    [todos]
  );
  if (todos.length) {
    return (
      <Paper>
        <List> {renderTodos}</List>
      </Paper>
    );
  }
  return null;
};

TodoList.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoList;
