import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import { SearchContext } from './SearchContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

const Header = () => {
  const { setSearchTerm } = useContext(SearchContext);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSearchChange = (event) => setSearchTerm(event.target.value);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);


  return (
    <AppBar position="static">
      <Toolbar>
        {
          isMobile && (
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer}>
              {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )
        }
        {
          !isMobile && <Typography variant="h6" sx={{ flexGrow: 1 }}> My Application</Typography>
        }
        <Box sx={{ flexGrow: 1 }} />
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{
            backgroundColor: 'white',
            borderRadius: 1,
            input: { color: 'black' },
          }}
          onChange={handleSearchChange}
        />
      </Toolbar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer} PaperProps={{ sx: { width: '80%' } }}>
        <List>
          {['Home', 'About Us', 'Contact Us'].map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <IconButton sx={{ position: 'absolute', top: 0, right: 0 }} onClick={toggleDrawer}>
          <CloseIcon />
        </IconButton>
      </Drawer>
    </AppBar>
  );
};

export default Header;
