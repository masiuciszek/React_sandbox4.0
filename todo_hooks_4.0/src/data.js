import uuid from 'uuid/v4';

export default [
  {
    id: uuid(),
    task: 'Go for a run',
    completed: false,
  },
  {
    id: uuid(),
    task: 'Go for a walk',
    completed: false,
  },
  {
    id: uuid(),
    task: 'Get some food',
    completed: false,
  },
];
