import { Modal } from 'bootstrap';
import { v4 as uuidv4 } from 'uuid';

import store from '../store';
import { createNote, updateNote } from '../store/actions';
import { getNoteById, searchDatesFromText } from '../helpers';

const modal = document.querySelector('#createNoteModal');
export const modalDialogInstance = new Modal(modal);
const form = document.querySelector('#createNoteModal form');

const fields = form.querySelectorAll('input[type=text], select, textarea');

const getDataForm = () => Array.from(fields).reduce((acc, { name, value = '' }) => ({ ...acc, [name]: value }), {});

const fillDataForm = (id) => {
  const note = getNoteById(store.state.notes, id);
  if (note) {
    fields.forEach((field) => {
      // eslint-disable-next-line no-param-reassign
      field.value = note[field.name] ?? '';
    });
  }
};

const resetDataForm = () => {
  fields.forEach((field) => {
    // eslint-disable-next-line no-param-reassign
    field.value = '';
  });
};

const handleSubmit = (event) => {
  event.preventDefault();

  const data = getDataForm();
  const dates = searchDatesFromText(data.content);
  if (data.id) {
    store.dispatch(updateNote({ dates, ...data }));
  } else {
    store.dispatch(createNote({ ...data, id: uuidv4(), created: new Date(), dates }));
  }

  modalDialogInstance.hide();
};

const handleShow = ({ relatedTarget }) => {
  const id = relatedTarget.dataset.id;
  fillDataForm(id);
};

const handleHide = () => {
  resetDataForm();
};

modal.addEventListener('show.bs.modal', handleShow);
modal.addEventListener('hide.bs.modal', handleHide);

const NoteDialog = () => {
  form.addEventListener('submit', handleSubmit);
};

export default NoteDialog;
