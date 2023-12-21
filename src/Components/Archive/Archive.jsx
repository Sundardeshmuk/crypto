import React from 'react'
import { useContext } from 'react';
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { UnarchiveOutlined as UnArchive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { Datacontext } from '../../Context/DataProvider';
const Styledcard = styled(Card)`
width:240px;
margin:8px;
box-shadow:none;
border:2px solid #e0e0e0;
border-radius:4px`;
const Archive = ({ archive }) => {
    const{notes,setnotes,archivenotes,setarchivenotes,setdeletenotes}=useContext(Datacontext);
   const UnArchiveNote=(archive)=>{
const updatedNotes=archivenotes.filter(data=>data.id !== archive.id);
console.log(updatedNotes,"updated");
setarchivenotes(updatedNotes);
 setnotes(preva=>[archive,...preva]);
    }
   const DeleteNote=(archive)=>{
    const updatedNotes=archivenotes.filter(data=>data.id !== archive.id);
    // console.log(updatedNotes,"updated");
    setarchivenotes(updatedNotes);
    setdeletenotes(preva=>[archive,...preva]);
    }
    return (

        <Styledcard>
            <CardContent>
                <Typography>{archive.heading}</Typography>
                <Typography>{archive.text}</Typography>
            </CardContent>
            <CardActions>
                <UnArchive
                 fontSize='small' 
                 style={{ marginLeft: 'auto' }}
                 onClick={()=>UnArchiveNote(archive)} />
                <Delete fontSize='small'  onClick={()=>DeleteNote(archive)}/>
            </CardActions>
        </Styledcard>

    )
}

export default Archive;
