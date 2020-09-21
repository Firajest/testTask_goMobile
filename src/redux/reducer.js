import {
  ADD_TASK, DELETE_TASK, EDIT_TASK_START, EDIT_TASK_END, SEARCH, SORT,
} from './actionTypes';

const initialState = {
  allTasks: [],
  tasksFound: [],
  changeStatus: false,
  currentTask: {
    name: '',
    description: '',
  },
  sortFlags: {
    date: false,
    name: false,
    description: false,
    id: false,
  },
};

const dateOptions = {
  year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
};
export default function AllTasks(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TASK: {
      const newTask = {
        id: Math.random().toString(),
        date: (new Date()).toLocaleTimeString('ru', dateOptions),
        name: payload.name,
        description: payload.description,
      };
      let newAllTasks;
      if (state.allTasks !== undefined) {
        newAllTasks = [...state.allTasks, newTask];
      } else {
        newAllTasks = [newTask];
      }

      return {
        ...state,
        allTasks: newAllTasks,
      };
    }
    case DELETE_TASK: {
      const filteredTasks = state.allTasks.filter((task) => task.id !== payload.id);
      return {
        ...state,
        allTasks: filteredTasks,
      };
    }
    case EDIT_TASK_START: {
      const currentTask = state.allTasks.find((task) => task.id === payload.id);
      return {
        ...state,
        changeStatus: true,
        currentTask,
      };
    }
    case EDIT_TASK_END: {
      const editedTask = state.allTasks.find((task) => task.id === payload.id);
      editedTask.name = payload.name;
      editedTask.description = payload.description;
      return {
        ...state,
        changeStatus: false,
        currentTask: {
          name: '',
          description: '',
        },
      };
    }
    case SEARCH: {
      let validatedTasksFound;
      if (payload.value === 'Nothing found') {
        validatedTasksFound = [];
      } else if ((payload.value.length > 0) && (state.tasksFound !== undefined)) {
        validatedTasksFound = payload.value;
      }
      return {
        ...state,
        tasksFound: validatedTasksFound,
      };
    }
    case SORT: {
      let sortedTasks;
      state.sortFlags[payload.flag] = !state.sortFlags[payload.flag];
      if (state.sortFlags[payload.flag] === false) {
        sortedTasks = state.allTasks.slice().sort((prev, next) => prev[payload.flag].localeCompare(next[payload.flag]));
      } else {
        sortedTasks = state.allTasks.slice().sort((prev, next) => next[payload.flag].localeCompare(prev[payload.flag]));
      }
      return {
        ...state,
        allTasks: sortedTasks,
      };
    }

    default:
      return state;
  }
}
