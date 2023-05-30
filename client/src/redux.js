import rootReducer from "./store/reducers/rootReducer";
import { persistStore } from "redux-persist";
import { createStore } from "redux";

const reduxStore = () => {
  const store = createStore(rootReducer); // tao store
  const persistor = persistStore(store); // tao persistor
  return { store, persistor };
};

export default reduxStore;
