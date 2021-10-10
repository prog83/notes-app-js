const TableBody = ({ children } = {}) => {
  const element = document.createElement('tbody');
  if (children) {
    element.appendChild(children);
  }

  return element;
};

export default TableBody;
