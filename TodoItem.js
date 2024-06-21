import React from 'react';
import { Button } from 'reactstrap';

const TodoItem = ({ todo, onDelete, onToggleCompleted }) => {
  const handleToggleCompleted = () => onToggleCompleted(todo.id);
  const handleDelete = () => onDelete(todo.id);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <span className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
        {todo.description}
      </span>
      <div>
        <Button size="sm" color="success" onClick={handleToggleCompleted}>
          {todo.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
        </Button>
        <Button size="sm" color="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
