import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import useInputState from '../hooks/useInputState';

const EditForm = ({ editTodo, id, task, toggle }) => {
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset('');
        toggle();
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </form>
  );
};

EditForm.propTypes = {
  editTodo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default EditForm;
