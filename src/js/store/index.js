import { createStore } from "redux";
import reducer from '../reducers/moviereducers'
const store = createStore(reducer);
export default store