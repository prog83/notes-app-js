import 'bootstrap';
import './styles/global.scss';

import ActiveNotes from './components/ActiveNotes';
import store from './store';
import { initActiveNotes, initArchiveNotes } from './store/actions';
import initData from './helpers/initData';
import schema from './helpers/schema';

// Type cast
const active = schema.cast(initData.active);
const archived = schema.cast(initData.archived);

store.subscribe(ActiveNotes);

store.dispatch(initActiveNotes(active));
store.dispatch(initArchiveNotes(archived));
