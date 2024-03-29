import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import PromiseMW from "redux-promise";

const createStoreWithMW = applyMiddleware(PromiseMW)(createStore);
const store = createStoreWithMW(rootReducer);

export type IRootState = ReturnType<typeof rootReducer>;
export default store;
