import { createStore } from "redux";
import reducer from "../reducer";

export const storeRedux = createStore(reducer);
