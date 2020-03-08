import {
  ACTION_GROUP_DELETE,
  ACTION_GROUP_SAVE,
} from '../actions/groups';

const initialState = {
  list: [
    {
      id: 1,
      name: 'Front End'
    },
    {
      id: 2,
      name: 'Java Core'
    },
    {
      id: 3,
      name: 'Python'
    }
  ],
};

function updateGroup(list, group) {
  return list.map(item => (item.id === group.id ? group : item));
}

function addGroup(list, group) {
  group.id = Date.now();

  return [...list, group];
}

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_GROUP_SAVE:
      return {
        ...state,
        list: payload.id
            ? updateGroup(state.list, payload)
            : addGroup(state.list, payload)
      };
    case ACTION_GROUP_DELETE:
      return {
        ...state,
        list: state.list.filter(item => item.id != payload),
      };

    default:
      return state;
  }
}