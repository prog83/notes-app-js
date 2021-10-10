import 'bootstrap';
import './styles/global.scss';

import ListNotes from './components/ListNotes';
import SummaryNotes from './components/SummaryNotes';

import store from './store';
import { initNotes } from './store/actions';
import initData from './helpers/initData';
import schema from './helpers/schema';

// Type cast
const notes = schema.cast(initData);

store.subscribe(ListNotes);
store.subscribe(SummaryNotes);

store.dispatch(initNotes(notes));
