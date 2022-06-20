import Grid from "@mui/material/Grid"
import { Provider } from "react-redux"
import MyForm from "./components/MyForm"
import MyTable from "./components/MyTable"
import store from './store'


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Form', 'Table'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const App = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            CRUD
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            >
                                CRUD    
                            </Typography>
                            
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                
                            </Menu>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
            <br />
            <Provider store={store}>
                {/* <Grid container spacing={{ xs: 2, md: 3 }}> */}
                    <Grid >
                    {/* item xs={12} md={8} lg={6} */}
                        <MyForm />
                    </Grid>
                    
                    <Grid item mt ={10}>
                        <MyTable />
                    </Grid>
                {/* </Grid> */}
            </Provider>
        </>
    );
};
export default App;