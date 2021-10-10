import { object, array, string, number, date } from 'yup';

const note = object().shape({
  id: number().required(),
  name: string().required(),
  created: date().required(),
  category: string().required(),
  content: string(),
  dates: array().ensure().of(date()),
});

const notes = array().ensure().of(note);

export default notes;
