import './avatar.scss';

const Avatar = ({ className, children }) => {
  const element = document.createElement('div');
  element.className = `avatar${className ? ` ${className}` : ''}`;
  if (children) {
    element.appendChild(children);
  }

  return element;
};

export default Avatar;
