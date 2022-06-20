import * as React from 'react';
import Input from "@mui/material/Input"
import Button from "@mui/material/Button"
import { useDispatch, useSelector } from "react-redux"
import { setUserSlice } from "../redux/slice/user"
import { nanoid } from "@reduxjs/toolkit"
import { CREATE_USER, GET_DATA_DAERAH, GET_DATA_KECAMATAN, GET_DATA_KELURAHAN, UPDATE_USER_BY_ID } from "../redux/types"
import  TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete';
import { GET_DATA_KOTA } from '../redux/types';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

const MyForm = () => {
    const dataDaerah = useSelector(state => state.dataDaerah)
    const user = useSelector(state => state.user)
    const dataKota = useSelector (state => state.dataKota)
    const dataKecamatan = useSelector (state => state.dataKecamatan)
    const dataKelurahan = useSelector (state => state.dataKelurahan)
    
    const dispatch = useDispatch()
    
    React.useEffect(() => {dispatch({ type: GET_DATA_DAERAH })}, []);

    const optionsData = [].concat(...Object.keys(dataDaerah).map((provinsi) => 
    Object.values(dataDaerah[provinsi])))

    var kotaData = dataKota ? [].concat(...Object.keys(dataKota).map((kota_kabupaten) => 
    Object.values(dataKota[kota_kabupaten]))) : [];

    var kecamatanData = dataKecamatan ? [].concat(...Object.keys(dataKecamatan).map((kecamatan) => 
    Object.values(dataKecamatan[kecamatan]))) : [];

    var KelurahanaData = dataKelurahan ? [].concat(...Object.keys(dataKelurahan).map((kelurahan) => 
    Object.values(dataKelurahan[kelurahan]))) : [];

    const handleChangeNama = (prop) => (e) => {
        dispatch(setUserSlice({ ...user, [prop]: e.target.value }))
    }

    const handleChangeProvinsi = (prop) => (e,value) => {
        dispatch({ type: GET_DATA_KOTA, value})
        dispatch(setUserSlice({ ...user, [prop]: value.label }))
    }

    const handleKabupatenChange = (prop) => (e,value) => {
        var id = value.props.id;
        dispatch({ type: GET_DATA_KECAMATAN, id})
        dispatch(setUserSlice({ ...user, [prop]: value.props.children }))
    }

    const handleKecamatanChange = (prop) => (e,value) => {
        var id = value.props.id;
        dispatch({ type: GET_DATA_KELURAHAN, id})
        dispatch(setUserSlice({ ...user, [prop]: value.props.children }))
    }

    const handleKelurahanChange = (prop) => (e,value) => {
        dispatch(setUserSlice({ ...user, [prop]: value.props.children }))
    }

    const handleSubmit = () => {
        user.id === 0 ? dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(8) } }) : dispatch({ type: UPDATE_USER_BY_ID, user })

        dispatch(setUserSlice({
            nama: '',
            provinsi: '',
            kabupaten: '',
            kecamatan: '',
            kelurahan: '',
            id: 0
        }))
    }
    return <>
        <>

            <Input style={{ margin: '10px' }} onChange={handleChangeNama('nama')} placeholder="Nama" value={user.nama} fullWidth />
            <Autocomplete
                disablePortal
                options={optionsData.map((item) => ({id: item.id, label:item.nama}))}
                renderInput={(params) => <TextField {...params} label="Provinsi" />}
                onChange={handleChangeProvinsi('provinsi')}
                value={user.provinsi}
                isOptionEqualToValue={(option,value) => option.label === value.nama}
            />
            <FormControl sx={{ mt: 1, mr: 2.5, minWidth: 480 }} disabled={user.provinsi === '' ? true : false}>
                <InputLabel>Kota/Kabupaten</InputLabel>
                <Select
                value={user.kabupaten}
                onChange={handleKabupatenChange('kabupaten')}
                autoWidth
                label="Kota/Kabupaten">
                    <MenuItem value="">
                    </MenuItem>
                    {kotaData.map((kota) => (
                        <MenuItem value={kota.nama} id={kota.id}>
                            {kota.nama}
                        </MenuItem>
                    ))}
                </Select>
                {user.provinsi ? '' : <FormHelperText>Pick Provinsi First</FormHelperText>}
            </FormControl>
            <FormControl sx={{ mt: 1, mr: 2.5, minWidth: 480 }} disabled={user.kabupaten === '' ? true : false}>
                <InputLabel>Kecamatan</InputLabel>
                <Select
                value={user.kecamatan}
                onChange={handleKecamatanChange('kecamatan')}
                autoWidth
                label="Kecamatan">
                {kecamatanData.map((kecamatan) => (
                    <MenuItem id={kecamatan.id} value={kecamatan.nama}>
                        {kecamatan.nama}
                    </MenuItem>
                ))}
                </Select>
                {user.kabupaten ? '' : <FormHelperText>Pick Kota/Kabupaten First</FormHelperText>}
            </FormControl>
            <FormControl sx={{ mt: 1, mr: 2.5, minWidth: 480 }} disabled={user.kecamatan === '' ? true : false}>
                <InputLabel>Kelurahan</InputLabel>
                <Select
                value={user.kelurahan}
                onChange={handleKelurahanChange('kelurahan')}
                autoWidth
                label="Age">
                {KelurahanaData.map((kelurahan) => (
                    <MenuItem value={kelurahan.nama} id={kelurahan.id}>
                        {kelurahan.nama}
                    </MenuItem>
                ))}
                </Select>
                {user.kecamatan ? '' : <FormHelperText>Pick Kecamatan First</FormHelperText>}
            </FormControl>
            <Button style={{ margin: '10px' }} onClick={() => handleSubmit()} fullWidth variant="contained">Submit</Button>
        </>
    </>
}
export default MyForm

