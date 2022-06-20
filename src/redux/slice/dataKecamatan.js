import { createSlice } from "@reduxjs/toolkit";

const dataKecamatan = createSlice({
    name: 'dataKecamatan',
    initialState: [{
        kecamatan:[{
            id: 0,
            id_koita: 0,
            nama: ''
        }]
    }],
    reducers: {
        getDataKecamatanSlice: (state, action) => {
            state = action.payload
            return state
        }
    }
})
export const { getDataKecamatanSlice } = dataKecamatan.actions
export default dataKecamatan.reducer