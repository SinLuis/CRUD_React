import { createSlice } from "@reduxjs/toolkit";

const dataDaerah = createSlice({
    name: 'dataDaerah',
    initialState: [{
        provinsi:{
            id: 0,
            nama: ''
        }
    }],
    reducers: {
        getDataDaerahSlice: (state, action) => {
            state = action.payload
            return state
        }
    }
})
export const { getDataDaerahSlice } = dataDaerah.actions
export default dataDaerah.reducer