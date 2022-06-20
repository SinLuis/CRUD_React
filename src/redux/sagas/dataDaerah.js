import { getDataDaerahAPI, getDataKotaAPI, getDataKecamatanAPI, getDataKelurahanAPI } from '../../apis/index'
import {  getDataDaerahSlice } from '../slice/dataDaerah'
import { getDataKotaSlice } from '../slice/dataKota'
import { getDataKecamatanSlice } from '../slice/dataKecamatan'
import { getDataKelurahanSlice } from '../slice/dataKelurahan'
import { GET_DATA_DAERAH, GET_DATA_KOTA, GET_DATA_KECAMATAN, GET_DATA_KELURAHAN} from '../types'
import { put, takeEvery } from 'redux-saga/effects'
export function* getDataDaerahSaga() {
    const dataDaerah = yield getDataDaerahAPI();
    yield put(getDataDaerahSlice(dataDaerah.data))
}

export function* getDataKotaSaga(action) {
    const dataKota = yield getDataKotaAPI(action.value)
    yield put(getDataKotaSlice(dataKota.data))
}

export function* getDataKecamatanSaga(action) {
    const dataKecamatan = yield getDataKecamatanAPI(action.id)
    yield put(getDataKecamatanSlice(dataKecamatan.data))
}

export function* getDataKelurahanSaga(action) {
    const dataKelurahan = yield getDataKelurahanAPI(action.id)
    yield put(getDataKelurahanSlice(dataKelurahan.data))
}

export function* watchDaerahAsync() {
    yield takeEvery(GET_DATA_DAERAH, getDataDaerahSaga)
    yield takeEvery(GET_DATA_KOTA, getDataKotaSaga)
    yield takeEvery(GET_DATA_KECAMATAN, getDataKecamatanSaga)
    yield takeEvery(GET_DATA_KELURAHAN, getDataKelurahanSaga)
}