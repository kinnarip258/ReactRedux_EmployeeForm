import {createStore} from "redux";

import StoreReducers from "./reducers/index";

 const Store = createStore(StoreReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

 export default Store;