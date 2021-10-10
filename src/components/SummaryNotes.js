import { Table, TableHead, TableBody, TableRow, TableCell } from './Table';

import { getCategoryAvatar, groupBy } from '../helpers/';

const app = document.querySelector('#app');

const headCells = [{ text: 'Note Category' }, { text: 'Active' }, { text: 'Archived' }];

const createTableHead = () => {
  const tableHead = TableHead();
  const row = TableRow();

  const categoryAvatarCell = TableCell({ className: 'w60' });
  row.appendChild(categoryAvatarCell);

  headCells.forEach(({ text, align }) => {
    const cell = TableCell({ type: 'th', align, value: text });
    row.appendChild(cell);
  });

  tableHead.appendChild(row);

  return tableHead;
};

const createTableBody = (value) => {
  const tableBody = TableBody();
  value.forEach(([category, array]) => {
    const row = TableRow();

    // Category avatar
    const avatar = getCategoryAvatar(category);
    const categoryAvatarCell = TableCell();
    categoryAvatarCell.appendChild(avatar);
    row.appendChild(categoryAvatarCell);

    row.appendChild(TableCell({ value: category }));

    const countActive = array.filter(({ archived }) => !archived).length;
    row.appendChild(TableCell({ value: countActive }));
    row.appendChild(TableCell({ value: array.length - countActive }));

    tableBody.appendChild(row);
  });

  return tableBody;
};

const SummaryNotes = (store) => {
  const { notes = [] } = store;
  const summary = groupBy(notes, 'category');
  const sortedSummary = Object.entries(summary).sort((a, b) => {
    const countA = a[1].length;
    const countB = b[1].length;
    return countB - countA;
  });

  let table = document.querySelector('#summaryNotes');
  if (!table) {
    // Create
    const tableHead = createTableHead();
    table = Table({
      className: 'table-striped table-hover mt-3',
      children: tableHead,
    });
    table.setAttribute('id', 'summaryNotes');
  }

  // Always clear tbody (only tbody for performance)
  const tbody = document.querySelector('#summaryNotes > tbody');
  tbody?.remove();

  const tableBody = createTableBody(sortedSummary);
  table.appendChild(tableBody);

  app.appendChild(table);
};

export default SummaryNotes;
