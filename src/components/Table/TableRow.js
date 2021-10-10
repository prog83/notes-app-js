const TableRow = ({ children } = {}) => {
  const tr = document.createElement('tr');
  children && tr.appendChild(children);

  return tr;
};

export default TableRow;
