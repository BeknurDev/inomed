import { Container, Typography, Button, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { FC } from 'react';
import { motion } from 'framer-motion';
import useLocale from '../hooks/useLocale';
import Locale from '../locale';
import { useNavigate } from 'react-router-dom';

const Home: FC = () => {
  const products = ["ИПП-11", "ИПЭБ-1М", "ИПП-1","Индивидуальная тактическая аптечка №1", 'Индивидуальная тактическая аптечка №2', "Универсальная шина TAYANCH"]
  const locale = useLocale(Locale)
  const navigate = useNavigate()
  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        mt={2}
        sx={{
          textAlign: 'center',
          padding: '100px 20px',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))',
          color: 'white',
          borderRadius: 2,
        }}
      >
        <motion.div
          
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Typography variant="h3" gutterBottom>
            {locale.welcome}
          </Typography>
          <Typography variant="h6" paragraph>
            {locale.welcomeParagraph}
          </Typography>
          <Button variant="contained" color="primary" size="large">
            {locale.learnMore}
          </Button>
        </motion.div>
      </Box>

      {/* Products Section */}
      <Box sx={{ padding: '50px 0' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Typography variant="h4" gutterBottom align="center">
            {locale.products}
          </Typography>
        </motion.div>
        <Grid container spacing={4} justifyContent="center" mt={2}>
          {products.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                onClick={() => navigate(`/product/${index}`)}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
                whileHover={{
                  cursor: "pointer",
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="300"
                    image={`/p${index}.png`}
                    alt={`Product ${item}`}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {item}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" whiteSpace={'pre-line'}>
                      {locale.productDescription[index]}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Partners Section */}
      <Box sx={{ padding: '50px 0' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Typography variant="h4" gutterBottom align="center">
            {locale.partners}
          </Typography>
        </motion.div>
        <Grid container justifyContent="center" spacing={4} mt={2}>
          {['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4'].map((partner, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3, ease: 'easeOut' }}
              >
                <Card
                  sx={{
                    textAlign: 'center',
                    padding: '20px',
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                >
                  <img
                    src={`https://placeholder.com/150?text=${partner}`}
                    alt={partner}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                  />
                  <Typography variant="h6" mt={2} color='text.secondary'>
                    {partner}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Main Section with Call to Action */}
      <Box sx={{ padding: '80px 0' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            {locale.callToActionTitle}
          </Typography>
          <Typography variant="h6" align="center" paragraph>
          {locale.callToActionParagraph}
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" size="large">
              {locale.startYourJourney}
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home;