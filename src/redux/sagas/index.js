import { all } from "redux-saga/effects";
import { watchDaerahAsync } from "./dataDaerah";
import { watchUsersAsync } from "./user";

export function* rootSaga() {
    yield all([
        watchUsersAsync(),
        watchDaerahAsync()
    ])
}