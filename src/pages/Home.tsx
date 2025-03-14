import React, { useEffect, useRef } from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent } from '@mui/material';
import { FC } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber'; // For rendering 3D scene
import { OrbitControls, useGLTF } from '@react-three/drei'; // For loading models and controls
import useLocale from '../hooks/useLocale';
import Locale from '../locale';

const Home: FC = () => {
  const products = ["ИПП-11"];
  const locale = useLocale(Locale);

  // Component for loading and displaying 3D models
  const Product3DModel = ({ modelPath }: { modelPath: string }) => {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={0.5} />;
  };

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
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
                whileHover={{
                  cursor: "pointer",
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              >
                <Card sx={{ padding: 2 }}>
                  <Canvas style={{ width: '100%', height: '300px' }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} />
                    <OrbitControls />
                    {/* Replace 'modelPath' with actual path to your 3D model */}
                    <Product3DModel modelPath={`3d${index+1}.glb`} />
                  </Canvas>
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

      {/* Additional Sections... */}
    </Container>
  );
};

export default Home;
