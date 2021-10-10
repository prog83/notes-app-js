const TableCell = ({ type = 'td', align = 'left', className, value } = {}) => {
  const element = document.createElement(type);
  const styles = [align === 'center' ? 'text-center' : '', className].filter((i) => i).join(' ');
  if (styles) {
    element.className = styles;
  }

  element.textContent = value;

  return element;
};

export default TableCell;
