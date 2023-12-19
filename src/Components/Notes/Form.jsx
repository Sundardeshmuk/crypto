import React from 'react'
import { useState, useRef, useContext } from 'react';
//useRef is an replacement of document.id/class/etc..,it uses to use with virtual dom
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';//it is used as an div 
import { styled } from '@mui/material/styles';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { v4 as uuid } from 'uuid'; // use to takerandom no
import { Datacontext } from '../../Context/DataProvider';
// handle css dynamically
const Container = styled(Box)`
display: flex;
flex-direction: column;
 width:600px;
 box-shadow:0 1px 2px 0 rgb(60 64 67/ 30%),0 2px 6px 2px rgb(60 64 67/ 15%);
 padding:10px 15px;
 border-radius: 8px;
 border-color:#e0e0e0;
 margin:auto;
 min-height:30px;
`;
const note = {
    id: "",
    heading: "",
    text: ""
}
const Form = () => {
    const [showTextField, setshowTextField] = useState(false);
    const [addNote, setAddNote] = useState({ ...note, id: uuid() });
   const {notes,setnotes}=useContext(Datacontext);
    const containerRef = useRef();
    const onTextAreaClick = () => {
        setshowTextField(true);
        containerRef.current.style.minHeight = '70px'
    }
    const handleClickaway = () => {
        setshowTextField(false);
        containerRef.current.style.minHeight = '30px'
        setAddNote({ ...note, id: uuid() })
        if (addNote.heading || addNote.text) {
            setnotes(preva => [addNote,...preva]);
            // setnotes(addNote);
        }
        // console.log(notes);
    }
    const onTextChange = (e) => {
        console.log(e.target.name,e.target.value);
        let changedNotes = { ...addNote, [e.target.name]: e.target.value }
        setAddNote(changedNotes);
    }
    return (
        <ClickAwayListener onClickAway={handleClickaway}>
            <Container ref={containerRef}>
                {showTextField &&
                    <TextField placeholder='Title'
                        variant='standard'
                        InputProps={{ disableUnderline: 'true' }}
                        style={{ marginBottom: 10 }}
                        onChange={(e) => onTextChange(e)}
                        name='heading'
                        value={addNote.heading}
                    />
                }
                <TextField placeholder='Take a note...'
                    variant='standard'
                    multiline 
                    maxRows={Infinity}
                    InputProps={{ disableUnderline: 'true' }}
                    onClick={onTextAreaClick}
                    onChange={(e) => onTextChange(e)}
                    name='text'
                    value={addNote.text}
                />
            </Container>
        </ClickAwayListener>

    )
}

export default Form
