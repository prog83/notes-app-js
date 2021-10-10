import { format } from 'date-fns';

import { Table, TableHead, TableBody, TableRow, TableCell } from './Table';
import IconButton from './IconButton';
import Icon from './Icon';

import store from '../store';
import { archiveNote, deleteNote } from '../store/actions';

import { getCategoryAvatar } from '../helpers/';

const app = document.querySelector('#app');

const headCells = [
  { text: 'Name', align: 'left' },
  { text: 'Created', align: 'left' },
  { text: 'Category' },
  { text: 'Content' },
  { text: 'Dates' },
];

const createTableHead = () => {
  const tableHead = TableHead();
  const row = TableRow();

  const categoryAvatarCell = TableCell({ className: 'w60' });
  row.appendChild(categoryAvatarCell);

  headCells.forEach(({ text, align }) => {
    const cell = TableCell({ type: 'th', align, value: text });
    row.appendChild(cell);
  });

  // Actions head
  const iconsCell = TableCell({ align: 'center', className: 'icons-cell' });
  iconsCell.appendChild(IconButton({ children: Icon('archive') }));
  iconsCell.appendChild(IconButton({ children: Icon('delete') }));
  row.appendChild(iconsCell);

  tableHead.appendChild(row);

  return tableHead;
};

const createTableBody = (value) => {
  const tableBody = TableBody();
  value.forEach(({ id, name, created, category, content, dates }) => {
    const row = TableRow();
    const createdText = format(created, 'MMMM dd, yyyy');
    const datesText = dates.map((date) => format(date, 'M/d/yyyy')).join(', ');

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
    iconsCell.appendChild(IconButton({ type: 'edit', id, children: Icon('edit') }));
    iconsCell.appendChild(IconButton({ type: 'archive', id, children: Icon('archive') }));
    iconsCell.appendChild(IconButton({ type: 'delete', id, children: Icon('delete') }));
    row.appendChild(iconsCell);

    tableBody.appendChild(row);
  });

  return tableBody;
};

const handleEvent = ({ target }) => {
  const { type, id } = target.dataset;

  switch (type) {
    case 'edit':
      break;

    case 'archive':
      store.dispatch(archiveNote(id));
      break;

    case 'delete':
      store.dispatch(deleteNote(id));
      break;

    default:
      break;
  }
};

const ListNotes = (store) => {
  const { notes = [] } = store;
  const activeNotes = notes.filter(({ archived }) => !archived);

  // Cumulative Layout Shift
  const btn = document.querySelector('#btnCreateNote');
  const btnCreateNote = btn.cloneNode(true);
  btn.remove();

  let table = document.querySelector('#listNotes');
  if (!table) {
    // Create
    const tableHead = createTableHead();
    table = Table({
      className: 'table-striped table-hover',
      children: tableHead,
    });
    table.setAttribute('id', 'listNotes');
  }

  // Always clear tbody (only tbody for performance)
  const tbody = document.querySelector('#listNotes > tbody');
  tbody?.removeEventListener('click', handleEvent);
  tbody?.remove();

  const tableBody = createTableBody(activeNotes);
  tableBody.addEventListener('click', handleEvent);
  table.appendChild(tableBody);

  app.appendChild(table);
  app.appendChild(btnCreateNote);
};

export default ListNotes;
