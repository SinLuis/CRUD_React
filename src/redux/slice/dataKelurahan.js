import { createSlice } from "@reduxjs/toolkit";

const dataKelurahan = createSlice({
    name: 'dataKelurahan',
    initialState: [{
        kelurahan:[{
            id: 0,
            id_kecamatan: 0,
            nama: ''
        }]
    }],
    reducers: {
        getDataKelurahanSlice: (state, action) => {
            state = action.payload
            return state
        }
    }
})
export const { getDataKelurahanSlice } = dataKelurahan.actions
export default dataKelurahan.reducer