import constants from './constants';

const insert = (array, value) => {
  const newArray = [...array];
  newArray.push(value);
  return newArray;
};

const update = (array, value) =>
  array.map((item) => {
    if (item.id !== Number.parseInt(value.id, 10)) {
      return item;
    }

    return {
      ...item,
      ...value,
    };
  });

const del = (array, value) => array.filter(({ id }) => id !== Number.parseInt(value, 10));

const reducer = (state = {}, action) => {
  switch (action.type) {
    case constants.NOTES_INIT:
      return { ...state, notes: action.payload };

    case constants.MODE_ARCHIVED:
      return { ...state, actived: action.payload };

    case constants.NOTE_CREATE:
      return {
        ...state,
        notes: insert(state.notes, action.payload),
      };

    case constants.NOTE_UPDATE:
      return {
        ...state,
        notes: update(state.notes, action.payload),
      };

    case constants.NOTE_DELETE:
      return {
        ...state,
        notes: del(state.notes, action.payload),
      };

    case constants.NOTE_ARCHIVE: {
      const [note] = state.notes.filter(({ id }) => id === Number.parseInt(action.payload, 10));

      return {
        ...state,
        notes: update(state.notes, { ...note, archived: true }),
      };
    }

    default:
      return state;
  }
};

export default reducer;
