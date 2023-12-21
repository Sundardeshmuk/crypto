import React from 'react'
import { useContext } from 'react';
import { Box ,Grid} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// imported components
import DeleteNote from './DeleteNote';
import { Datacontext } from '../../Context/DataProvider';
import { Margin } from '@mui/icons-material';
const DrawerHeader = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const DeleteNotes = () => {
    const {deletenotes}=useContext(Datacontext);
    return (
        <>
            <Box sx={{ display: 'flex',width:'100%' }}>
                <Box component="main" sx={{p: 3,width:'100%' }}>
                    <DrawerHeader />                                
                    <Grid container style={{MarginTop:16}}>
                    {
                        deletenotes.map( (deletenote) => (
                            <Grid item>
                                <DeleteNote deletenote={deletenote}/>
                            </Grid>
                            )
                            )
                        }
                        </Grid>
                                    </Box>
            </Box>
        </>

    )
}

export default DeleteNotes;
// exported to Home page