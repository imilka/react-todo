import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import {loadState, saveState} from "./localStorage";

export default function configureStore() {
  const persistedState = loadState();
  const store =  createStore(
    rootReducer,
    persistedState
  );
  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
}
