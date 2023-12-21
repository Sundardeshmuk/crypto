import React, { useState } from 'react'
import { useContext } from 'react';
import Swal from 'sweetalert2';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import EditNoteIcon from '@mui/icons-material/EditNote';
import TextField from '@mui/material/TextField';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { Datacontext } from '../../Context/DataProvider';
const Styledcard = styled(Card)`
width:240px;
margin:8px;
box-shadow:none;
border:2px solid #e0e0e0;
border-radius:4px;
`;

const Note = ({ note }) => {
    const { notes, setnotes, deletenotes, setarchivenotes, setdeletenotes } = useContext(Datacontext);
    const [color, setColor] = useState(null);
        const [editdata1, seteditdata1] = useState([]);
        // seteditdata1(note);
    const [x, setx] = useState(true);
    const ArchiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setnotes(updatedNotes);
        setarchivenotes(preva => [note, ...preva]);
    }
    const DeleteNote = (note) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will be able to recover this file from trash!',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancle'
        }).then((result) => {
            if (result.value) {
                const updatedNotes = notes.filter(data => data.id !== note.id);
                setnotes(updatedNotes);
                setdeletenotes(preva => [note, ...preva]);
            }
        })

    }

    const editNote = () => {
   
        seteditdata1({ ...note, id:note.id })
        if (editdata1.heading || editdata1.text) {
            setnotes(preva => [editdata1,...preva]);
        }     
    }

var temp="";
    const onTextChange = (e) => {  
        let changedNotes = { ...editdata1, [e.target.name]: e.target.value }
        seteditdata1(changedNotes);
               
    }
    console.log(notes,"notes");
    console.log(editdata1,"notes");
    return (

        <Styledcard style={{ backgroundColor: color }}>
            <CardContent>
                <TextField
                    variant='standard'
                    multiline
                    maxRows={Infinity}
                    InputProps={{ disableUnderline: 'true' }}
                    // onClick={onTextAreaClick}
                    onChange={(e) => onTextChange(e)}
                    name='heading'
                    // value={x?note.heading:editdata1.heading}
                    value={note.heading}
                />
                <TextField
                    variant='standard'
                    multiline
                    maxRows={Infinity}
                    inputRef={(input) => {
                        if(input != null) {
                           input.focus();
                        }
                      }}
                    InputProps={{ disableUnderline: 'true' }}
                    onChange={(e) => onTextChange(e)}
                    // onClick={onTextAreaClick}
                    name='text'
                    value={note.text}
                />
            </CardContent>
            <CardActions>
                <div className="colorContainer" >
                <input type="color" value={color}className='colo' onChange={e => setColor(e.target.value)}/>
                    <ColorLensIcon className='cololense1' fontSize='small' />
                </div>
                <EditNoteIcon fontSize='small' onClick={(e) => editNote} style={{ marginLeft: 'auto' }} />
                <Archive fontSize='small' onClick={() => ArchiveNote(note)} />
                <Delete fontSize='small' onClick={() => DeleteNote(note)} />
            </CardActions>
        </Styledcard>
    )
}

export default Note
