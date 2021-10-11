import constants from './constants';

const getNoteById = (notes, id) => {
  const [rslt] = notes.filter((note) => note.id === Number.parseInt(id, 10));
  return rslt;
};

const insert = (notes, value) => {
  const newNotes = [...notes];
  newNotes.push(value);
  return newNotes;
};

const update = (notes, value) =>
  notes.map((note) => {
    if (note.id !== Number.parseInt(value.id, 10)) {
      return note;
    }

    return {
      ...note,
      ...value,
    };
  });

const remove = (notes, value) => notes.filter(({ id }) => id !== Number.parseInt(value, 10));

const reducer = (state = {}, action) => {
  switch (action.type) {
    case constants.NOTES_INIT:
      return { ...state, notes: action.payload };

    case constants.MODE_ARCHIVED:
      console.log(action.payload);
      return { ...state, modeArchived: action.payload };

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
        notes: remove(state.notes, action.payload),
      };

    case constants.NOTE_ARCHIVE: {
      console.log(action.payload);
      const note = getNoteById(state.notes, action.payload);

      return {
        ...state,
        notes: update(state.notes, { ...note, archived: true }),
      };
    }

    case constants.NOTE_UNARCHIVE: {
      const note = getNoteById(state.notes, action.payload);

      return {
        ...state,
        notes: update(state.notes, { ...note, archived: false }),
      };
    }

    default:
      return state;
  }
};

export default reducer;
