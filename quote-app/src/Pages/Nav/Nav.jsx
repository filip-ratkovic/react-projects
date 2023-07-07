import { Switch } from '@mui/material'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeSlice } from '../../Store/themeSlice'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Nav() {
  const themeState = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  return (
    <div>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Favorites
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign up</Button>
          <Switch
          onChange={() => {
            dispatch(themeSlice.actions.toggleTheme());
          }}
          checked={themeState.theme === "dark"}
        />
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Nav