import React from 'react'

import {
  Dashboard as DashboardIcon
} from '@mui/icons-material'

import {
  Box,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'

import { 
  Logo,
  Content
} from './styles'

import flugo_logo from '../../assets/flugo_logo.png'

const drawerWidth = 220

const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color='secondary'
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Logo
            src={flugo_logo}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Dashboard'].map((text, _index) => (
            <ListItem key={text}>
              <ListItemButton selected>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Content
        component="main"
        sx={{ bgcolor: 'background.default' }}
      >
        { children }        
      </Content>
    </Box>
  )
}

export default Frame