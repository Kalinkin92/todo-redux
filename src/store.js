import { createStore } from 'redux';
import reducer from './reducer';
import { loadState, saveState } from './localstorage'


const persistedState = loadState();
const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveState({
        todoData: store.getState().todoData
    });
});

export default store;