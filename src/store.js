import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

/** Create redux store */
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

/** run saga watchers */
sagaMiddleware.run(rootSaga);

export default store;