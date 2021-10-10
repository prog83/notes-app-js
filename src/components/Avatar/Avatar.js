import './avatar.scss';

const Avatar = ({ className, children }) => {
  const avatar = document.createElement('div');
  avatar.className = `avatar${className ? ` ${className}` : ''}`;
  children && avatar.appendChild(children);

  return table;
};

export default Avatar;
