import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {
        nama: '',
        provinsi: '',
        kabupaten: '',
        kecamatan: '',
        kelurahan: '',
        id: 0
    },
    reducers: {
        setUserSlice: (state, action) => {
            state = action.payload
            return state
        },
        setUserNama: (state, action) => {
            state.nama = action.payload
            return state
        }
    }
})
export const { setUserSlice, setUserNama } = user.actions
export default user.reducer