import reducer from './reducer';

const initialState = {
  activeNotes: [],
  archivedNotes: [],
};

class Store {
  #reducer = null;
  #state = null;
  #callbacks = [];

  constructor(reducer, initialState = {}) {
    this.#reducer = reducer;
    this.#state = initialState;
  }

  get state() {
    return this.#state;
  }

  dispatch(action) {
    this.#state = this.#reducer(this.#state, action);
    this.#callbacks.forEach((cb) => cb(this.#state));
  }

  subscribe(callback) {
    this.#callbacks.push(callback);
    return () => {
      this.#callbacks = this.#callbacks.filter((cb) => cb !== callback);
    };
  }
}

const store = new Store(reducer, initialState);

export default store;
