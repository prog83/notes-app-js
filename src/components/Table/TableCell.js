const TableCell = ({ type = 'td', align = 'left', className, value } = {}) => {
  const element = document.createElement(type);
  const classes = [align === 'center' ? 'text-center' : '', className].filter((i) => i).join(' ');
  if (classes) {
    element.className = classes;
  }

  element.textContent = value;

  return element;
};

export default TableCell;
