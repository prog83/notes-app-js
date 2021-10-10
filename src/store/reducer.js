import constants from './constants';

const insert = (array, value) => {
  const newArray = [...array];
  newArray.push(value);
  return newArray;
};

const update = (array, value) =>
  array.map((item) => {
    if (item.id !== value.id) {
      return item;
    }

    return {
      ...item,
      ...value,
    };
  });

const del = (array, value) => array.filter(({ id }) => id !== value);

const reducer = (state = {}, action) => {
  switch (action.type) {
    case constants.NOTES_ACTIVE_INIT:
      return { ...state, activeNotes: action.payload };

    case constants.NOTES_ARCHIVED_INIT:
      return { ...state, archivedNotes: action.payload };

    case constants.NOTE_CREATE:
      return {
        ...state,
        activeNotes: insert(state.activeNotes, action.payload),
      };

    case constants.NOTE_UPDATE:
      return {
        ...state,
        activeNotes: update(state.activeNotes, action.payload),
      };

    case constants.NOTE_DELETE:
      return {
        ...state,
        activeNotes: del(state.activeNotes, action.payload),
      };

    case constants.NOTE_ARCHIVE:
      return {
        ...state,
        activeNotes: del(state.activeNotes, action.payload),
        archivedNotes: insert(state.archivedNotes, action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
