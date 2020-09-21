/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Table, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import ReactModal from 'react-modal';
import { deleteTask, editTaskStart, sortTasks } from '../../redux/actionCreators';
import EditForm from '../editForm';

function Tasks() {
  const dispatch = useDispatch();
  const allTasks = useSelector((state) => state.allTasks);
  const tasksFound = useSelector((state) => state.tasksFound);
  const isOpen = useSelector((state) => state.changeStatus);

  function handleOpenModal(event) {
    const { id } = event.target.parentElement;
    dispatch(editTaskStart(id));
  }

  function deleteCurrentTask(event) {
    const { id } = event.target.parentElement;
    dispatch(deleteTask(id));
  }
  function handleSort(param) {
    dispatch(sortTasks(param));
  }
  return (
    <>
      <Table hover bordered>
        <thead>
          <tr>
            <th className="btnColumn" />
            <th className="idColumn" id="id" onClick={(event) => handleSort(event.target.id)}>id</th>
            <th className="dateColumn" id="date" onClick={(event) => handleSort(event.target.id)}>Дата</th>
            <th className="nameColumn" id="name" onClick={(event) => handleSort(event.target.id)}>Название</th>
            <th className="descColumn" id="description" onClick={(event) => handleSort(event.target.id)}>Описание</th>
          </tr>
        </thead>
        <tbody>
          {((tasksFound.length > 0) && (tasksFound !== undefined)) ? tasksFound.map((task) => (
            <tr key={Math.random()}>
              <td id={task.id}>
                <Button className="edit" onClick={(event) => handleOpenModal(event)}>Edit</Button>
                <Button className="del" onClick={(event) => deleteCurrentTask(event)}>Delete</Button>
              </td>
              <td>{task.id}</td>
              <td>{task.date}</td>
              <td>{task.name}</td>
              <td>{task.description}</td>
            </tr>
          ))
            : allTasks.map((task) => (
              <tr key={Math.random()}>
                <td id={task.id}>
                  <Button className="edit" onClick={(event) => handleOpenModal(event)}>Edit</Button>
                  <Button className="del" onClick={(event) => deleteCurrentTask(event)}>Delete</Button>
                </td>
                <td>{task.id}</td>
                <td>{task.date}</td>
                <td>{task.name}</td>
                <td>{task.description}</td>
              </tr>
            ))}
          {/* {allTasks !== undefined && allTasks.map((task) => (
            <tr key={Math.random()}>
              <td id={task.id}>
                <Button className="edit" onClick={(event) => handleOpenModal(event)}>Edit</Button>
                <Button className="del" onClick={(event) => deleteCurrentTask(event)}>Delete</Button>
              </td>
              <td>{task.date}</td>
              <td>{task.name}</td>
              <td>{task.description}</td>
            </tr>
          ))} */}

        </tbody>
      </Table>
      <ReactModal
        isOpen={isOpen}
        // contentLabel="Inline Styles Modal Example"
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
          },
        }}
      >
        <EditForm />
      </ReactModal>
    </>
  );
}

export default Tasks;
