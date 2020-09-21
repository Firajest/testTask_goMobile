/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { addTask } from '../../redux/actionCreators';

function NewTaskForm() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    taskName: '',
    description: '',
  });
  const { taskName, description } = inputs;

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // eslint-disable-next-line max-len
    dispatch(addTask(event.target.taskName.value, event.target.description.value));
  }

  return (
    <>
      <Form inline onSubmit={handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="taskName" className="mr-sm-2">Name</Label>
          <Input type="text" name="taskName" id="taskName" placeholder="Название" value={taskName} onChange={handleChange} required />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="description" className="mr-sm-2">Desciption</Label>
          <Input type="text" name="description" id="description" placeholder="Описание" value={description} onChange={handleChange} required />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
}

export default NewTaskForm;
