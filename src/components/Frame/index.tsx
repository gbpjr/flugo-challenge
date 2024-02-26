import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { Box, Drawer, CssBaseline, AppBar, Toolbar, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Menu, MenuItem } from '@mui/material'
import { Dashboard as DashboardIcon, Group as GroupIcon, ExitToApp as ExitToAppIcon, Person as PersonIcon, Settings as SettingsIcon } from '@mui/icons-material'
import { Logo, Content } from './styles'
import flugo_logo from '../../assets/flugo_logo.png'

const drawerWidth = 220

const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    auth.signOut().then(() => {
      console.log('Logout realizado com sucesso')
      navigate('/login')
    }).catch((error) => {
      console.error('Erro ao realizar logout:', error)
    })
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" color="secondary" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton size="large" edge="end" color="inherit" onClick={handleMenuClick}>
            <PersonIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem disabled>
              <ListItemIcon>
                <PersonIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Meu Perfil" />
            </MenuItem>
            <MenuItem disabled>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Configurações" />
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <ExitToAppIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="Sair" />
            </MenuItem>
          </Menu>
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
        <Toolbar>
          <Logo src={flugo_logo} />
        </Toolbar>
        <Divider />
        <List>
          {['Dashboard', 'Clientes'].map((text, _index) => (
            <ListItem key={text}>
              <ListItemButton
                selected={text === 'Dashboard'}
                disabled={text === 'Clientes'}
              >
                <ListItemIcon>
                  {text === 'Dashboard' ? <DashboardIcon /> : <GroupIcon />}
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
        {children}
      </Content>
    </Box>
  )
}

export default Frame