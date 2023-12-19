import React from 'react'
import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined'
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Light = styled(LightbulbOutlined)`
font-size:120px;
color:#f5f5f5;
`;
const Text = styled(Typography)`
font-size:22px;
color:#80868b;
`;
const Container = styled(Box)`
display:flex;
flex-direction:column;
align-items:center;
margin-top:20vh;
`;

const Emptynodes=()=> {
  return (
   <Container>
    <Light/>
    <Text>Notes you Add appear here</Text>
    </Container>
  )
}

export default Emptynodes;
