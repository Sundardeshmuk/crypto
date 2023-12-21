import React, { useState } from 'react';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import EditNoteIcon from '@mui/icons-material/EditNote';
import TextField from '@mui/material/TextField';
import { Card, CardActions, CardContent } from '@mui/material';
import styled from '@emotion/styled';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { Datacontext } from '../../Context/DataProvider';
 
const Styledcard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
`;
 
const Note = ({ note }) => {
  const { notes, setnotes, setarchivenotes, setdeletenotes } = useContext(Datacontext);
  const [color, setColor] = useState(null);
  const [editdata, setEditData] = useState({ ...note });
 
  const ArchiveNote = (note) => {
    const updatedNotes = notes.filter(data => data.id !== note.id);
    setnotes(updatedNotes);
    setarchivenotes(preva => [note, ...preva]);
  };
 
  const DeleteNote = (note) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be able to recover this file from trash!',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setnotes(updatedNotes);
        setdeletenotes(preva => [note, ...preva]);
      }
    });
  };
 
  const editNote = () => {
    setnotes(prevNotes => prevNotes.map(data => (data.id === editdata.id ? editdata : data)));
  };
 
  const onTextChange = (e) => {
    const { name, value } = e.target;
    setEditData(prevData => ({ ...prevData, [name]: value }));
  };
 
  return (
    <Styledcard style={{ backgroundColor: color }}>
      <CardContent>
        <TextField
          variant='standard'
          multiline
          maxRows={Infinity}
          InputProps={{ disableUnderline: true }}
          onChange={onTextChange}
          name='heading'
          value={editdata.heading}
        />
        <TextField
          variant='standard'
          multiline
          maxRows={Infinity}
          InputProps={{ disableUnderline: true }}
          onChange={onTextChange}
          name='text'
          value={editdata.text}
        />
      </CardContent>
      <CardActions>
        <div className="colorContainer">
          <input type="color" value={color} className='colo' onChange={e => setColor(e.target.value)} />
          <ColorLensIcon className='cololense1' fontSize='small' />
        </div>
        <EditNoteIcon fontSize='small' onClick={editNote} style={{ marginLeft: 'auto', cursor: 'pointer' }} />
        <Archive fontSize='small' onClick={() => ArchiveNote(note)} style={{ cursor: 'pointer' }} />
        <Delete fontSize='small' onClick={() => DeleteNote(note)} style={{ cursor: 'pointer' }} />
      </CardActions>
    </Styledcard>
  );
};
 
export default Note;
