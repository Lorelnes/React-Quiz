import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted, searchTerm }) => {
  const filteredTodos = todos.filter((todo) =>
    todo.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ListGroup className="todo-list">
      {filteredTodos.map((todo) => (
        <ListGroupItem key={todo.id}>
          <TodoItem
            todo={todo}
            onDelete={onDeleteTodo}
            onToggleCompleted={onToggleCompleted}
          />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default TodoList;
