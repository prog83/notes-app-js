import Avatar from '../components/Avatar';
import Icon from '../components/Icon';

export const getCategoryAvatar = (value) => {
  switch (value) {
    case 'Task':
      return Avatar({ children: Icon('shopping_cart'), className: 'mx-auto' });

    case 'Random Thought':
      return Avatar({ children: Icon('psychology'), className: 'mx-auto' });

    case 'Idea':
      return Avatar({ children: Icon('lightbulb'), className: 'mx-auto' });

    case 'Quote':
      return Avatar({ children: Icon('format_quote'), className: 'mx-auto' });

    default:
      return null;
  }
};

export const groupBy = (array, key) =>
  array.reduce((acc, item) => {
    const rslt = { ...acc };
    (rslt[item[key]] = rslt[item[key]] || []).push(item);
    return rslt;
  }, {});
