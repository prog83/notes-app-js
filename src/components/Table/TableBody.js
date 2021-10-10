const TableBody = ({ children } = {}) => {
  const tbody = document.createElement('tbody');
  children && tbody.appendChild(children);

  return tbody;
};

export default TableBody;
