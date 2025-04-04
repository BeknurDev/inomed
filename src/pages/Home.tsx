import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Chip,
  Stack,
} from "@mui/material";
import { FC, useEffect } from "react";
import { motion } from "framer-motion";
import useLocale from "../hooks/useLocale";
import Locale from "../locale";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Circle } from "@mui/icons-material";

const Home: FC = () => {
  const products = [
    { name: "ИПП-11", bestSeller: false, new: false },
    { name: "ИПЭБ-1М", bestSeller: true, new: true },
    { name: "ИПП-1", bestSeller: true, new: false },
    { name: "Индивидуальная тактическая аптечка №1", bestSeller: false, new: false },
    { name: "Индивидуальная тактическая аптечка №2", bestSeller: false, new: false },
    { name: "Универсальная шина TAYANCH", bestSeller: true, new: false },
  ];

  const locale = useLocale(Locale);
  const navigate = useNavigate();
  window.scrollTo(0, 0);

  return (
    <>
      {/* Hero Section */}
      <Box
        mt={2}
        sx={{
          textAlign: "center",
          padding: "100px 20px",
          background:
            "linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))",
          color: "white",
          "@media (prefers-color-scheme: light)": {
            background:
              "linear-gradient(135deg, rgba(247, 247, 247, 0.8), rgba(255, 255, 255, 0.3))",
          },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography variant="h3" gutterBottom color="text.primary">
            {locale.welcome}
          </Typography>
          <Typography variant="h6" paragraph color="text.primary">
            {locale.welcomeParagraph}
          </Typography>
          <Button variant="contained" color="primary" size="large">
            {locale.learnMore}
          </Button>
        </motion.div>
      </Box>
      <Container maxWidth="lg">
        {/* Products Section */}
        <Box sx={{ padding: "50px 0" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
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
                  transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      borderRadius: 2,
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                      },
                      position: "relative", // Required for badge positioning
                    }}
                  >
                    {item.bestSeller && (
                      <Chip
                        label="BEST SELLER"
                        color="primary"
                        sx={{
                          position: "absolute",
                          top: 10,
                          left: 10,
                          fontWeight: "bold",
                         
                          zIndex: 2,
                        }}
                      />
                    )}
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={`/p${index}.png`}
                        alt={`Product ${item.name}`}
                        sx={{
                          borderTopLeftRadius: 2,
                          borderTopRightRadius: 2,
                          objectFit: "cover",
                        }}
                      />
                      <CardContent>
                        <Typography
                          variant="h6"
                          gutterBottom
                          sx={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: "100%",
                            "&:hover": {
                              overflow: "visible",
                              whiteSpace: "normal",
                              zIndex: 1,
                              position: "relative",
                            },
                          }}
                          title={item.name} // Tooltip for full text
                        >
                          {item.name}
                        </Typography>
                        <Stack direction={"row"} gap={1} mb={2}>
                          <Circle color="warning" />
                          <Circle color="primary" />
                          <Circle color="success" />
                        </Stack>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          whiteSpace={"pre-line"}
                        >
                          {locale.productDescription[index]?.length > 200
                            ? `${locale.productDescription[index].slice(
                                0,
                                200
                              )}...`
                            : locale.productDescription[index]}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Partners Section */}
        <Box sx={{ padding: "50px 0" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typography variant="h4" gutterBottom align="center">
              {locale.partners}
            </Typography>
          </motion.div>
          <Grid container justifyContent="center" spacing={4} mt={2}>
            {["Partner 1", "Partner 2", "Partner 3", "Partner 4"].map(
              (partner, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <Card
                      variant="outlined"
                      sx={{
                        textAlign: "center",
                        padding: "20px",
                        borderRadius: 2,
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        "&:hover": {
                          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                        },
                      }}
                    >
                      <img
                        src={"bg.png"}
                        alt={partner}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                        }}
                      />
                      <Typography variant="h6" mt={2} color="text.secondary">
                        {partner}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              )
            )}
          </Grid>
        </Box>

        {/* Main Section with Call to Action */}
        <Box sx={{ padding: "80px 0" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Typography variant="h4" align="center" gutterBottom>
              {locale.callToActionTitle}
            </Typography>
            <Typography variant="h6" align="center" paragraph>
              {locale.callToActionParagraph}
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Button variant="contained" color="primary" size="large">
                {locale.startYourJourney}
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </>
  );
};

export default Home;
