import 'bootstrap';
import './styles/global.scss';

import ActiveNotes from './components/ActiveNotes';
import store from './store';
import { initActiveNotes, initArchiveNotes } from './store/actions';
import { active, archived } from './initData';

store.subscribe(ActiveNotes);

store.dispatch(initActiveNotes(active));
store.dispatch(initArchiveNotes(archived));
