const Table = ({ className, children }) => {
  const table = document.createElement('table');
  table.className = `table${className ? ` ${className}` : ''}`;
  children && table.appendChild(children);

  return table;
};

export default Table;
