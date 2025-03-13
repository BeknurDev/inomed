import React, { FC, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ChangeLangMenu from './ChangeLang';
import useLocale from '../hooks/useLocale';
import Locale from '../locale';
import MenuIcon from '@mui/icons-material/Menu';

const Header: FC = () => {
  const locale = useLocale(Locale);
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Check if the current path matches the link
  const isActive = (path: string) => location.pathname === path;

  // Handle drawer toggle
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // For mobile view: Check if the screen is small enough to need the hamburger menu
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Stack direction={'row'} gap={2} alignItems={'center'} sx={{ flexGrow: 1 }}>
            <img src="" alt="Logo" />
            <Typography variant="h6">{locale.companyName}</Typography>
          </Stack>

          {/* Hamburger menu for mobile */}
          {isMobile && (
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}

          {/* Desktop Menu */}
          {!isMobile && (
            <>
              <Button
                color={isActive('/') ? 'primary' : 'inherit'}
                component={Link}
                to="/"
                sx={{ marginRight: 2 }}
              >
                {locale.home}
              </Button>
              <Button
                color={isActive('/about') ? 'primary' : 'inherit'}
                component={Link}
                to="/about"
                sx={{ marginRight: 2 }}
              >
                {locale.about}
              </Button>
              <Button
                color={isActive('/contact') ? 'primary' : 'inherit'}
                component={Link}
                to="/contact"
              >
                {locale.contact}
              </Button>
              <ChangeLangMenu />
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          <ListItem component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary={locale.home} sx={{ color: 'text.primary'}}/>
          </ListItem>
          <ListItem component={Link} to="/about" onClick={toggleDrawer}>
            <ListItemText primary={locale.about} sx={{ color: 'text.primary'}}/>
          </ListItem>
          <ListItem component={Link} to="/contact" onClick={toggleDrawer}>
            <ListItemText primary={locale.contact} sx={{ color: 'text.primary'}}/>
          </ListItem>
          <ListItem>
            <ChangeLangMenu />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
