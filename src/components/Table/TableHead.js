const TableHead = ({ className, children } = {}) => {
  const thead = document.createElement('thead');
  if (className) {
    thead.className = className;
  }
  children && thead.appendChild(children);

  return thead;
};

export default TableHead;
