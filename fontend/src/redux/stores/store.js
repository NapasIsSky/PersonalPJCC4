import { createStore } from "redux";
import reducer from "../reducers/ีuserReducer";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("store");
    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (error) {
    return undefined;
  }
};

const saveState = state => {
  console.log('pass save state')
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("store", serializedState);
  } catch (error) {
    console.log(error.message);
  }
};

const persisStore = loadState();

const store = createStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log('store state',store.getState() )
  saveState(store.getState());
});

export default store;
