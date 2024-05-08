import { applyMiddleware, compose, createStore } from "redux"
import rootReducer from "../reducer/RootReducer"
import { thunk } from "redux-thunk";

const middleware = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  const storeRedux = createStore(rootReducer, middleware);
  
  export default storeRedux;
  