import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Input, Button } from 'reactstrap';

const AddTodoModal = ({ isOpen, onClose, onAddTodo }) => {
  const [description, setDescription] = useState('');

  const handleInputChange = (e) => setDescription(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description) {
      onAddTodo({ id: generateId(), description, isCompleted: false });
      setDescription('');
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={onClose}>
      <ModalHeader toggle={onClose}>Add Todo</ModalHeader>
      <ModalBody>
        <Input
          type="text"
          placeholder="Enter todo description"
          value={description}
          onChange={handleInputChange}
        />
        <Button color="primary" block onClick={handleSubmit}>
          Add Todo
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default AddTodoModal;
