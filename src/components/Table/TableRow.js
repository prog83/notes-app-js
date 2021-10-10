const TableRow = ({ children } = {}) => {
  const element = document.createElement('tr');
  if (children) {
    element.appendChild(children);
  }

  return element;
};

export default TableRow;
