import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import CheckBox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const Todo = ({ todo: { task, completed, id }, removeTodo, toggleTodo }) => {
  const handleRemove = () => {
    removeTodo(id);
  };

  const handleToggle = () => {
    toggleTodo(id);
  };
  return (
    <>
      <ListItem>
        <CheckBox checked={completed} tabIndex={-1} onClick={handleToggle} />
        <ListItemText
          style={{ textDecoration: completed ? 'line-through' : '' }}
        >
          {task}
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton aria-label="delete" onClick={handleRemove}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Edit">
            <EditIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  );
};

export default Todo;
