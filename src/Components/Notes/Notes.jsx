import React from 'react'
import { useContext } from 'react';
import { Box ,Grid} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

// imported components
import Form from './Form';
import Note from './Note';
import { Datacontext } from '../../Context/DataProvider';
import { Margin } from '@mui/icons-material';
import Emptynodes from './Emptynodes';
const DrawerHeader = styled('div')(({ theme }) => ({
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const Notes = () => {
    const {notes}=useContext(Datacontext);
    return (
        <>
            <Box sx={{ display: 'flex',width:'100%' }}>
                <Box component="main" sx={{p: 3,width:'100%' }}>
                    <DrawerHeader />
                    <Form />
                    {
     notes.length>0?                  
                    <Grid container style={{MarginTop:16}}>

                    {
                        notes.map( (note) => (
                            <Grid item>
                                <Note note={note}/>
                            </Grid>
                            )
                            )
                        }
                        </Grid>
                        :<Emptynodes/>
}
                </Box>
            </Box>
        </>

    )
}

export default Notes;
// exported to Home page