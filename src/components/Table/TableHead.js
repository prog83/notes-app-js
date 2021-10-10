const TableHead = ({ className, children } = {}) => {
  const element = document.createElement('thead');
  if (className) {
    element.className = className;
  }
  if (children) {
    element.appendChild(children);
  }

  return element;
};

export default TableHead;
