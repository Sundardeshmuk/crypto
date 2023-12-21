import React from 'react'
import {BrowserRouter,Routes,Route} from'react-router-dom';
import { Box } from '@mui/material';//it is used as an div 

// imported components
import SwipeDrawer from './SwipeDrawer';
import Notes from './Notes/Notes';
import DeleteNotes from './Delete/DeleteNotes';
import Archives from './Archive/Archives';
const Home=()=> {
  return (
    <Box sx={{ display: 'flex', width:"100%" }}>
      <BrowserRouter>
      <SwipeDrawer/>
      <Routes>
<Route path='/'  element={<Notes/>}/>
<Route path='/archive'  element={<Archives/>}/>
<Route path='/deleteNotes'  element={<DeleteNotes/>}/>
      </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default Home;