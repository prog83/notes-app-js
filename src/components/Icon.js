const Icon = (name) => {
  const icon = document.createElement('span');
  icon.className = 'material-icons';
  icon.textContent = name;

  return icon;
};

export default Icon;
