import { format } from 'date-fns';

import { Table, TableHead, TableBody, TableRow, TableCell } from './Table';
import IconButton from './IconButton';
import Icon from './Icon';

import store from '../store';
import { archiveNote, unarchiveNote, deleteNote, setModeActived } from '../store/actions';

import { getCategoryAvatar } from '../helpers/';

import { modalDialogInstance, fillDataForm } from './NoteDialog';

const app = document.querySelector('#app');

const TypeEvent = {
  edit: 'edit',
  archive: 'archive',
  unarchive: 'unarchive',
  delete: 'delete',
  'toggle-archive': 'toggle-archive',
  'toggle-active': 'toggle-active',
  'toggle-delete': 'toggle-delete',
};

const headCells = [
  { text: 'Name', align: 'left' },
  { text: 'Created', align: 'left' },
  { text: 'Category' },
  { text: 'Content' },
  { text: 'Dates' },
];

const getIconButtonModeArchived = (modeArchived) => {
  const type = modeArchived ? TypeEvent['toggle-active'] : TypeEvent['toggle-archive'];
  const icon = modeArchived ? 'unarchive' : 'archive';

  return IconButton({ type, children: Icon(icon) });
};

const getIconButtonArchive = (modeArchived, id) => {
  const type = modeArchived ? TypeEvent.unarchive : TypeEvent.archive;
  const icon = modeArchived ? 'unarchive' : 'archive';

  return IconButton({ type, id, children: Icon(icon) });
};

const createTableHead = (modeArchived) => {
  const tableHead = TableHead();
  const row = TableRow();

  const categoryAvatarCell = TableCell();
  row.appendChild(categoryAvatarCell);

  headCells.forEach(({ text, align }) => {
    const cell = TableCell({ type: 'th', align, value: text });
    row.appendChild(cell);
  });

  // Actions head
  const iconsCell = TableCell({ align: 'center' });
  iconsCell.appendChild(getIconButtonModeArchived(modeArchived));
  iconsCell.appendChild(IconButton({ type: TypeEvent['toggle-delete'], children: Icon('delete') }));
  row.appendChild(iconsCell);

  tableHead.appendChild(row);

  return tableHead;
};

const createTableBody = (modeArchived, value) => {
  const tableBody = TableBody();
  value.forEach(({ id, name, created, category, content, dates }) => {
    const row = TableRow();
    const createdText = format(created, 'MMMM dd, yyyy');
    const datesText = dates?.map((date) => format(date, 'M/d/yyyy')).join(', ');

    // Category avatar
    const avatar = getCategoryAvatar(category);
    const categoryAvatarCell = TableCell();
    categoryAvatarCell.appendChild(avatar);
    row.appendChild(categoryAvatarCell);

    Object.values({
      name,
      created: createdText,
      category,
      content,
      dates: datesText,
    }).forEach((text) => {
      const cell = TableCell({ value: text });
      row.appendChild(cell);
    });

    // Actions row
    const iconsCell = TableCell();
    iconsCell.appendChild(IconButton({ type: TypeEvent.edit, id, children: Icon('edit') }));
    iconsCell.appendChild(getIconButtonArchive(modeArchived, id));
    iconsCell.appendChild(IconButton({ type: TypeEvent.delete, id, children: Icon('delete') }));
    row.appendChild(iconsCell);

    tableBody.appendChild(row);
  });

  return tableBody;
};

const handleEvent = ({ target }) => {
  const { type, id } = target.dataset;

  switch (type) {
    case TypeEvent.edit:
      modalDialogInstance.show(target);
      break;

    case TypeEvent.archive:
      store.dispatch(archiveNote(id));
      break;

    case TypeEvent.unarchive:
      store.dispatch(unarchiveNote(id));
      break;

    case TypeEvent.delete:
      store.dispatch(deleteNote(id));
      break;

    case TypeEvent['toggle-archive']:
      store.dispatch(setModeActived(true));
      break;

    case TypeEvent['toggle-active']:
      store.dispatch(setModeActived(false));
      break;

    case TypeEvent['toggle-delete']:
      console.log('Opps!');
      break;

    default:
      break;
  }
};

const ListNotes = (store) => {
  const { notes = [], modeArchived = false } = store;
  const filteredNotes = notes.filter(({ archived = false }) => archived === modeArchived);

  let table = document.querySelector('#listNotes');
  table?.remove();

  // Create
  const tableHead = createTableHead(modeArchived);
  table = Table({
    className: 'table-striped table-hover',
    children: tableHead,
  });
  table.setAttribute('id', 'listNotes');

  const tableBody = createTableBody(modeArchived, filteredNotes);
  table.appendChild(tableBody);

  app.appendChild(table);
  app.appendChild(btnCreateNote);

  // EventListener
  table.addEventListener('click', handleEvent);
};

export default ListNotes;
