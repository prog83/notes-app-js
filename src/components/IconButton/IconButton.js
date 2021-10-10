import './iconButton.scss';

const IconButton = ({ type, id, className, children }) => {
  const element = document.createElement('button');
  element.setAttribute('type', 'button');
  if (type) {
    element.dataset.type = type;
  }
  if (id || id === 0) {
    element.dataset.id = id;
  }
  const styles = ['icon-button', type, className].filter((i) => i).join(' ');
  element.className = styles;

  if (children) {
    element.appendChild(children);
  }

  return element;
};

export default IconButton;
