import uuid from 'uuid/v4';
import useLocalStorageState from './useLocalStorageState';

export default initialtodos => {
  const [todos, setTodos] = useLocalStorageState('todos', initialtodos);

  const addTodo = todo => {
    setTodos([...todos, { id: uuid(), task: todo, completed: false }]);
  };

  const removeTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editTodo,
  };
};
