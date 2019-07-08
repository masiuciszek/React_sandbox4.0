/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import CheckBox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import PropTypes from 'prop-types';
import useToggleState from '../hooks/useToggleState';
import EditForm from './EditForm';

const Todo = ({
  todo: { task, completed, id },
  removeTodo,
  toggleTodo,
  editTodo,
}) => {
  const [editing, toggle] = useToggleState(false);

  return (
    <>
      <ListItem style={{ height: 64 }}>
        {editing ? (
          <EditForm editTodo={editTodo} id={id} task={task} toggle={toggle} />
        ) : (
          <>
            <CheckBox
              checked={completed}
              tabIndex={-1}
              onClick={() => toggleTodo(id)}
            />
            <ListItemText
              style={{ textDecoration: completed ? 'line-through' : '' }}
            >
              {task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label="Edit" onClick={toggle}>
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default Todo;
