/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Input, Label } from 'reactstrap';
import { editTaskEnd } from '../../redux/actionCreators';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditForm() {
  const dispatch = useDispatch();
  const currentTask = useSelector((state) => state.currentTask);
  const [inputs, setInputs] = useState({
    taskName: currentTask.name,
    description: currentTask.description,
  });
  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }
  const { taskName, description } = inputs;

  function handleCloseModal(event) {
    dispatch(editTaskEnd(currentTask.id, event.target.taskName.value, event.target.description.value));
  }
  return (
    <Form onSubmit={(event) => handleCloseModal(event)}>
      <Label for="taskName">   Название</Label>
      <Input type="text" id="taskName" name="taskName" placeholder="Название" value={taskName} onChange={handleChange} required />
      <br />
      <Label for="description">   Описание</Label>
      <Input type="text" id="description" name="description" placeholder="Описание" value={description} onChange={handleChange} required />
      <br />
      <Button type="submit">Сохранить изменения</Button>
    </Form>
  );
}

export default EditForm;
