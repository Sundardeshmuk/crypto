import React from 'react'
import { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// imported components
import Archive from './Archive';

import { Datacontext } from '../../Context/DataProvider';
const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));
const Archives = () => {
    const { archivenotes } = useContext(Datacontext);
    return (
        <>
            <Box sx={{ display: 'flex', width: '100%' }}>
                <Box component="main" sx={{ p: 3, width: '100%' }}>
                    <DrawerHeader />
                    <Grid container style={{ MarginTop: 16 }}>
                        {
                            archivenotes.map((archive) => (
                                <Grid item>
                                    <Archive archive={archive} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        </>

    )
}

export default Archives;
// exported to Home page