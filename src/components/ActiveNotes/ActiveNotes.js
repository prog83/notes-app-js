import { format } from 'date-fns';

import { Table, TableHead, TableBody, TableRow, TableCell } from '../Table';
import Icon from '../Icon';
import Avatar from '../Avatar';
import './activeNotes.scss';

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

  const categoryAvatarCell = TableCell();
  row.appendChild(categoryAvatarCell);

  headCells.forEach(({ text, align }) => {
    const cell = TableCell({ type: 'th', align, value: text });
    row.appendChild(cell);
  });

  const iconsCell = TableCell({ align: 'center', className: 'icons-cell' });
  iconsCell.appendChild(Icon('archive'));
  iconsCell.appendChild(Icon('delete'));
  row.appendChild(iconsCell);
  tableHead.appendChild(row);

  return tableHead;
};

const createTableBody = (value) => {
  const tableBody = TableBody();
  value.forEach(({ name, created, category, content, dates }) => {
    const row = TableRow();
    const createdText = format(created, 'MMMM dd, yyyy');
    const datesText = dates.map((date) => format(date, 'M/d/yyyy')).join(', ');

    // Category avatar
    const categoryAvatarCell = TableCell();
    const avatar = Avatar({ children: Icon('shopping_cart') });
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
    const iconsCell = TableCell();
    iconsCell.appendChild(Icon('edit'));
    iconsCell.appendChild(Icon('archive'));
    iconsCell.appendChild(Icon('delete'));
    row.appendChild(iconsCell);
    tableBody.appendChild(row);
  });
};

const ActiveNotes = (store) => {
  const { activeNotes = [] } = store;

  // Clear
  const notes = document.querySelector('#activeNotes');
  notes.remove();
  const container = document.createElement('div');
  container.setAttribute('id', 'activeNotes');
  container.className = 'container-lg';

  // Create
  const tableHead = createTableHead();

  const table = Table({
    className: 'table-striped table-hover',
    children: tableHead,
  });

  const tableBody = createTableBody(activeNotes);
  table.appendChild(tableBody);

  container.appendChild(table);
  app.appendChild(container);
};

export default ActiveNotes;
