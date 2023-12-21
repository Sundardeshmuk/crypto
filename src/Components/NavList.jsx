import React from 'react'

import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightbulbTwoToneIcon from '@mui/icons-material/LightbulbTwoTone';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';
const NavList = () => {
  const navlist = [
    { id: 1, name: 'notes', icon: <LightbulbOutlinedIcon /> ,route:'/'},
    { id: 1, name: 'Archive', icon: <ArchiveOutlinedIcon /> ,route:'/archive'},
    { id: 1, name: 'trash', icon: <DeleteOutlineOutlinedIcon /> ,route:'/deleteNotes'},
    // {id:1,name:'notes',icon:<LightbulbCircleOutlinedIcon/>}
  ]
  return (
    <div>
      <List>
        {
          navlist.map(list => (
            <ListItem button key={list.id} >
            <Link to={list.route} style={{textDecoration:'none',display:'flex',color:'inherit'}}>
            <ListItemIcon style={{alignItems:'center'}}>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} />
            </Link>  
            </ListItem>
          ))}
      </List>
    </div>
  )
}

export default NavList;
// exported to Home page