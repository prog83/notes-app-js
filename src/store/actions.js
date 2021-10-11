import constants from './constants';

export function initNotes(value) {
  return {
    type: constants.NOTES_INIT,
    payload: value,
  };
}

export function setModeActived(value) {
  return {
    type: constants.MODE_ARCHIVED,
    payload: value,
  };
}

export function createNote(value) {
  return {
    type: constants.NOTE_CREATE,
    payload: value,
  };
}

export function updateNote(value) {
  return {
    type: constants.NOTE_UPDATE,
    payload: value,
  };
}

export function deleteNote(value) {
  return {
    type: constants.NOTE_DELETE,
    payload: value,
  };
}

export function archiveNote(value) {
  return {
    type: constants.NOTE_ARCHIVE,
    payload: value,
  };
}

export function unarchiveNote(value) {
  return {
    type: constants.NOTE_UNARCHIVE,
    payload: value,
  };
}
