import constants from './constants';

export const initNotes = (value) => ({
  type: constants.NOTES_INIT,
  payload: value,
});

export const setModeActived = (value) => ({
  type: constants.MODE_ARCHIVED,
  payload: value,
});

export const createNote = (value) => ({
  type: constants.NOTE_CREATE,
  payload: value,
});

export const updateNote = (value) => ({
  type: constants.NOTE_UPDATE,
  payload: value,
});

export const deleteNote = (value) => ({
  type: constants.NOTE_DELETE,
  payload: value,
});

export const archiveNote = (value) => ({
  type: constants.NOTE_ARCHIVE,
  payload: value,
});

export const unarchiveNote = (value) => ({
  type: constants.NOTE_UNARCHIVE,
  payload: value,
});
