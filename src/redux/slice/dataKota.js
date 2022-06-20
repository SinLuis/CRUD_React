import { createSlice } from "@reduxjs/toolkit";

const dataKota = createSlice({
    name: 'dataKota',
    initialState: [{
        kota_kabupaten:{
            id: 0,
            id_provinsi: 0,
            nama: ''
        }
    }],
    reducers: {
        getDataKotaSlice: (state, action) => {    
            state = action.payload
            return state
        }
    }
})
export const { getDataKotaSlice } = dataKota.actions
export default dataKota.reducer