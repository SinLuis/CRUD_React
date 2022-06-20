import { configureStore } from "@reduxjs/toolkit";
import user from "./redux/slice/user";
import users from "./redux/slice/users";
import dataDaerah from "./redux/slice/dataDaerah";
import dataKota from './redux/slice/dataKota';
import dataKecamatan from './redux/slice/dataKecamatan';
import dataKelurahan from './redux/slice/dataKelurahan';
import createSagaMiddleware from "@redux-saga/core";
import {rootSaga} from './redux/sagas'
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        user,
        users,
        dataDaerah,
        dataKota,
        dataKecamatan,
        dataKelurahan
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})
sagaMiddleware.run(rootSaga)

export default store