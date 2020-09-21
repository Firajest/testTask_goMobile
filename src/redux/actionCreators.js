import {
  ADD_TASK, DELETE_TASK, EDIT_TASK_START, EDIT_TASK_END, SEARCH, SORT
} from './actionTypes';

export const addTask = (taskName, description) => (({ type: ADD_TASK, payload: { name: taskName, description } }));
export const deleteTask = (id) => ({ type: DELETE_TASK, payload: { id } });
export const editTaskStart = (id) => ({ type: EDIT_TASK_START, payload: { id } });
export const editTaskEnd = (id, name, description) => ({ type: EDIT_TASK_END, payload: { id, name, description } });
export const searchTasks = (value) => ({ type: SEARCH, payload: { value } });
export const sortTasks = (param) => ({ type: SORT, payload: { flag: param } });
