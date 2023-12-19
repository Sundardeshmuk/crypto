import React from 'react'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
const Styledcard = styled(Card)`
width:240px;
margin:8px;
box-shadow:none;
border:2px solid #e0e0e0;
border-radius:4px`;
const Note = ({ note }) => {
    return (

        <Styledcard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <Archive fontSize='small' style={{ marginLeft: 'auto' }} />
                <Delete fontSize='small' />
            </CardActions>
        </Styledcard>

    )
}

export default Note
