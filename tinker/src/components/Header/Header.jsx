import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBar, Box } from '@mui/material';

const Header = ()  =>  {
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5">
                    
                </Typography>

            </Toolbar>

        </AppBar>
    );
}

export default Header;