import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createMiddleware from 'redux-saga';
import stringReducer from './Reducer';
import rootSaga from './Sagas';
import secondReducer from './SecondReducer';
import reduxLogger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

const combiner = combineReducers({
    firstReducer: stringReducer,
    secondReducer: secondReducer,
    form: formReducer
});

const sagaMiddleware = createMiddleware();

//const middlewares = [sagaMiddleware, reduxLogger]
const middlewares = [sagaMiddleware]

const store = createStore(combiner, compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
sagaMiddleware.run(rootSaga);

export default store;