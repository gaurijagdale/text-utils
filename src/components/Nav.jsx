import * as React from 'react';
import { Link } from 'react-router-dom';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';
// import Person from '@mui/icons-material/Person';

export default function HorizontalList(props) {
    return (
        <Box component="nav" aria-label="My site" sx={{ flexGrow: 1, padding: '10px 24px' }}>
            <List role="menubar" orientation="horizontal">
                <ListItem role="none">
                    <ListItemButton
                        role="menuitem"
                        component={Link}
                        to="/"
                        // aria-label="Home"
                    >
                        <Home />
                    </ListItemButton>
                </ListItem>
                <ListDivider />
                <ListItem role="none">
                    <ListItemButton role="menuitem" component={Link} to="/Text-Converter">
                        Text Converter
                    </ListItemButton>
                </ListItem>
                <ListDivider />
                <ListItem role="none">
                    <ListItemButton role="menuitem" component={Link} to="/Font-Changer">
                        Font Changer
                    </ListItemButton>
                </ListItem>
                <ListDivider />
                <ListItem role="none">
                    <ListItemButton role="menuitem" component={Link} to="/About">
                        About
                    </ListItemButton>
                </ListItem>
                <ListItem role="none" sx={{ marginInlineStart: 'auto' }}>
                    <Typography component="label" endDecorator={<Switch sx={{ ml: 1 }} onClick={props.toggleMode}/>}>
                        {/* {props.mode==='dark'?'Enable Light Mode':'Enable Dark Mode'} */}
                        Dark Mode
                    </Typography>
                </ListItem>
            </List>
        </Box>
    );
}
