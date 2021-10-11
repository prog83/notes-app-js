import 'bootstrap';
import './styles/global.scss';

import ListNotes from './components/ListNotes';
import SummaryNotes from './components/SummaryNotes';
import NoteDialog from './components/NoteDialog';

import store from './store';
import { initNotes } from './store/actions';

import schema from './helpers/schema';
import db from './db.json';

store.subscribe(ListNotes);
store.subscribe(SummaryNotes);

// Type cast
const notes = schema.cast(db);
store.dispatch(initNotes(notes));

NoteDialog();
