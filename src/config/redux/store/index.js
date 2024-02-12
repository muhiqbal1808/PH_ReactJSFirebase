import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import reducer from "../reducer";

export const storeRedux = createStore(reducer, applyMiddleware(thunk));
