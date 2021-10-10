const TableCell = ({ type = 'td', align = 'left', className, value } = {}) => {
  const cell = document.createElement(type);
  const styles = [align === 'center' ? 'text-center' : '', className]
    .filter((i) => i)
    .join(' ');
  if (styles) {
    cell.className = styles;
  }

  cell.textContent = value;

  return cell;
};

export default TableCell;
