import React from 'react'
import { useContext } from 'react';
import Swal from 'sweetalert2'

import { Card, CardActions, CardContent, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { RestoreFromTrashOutlined , DeleteForeverOutlined } from '@mui/icons-material';
import { Datacontext } from '../../Context/DataProvider';
const Styledcard = styled(Card)`
width:240px;
margin:8px;
box-shadow:none;
border:2px solid #e0e0e0;
border-radius:4px`;
const DeleteNote = ({ deletenote }) => {
    const{deletenotes,setnotes,setdeletenotes}=useContext(Datacontext);

   const RestoreNote=(deletenote)=>{
const updatedNotes=deletenotes.filter(data=>data.id !== deletenote.id);
// console.log(updatedNotes,"updated");
setdeletenotes(updatedNotes);
console.log(deletenotes,"deletenotes");
setnotes(preva=>[deletenote,...preva]);
    }

   const deleteNote=(deletenote)=>{
    Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
            const updatedNotes=deletenotes.filter(data=>data.id !== deletenote.id);
            setdeletenotes(updatedNotes);       
        } 
      })   
    // console.log(deletenotes,"deletenotes");
    }
    return (

        <Styledcard>
            <CardContent>
                <Typography>{deletenote.heading}</Typography>
                <Typography>{deletenote.text}</Typography>
            </CardContent>
            <CardActions>
                <DeleteForeverOutlined fontSize='small'  
                  style={{ marginLeft: 'auto' }}
                onClick={()=>deleteNote(deletenote)}/>
                <RestoreFromTrashOutlined
                 fontSize='small' 
                         onClick={()=>RestoreNote(deletenote)} />
            </CardActions>
        </Styledcard>

    )
}

export default DeleteNote;
