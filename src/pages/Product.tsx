import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
  CardActionArea,
} from "@mui/material";
import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocale from "../hooks/useLocale";
import Locale from "../locale";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const Product: FC = () => {
  const { id } = useParams<{ id: string }>();
  const isMobile = window.innerWidth < 768;
  const locale = useLocale(Locale);
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  const releatedProducts = () => {
    switch (id) {
      case "1":
        return [2];
      case "2":
        return [1];
      case "3":
        return [4];
      case "4":
        return [3];
      default:
        return [];
    }
  };

  return (
    <Container maxWidth={"lg"}>
      <Box m={2}>
        <Card>
          <Stack direction={isMobile ? "column" : "row"}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              style={{ width: "100%", height: "100%" }}
            >
              <CardMedia image={`/p${id}.png`} component="img" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ width: "100%", height: "100%" }}
            >
              <CardMedia image={`/b${id}.png`} component="img" />
            </motion.div>
          </Stack>
          <CardContent>
            {/* Animating the title */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3">
                {locale.productName[id as any]}
              </Typography>
            </motion.div>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                {/* Animating the description */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <Typography variant="body1" mt={2}>
                    {locale.productDescriptionFull[id as any]}
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* Animating the video player */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <ReactPlayer
                    url={`/p${id}.mp4`}
                    width="100%"
                    height="100%"
                    controls={true}
                  />
                </motion.div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>

      {/* New Section: Related Products */}
      {releatedProducts().length > 0 && (
        <Box m={2} mt={4}>
          <Typography variant="h5" gutterBottom>
            {locale.relatedProduct}
          </Typography>
          <Grid container spacing={3} mt={1}>
            {releatedProducts().map((item) => (
              <Grid item xs={12} sm={4} key={item}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  onClick={() => navigate(`/product/${item}`)}
                >
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                      },
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                      image={`/p${item}.png`}
                      component="img"
                      alt={`Related Product ${item}`}
                    />
                    <CardContent>
                      <Typography variant="h6">
                        {locale.productName[item]}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" mt={1}>
                        {locale.productDescription[item]}
                      </Typography>
                    </CardContent>
                    </CardActionArea>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* New Section: Customer Reviews */}
      <Box m={2} mt={4}>
        <Typography variant="h5" gutterBottom>
          {locale.customerReviews}
        </Typography>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} sm={6}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h6">John Doe</Typography>
                  <Typography variant="body2" color="textSecondary">
                    ⭐⭐⭐⭐⭐
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    "This product is amazing! It exceeded all my expectations."
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardContent>
                  <Typography variant="h6">Jane Smith</Typography>
                  <Typography variant="body2" color="textSecondary">
                    ⭐⭐⭐⭐☆
                  </Typography>
                  <Typography variant="body1" mt={1}>
                    "Great quality! Would definitely recommend."
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Product;
