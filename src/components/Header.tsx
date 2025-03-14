import { FC, useState, useEffect, useCallback } from 'react';
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
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const isActive = (path: string) => location.pathname === path;

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const isMobile = useMediaQuery('(max-width:600px)');

  const updateTheme = useCallback(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    mediaQuery.addEventListener('change', () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    });
  }, []);

  useEffect(() => {
    updateTheme();
  }, [updateTheme]);

  return (
    <>
      <AppBar position="sticky" color="inherit">
        <Toolbar>
          <Stack direction={'row'} gap={2} alignItems={'center'} sx={{ flexGrow: 1 }}>
            <img
              id='logo'
              src={theme === 'dark' ? "/circleLight.png" : "/circleDark.png"}
              alt="Logo"
              width={40}
              height={40}
            />
            <Typography variant="h6">INOMED MEDICAL</Typography>
          </Stack>

          {isMobile && (
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}

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

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          <ListItem component={Link} to="/" onClick={toggleDrawer}>
            <ListItemText primary={locale.home} sx={{ color: 'text.primary' }} />
          </ListItem>
          <ListItem component={Link} to="/about" onClick={toggleDrawer}>
            <ListItemText primary={locale.about} sx={{ color: 'text.primary' }} />
          </ListItem>
          <ListItem component={Link} to="/contact" onClick={toggleDrawer}>
            <ListItemText primary={locale.contact} sx={{ color: 'text.primary' }} />
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