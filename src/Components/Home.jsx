import React from 'react'
import { Box } from '@mui/material';//it is used as an div 

// imported components
import SwipeDrawer from './SwipeDrawer';
import Notes from './Notes/Notes';
const Home=()=> {
  return (
    <Box sx={{ display: 'flex', width:"100%" }}>
      <SwipeDrawer/>
      <Notes/>
    </Box>
  )
}

export default Home;