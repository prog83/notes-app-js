const Icon = (name) => {
  const element = document.createElement('span');
  element.className = 'material-icons';
  element.textContent = name;

  return element;
};

export default Icon;
