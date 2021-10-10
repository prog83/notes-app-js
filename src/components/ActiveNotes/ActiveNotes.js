import { Table, TableHead, TableBody, TableRow, TableCell } from '../Table';
import Icon from '../Icon';
import './activeNotes.scss';

const app = document.querySelector('#app');

const headCells = [
  { text: 'Name', align: 'center' },
  { text: 'Created', align: 'center' },
  { text: 'Category' },
  { text: 'Content' },
  { text: 'Dates' },
];

const ActiveNotes = (store) => {
  const { activeNotes = [] } = store;

  // Clear & Create
  const notes = document.querySelector('#activeNotes');
  notes?.remove();
  const container = document.createElement('div');
  container.setAttribute('id', 'activeNotes');
  container.className = 'container-lg';

  // Table head
  const tableHead = TableHead();
  const row = TableRow();
  headCells.forEach(({ text, align }) => {
    const cell = TableCell({ type: 'th', align, value: text });
    row.appendChild(cell);
  });
  const iconsCell = TableCell({ className: 'icons-cell' });
  iconsCell.appendChild(Icon('archive'));
  iconsCell.appendChild(Icon('delete'));
  row.appendChild(iconsCell);
  tableHead.appendChild(row);

  const table = Table({
    className: 'table-striped table-hover',
    children: tableHead,
  });

  // Table body
  const tableBody = TableBody();
  activeNotes.forEach((element) => {
    const row = TableRow();
    Object.values(element).forEach((value) => {
      const cell = TableCell({ value });
      row.appendChild(cell);
    });
    const iconsCell = TableCell();
    iconsCell.appendChild(Icon('edit'));
    iconsCell.appendChild(Icon('archive'));
    iconsCell.appendChild(Icon('delete'));
    row.appendChild(iconsCell);
    tableBody.appendChild(row);
  });
  table.appendChild(tableBody);

  container.appendChild(table);
  app.appendChild(container);
};

export default ActiveNotes;
