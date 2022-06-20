import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { setUserSlice, setUserNama } from '../redux/slice/user';
import { deleteUserSlice } from '../redux/slice/users';
import Button from '@mui/material/Button';
import { DELETE_USER_BY_ID, GET_USERS } from '../redux/types';

export default function MyTable() {
    const rows = useSelector(state => state.users)
    const dispatch = useDispatch()
    React.useEffect(() => dispatch({ type: GET_USERS }), [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nama</TableCell>
                        <TableCell align="right">Provinsi</TableCell>
                        <TableCell align="right">kabupaten</TableCell>
                        <TableCell align="right">kecamatan</TableCell>
                        <TableCell align="right">Kelurahan</TableCell>
                        <TableCell align="center" colSpan={2}>Action</TableCell>
                   
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.nama}
                            </TableCell>
                            <TableCell align="right">{row.provinsi}</TableCell>
                            <TableCell align="right">{row.kabupaten}</TableCell>
                            <TableCell align="right">{row.kecamatan}</TableCell>
                            <TableCell align="right">{row.kelurahan}</TableCell>
                            <TableCell align="right">
                                <Button onClick={() => dispatch(setUserNama(row.nama))} fullWidth variant="contained">Edit</Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button onClick={() => dispatch({ type: DELETE_USER_BY_ID, id: row.id })} fullWidth variant="contained">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}