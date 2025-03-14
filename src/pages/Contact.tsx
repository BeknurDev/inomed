import { FC } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  IconButton,
} from "@mui/material";
import { motion } from "framer-motion";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useLocale from "../hooks/useLocale";
import Locale from "../locale";

const Contact: FC = () => {
  const locale = useLocale(Locale)
  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: "center", padding: "50px 0" }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography variant="h4" gutterBottom>
            {locale.contactUs}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <TextField
            label={locale.name}
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: 2,
                boxShadow: 1,
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "primary.main",
                },
                "&:hover fieldset": {
                  borderColor: "primary.dark",
                },
              },
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <TextField
            label={locale.email}
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: 2,
                boxShadow: 1,
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "primary.main",
                },
                "&:hover fieldset": {
                  borderColor: "primary.dark",
                },
              },
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <TextField
            label={locale.message}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: 2,
                boxShadow: 1,
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "primary.main",
                },
                "&:hover fieldset": {
                  borderColor: "primary.dark",
                },
              },
            }}
          />
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: "20px",
              "&:hover": {
                backgroundColor: "primary.dark",
                transform: "scale(1.1)",
                transition: "transform 0.3s ease",
              },
            }}
          >
            {locale.sendMessage}
          </Button>
        </motion.div>

        {/* Social Media Links */}
        <Box sx={{ marginTop: "40px" }}>
          <Typography variant="h6" gutterBottom>
            {locale.connectWithUs}
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {/* Telegram Icon */}
            <Grid item>
              <IconButton
                color="primary"
                href="https://t.me/your-telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TelegramIcon fontSize="large" />
              </IconButton>
            </Grid>

            {/* Instagram Icon */}
            <Grid item>
              <IconButton
                color="primary"
                href="https://www.instagram.com/your-instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
            </Grid>

            {/* LinkedIn Icon */}
            <Grid item>
              <IconButton
                color="primary"
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Box>

        {/* Google Map Embed */}
        <Box sx={{ marginTop: "40px" }}>
          <Typography variant="h6" gutterBottom>
            {locale.ourLocation}
          </Typography>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.892213191737!2d69.2795337!3d41.3112084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b293078f7d1%3A0x8cbea837303e83f5!2z0J_QsNC80Y_RgtC90LjQuiDQkNC80LjRgNGDINCi0LjQvNGD0YDRgywg0KLQsNGI0LrQtdC90YIsIFRhc2hrZW50!5e0!3m2!1sru!2s!4v1741855672752!5m2!1sru!2s"
            width="100%"
            height="450"
            style={{ borderRadius: 8, marginTop: 10 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
