import React from 'react'
import { styled } from '@mui/material/styles'; // styled() used to style the components
import {AppBar,Toolbar,Typography,IconButton} from '@mui/material'; //named import to reduce lines code
import MenuIcon from '@mui/icons-material/Menu';
const drawerWidth = 170; //240 /170

const Header = styled(AppBar)`
z-index:1201;
background:#fff;
height:70px;
box-shadow:inset 0 -1px 0 0 #dadce0`; // styling of navbar
const Heading = styled(Typography)`
color:#5f6368;
font-size:24px;
margin-left:25px;`; // styling of Typography

const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
const HeaderBar = ({ open, handleDrawer }) => {
    return (
        <Header  open={open}>
            <Toolbar>
                <IconButton
                        onClick={handleDrawer}
                    edge="start"
                    sx={{ marginRight:'20px',}}
                >
                    <MenuIcon />
                </IconButton>
                <img src={logo} alt='logo' style={{width:30}}/>
                <Heading >Google keep</Heading>
            </Toolbar>

        </Header>

    )
}

export default HeaderBar;
