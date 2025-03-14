import { FC } from 'react';
import { Box, Container, Typography, IconButton, Link, Button, TextField } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Telegram } from '@mui/icons-material';
import useLocale from '../hooks/useLocale';
import Locale from '../locale';

const Footer: FC = () => {
  const locale = useLocale(Locale)
  return (
    <Box component="footer" sx={{ padding: '40px 0', backgroundColor: 'background.default'}}>
      <Container>
        {/* Main footer content */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            {locale.allRights}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={1}>
            Uzbekistan, Tashkent
          </Typography>
        </Box>

        {/* Social Media Icons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <IconButton color="primary" component={Link} href="https://facebook.com" target="_blank">
            <Facebook />
          </IconButton>
          <IconButton color="primary" component={Link} href="https://twitter.com" target="_blank">
            <Twitter />
          </IconButton>
          <IconButton color="primary" component={Link} href="https://instagram.com" target="_blank">
            <Instagram />
          </IconButton>
          <IconButton color="primary" component={Link} href="https://linkedin.com" target="_blank">
            <LinkedIn />
          </IconButton>
          <IconButton color="primary" component={Link} href="https://t.me/your_channel" target="_blank">
            <Telegram />
          </IconButton>
        </Box>

        {/* Optional Newsletter Section */}
        {/* <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Subscribe to our newsletter:
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <TextField
             type='email'
             label='Email Address'
             variant='outlined'
             size='small'
            />
            <Button
              variant='contained'
              color='primary'
            >
              Subscribe
            </Button>
          </Box>
        </Box> */}

        {/* Developed By Section */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            {locale.developedBy} <Link href="https://github.com/BeknurDev" target="_blank" color="primary">BeknurDev</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
