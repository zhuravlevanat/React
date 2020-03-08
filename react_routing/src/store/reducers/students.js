import {ACTION_STUDENT_DELETE, ACTION_STUDENT_SAVE} from "../actions/students";

const initialState = {
  list: [
    {
      id: 1,
      studentName: 'John Doe',
      groupId: 1,
    },
    {
      id: 2,
      studentName: 'Sam Smith',
      groupId: 1,
    },
    {
      id: 3,
      studentName: 'Lisa Andrews',
      groupId: 3
    },
    {
      id: 4,
      studentName: 'Chris Green',
      groupId: 2
    },

  ],
};

function updateStudent(list, group) {
  return list.map(item => (item.id === group.id ? group : item));
}

function addStudent(list, group) {
  group.id = Date.now();

  return [...list, group];
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_STUDENT_SAVE:
      return {
        ...state,
        list: payload.id
            ? updateStudent(state.list, payload)
            : addStudent(state.list, payload)
      };
    case ACTION_STUDENT_DELETE:
      return {
        ...state,
        list: state.list.filter(item => item.id != payload),
      };

    default:
      return state;
  }
}