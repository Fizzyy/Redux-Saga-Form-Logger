import { all, put, takeLatest, call, delay, cancelled, select, take, fork, spawn } from 'redux-saga/effects';
import axios from 'axios';

function* addString(object) {
    yield put({ type: 'ADD_STRING', strings: object });
}

function* watchAddString() {
    yield takeLatest('ADD_STRING_ASYNC', addString);
}

function* fetchData() {
    try {
        yield delay(3000);
        let todos = yield axios.get('https://jsonplaceholder.typicode.com/albums');
        yield put({ type: 'ADD_STRING', strings: todos.data });
    } catch {
        yield cancelled()
    }
}

function* watchFetchData() {
    yield call(fetchData);
}

function* getString() {
    let message = yield select(state => state.secondReducer.message);
    yield delay(2000);
    yield put({ type: 'RETURN_MESSAGE', message: message + ' I like sagas!' });
}

function* getTakeString() {
    console.info(yield select(state => state.secondReducer.takeMessage));
    console.error(yield take('RETURN_TAKEMESSAGE'));
}

function* watchGetString() {
    yield spawn(getString);
    yield fork(getTakeString);
    const action = yield take('*');
    const state = yield select();
    console.info(action.type, state);
}

export default function* rootSaga() {
    yield all([
        watchAddString(),
        watchFetchData(),
        watchGetString()
    ]);
}