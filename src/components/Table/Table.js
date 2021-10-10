const Table = ({ className, children }) => {
  const element = document.createElement('table');
  element.className = `table${className ? ` ${className}` : ''}`;
  if (children) {
    element.appendChild(children);
  }

  return element;
};

export default Table;
