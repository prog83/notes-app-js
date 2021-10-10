import constants from './constants';

export function initActiveNotes(value) {
  return {
    type: constants.NOTES_ACTIVE_INIT,
    payload: value,
  };
}

export function initArchiveNotes(value) {
  return {
    type: constants.NOTES_ARCHIVED_INIT,
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
