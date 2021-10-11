import Avatar from '../components/Avatar';
import Icon from '../components/Icon';

export const getNoteById = (notes, id) => {
  const [rslt] = notes.filter((note) => note.id === id);
  return rslt;
};

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
    (rslt[item[key]] = rslt[item[key]] ?? []).push(item);
    return rslt;
  }, {});

export const searchDatesFromText = (text) => {
  const rslt = [];
  const re = /(?:\d{1,2}\/\d{1,2}\/\d{4})|(?:\d{1,2}\-\d{1,2}\-\d{4})|(?:\d{1,2}\.\d{1,2}\.\d{4})/g;

  let date = null;
  while ((date = re.exec(text)) !== null) {
    rslt.push(date[0]);
    text.lastIndex;
  }

  return rslt.map((dt) => (Date.parse(dt) ? new Date(dt) : null)).filter((i) => i);
};
