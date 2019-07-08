import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import useInputState from '../hooks/useInputState';

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    reset();
  };

  return (
    <Paper style={{ margin: '1rem', padding: '0 1rem' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="add new todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
