import { FC } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { motion } from "framer-motion"; // For animations
import WorkIcon from "@mui/icons-material/Work";
import GroupIcon from "@mui/icons-material/Group";
import StarIcon from "@mui/icons-material/Star";
import BuildIcon from "@mui/icons-material/Build";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import useLocale from "../hooks/useLocale";
import Locale from "../locale";

const About: FC = () => {
  const locale = useLocale(Locale);
  window.scrollTo(0, 0);
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: "center", padding: "50px 0" }}>
        {/* Animated Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography variant="h4" gutterBottom>
            {locale.aboutUs}
          </Typography>
        </motion.div>

        {/* Company Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Typography variant="body1" paragraph>
            {locale.intro}
          </Typography>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <Typography variant="h5" gutterBottom mt={4}>
            {locale.ourCoreValues}
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={2}>
            {/* Value 1 */}
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
                <WorkIcon sx={{ fontSize: 50, color: "primary.main" }} />
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  {locale.excellence}
                </Typography>
                <Typography variant="body2">
                  {locale.excellenceParagraph}
                </Typography>
              </Paper>
            </Grid>

            {/* Value 2 */}
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
                <GroupIcon sx={{ fontSize: 50, color: "primary.main" }} />
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  {locale.teamWork}
                </Typography>
                <Typography variant="body2">
                  {locale.teamWorkParagraph}
                </Typography>
              </Paper>
            </Grid>

            {/* Value 3 */}
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
                <StarIcon sx={{ fontSize: 50, color: "primary.main" }} />
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  {locale.innovation}
                </Typography>
                <Typography variant="body2">
                  {locale.innovationParagraph}
                </Typography>
              </Paper>
            </Grid>

            {/* Value 4 */}
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} sx={{ padding: 3, textAlign: "center" }}>
                <BuildIcon sx={{ fontSize: 50, color: "primary.main" }} />
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  {locale.sustainability}
                </Typography>
                <Typography variant="body2">
                  {locale.sustainabilityParagraph}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>

        {/* Company History Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
            {locale.ourJourney}
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={2}>
            {/* History Card 1 */}
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: "center" }}>
                  <AccessTimeIcon
                    sx={{ fontSize: 50, color: "primary.main" }}
                  />
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    2010
                  </Typography>
                  <Typography variant="body2">{locale.journeyOne}</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* History Card 2 */}
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: "center" }}>
                  <AccessTimeIcon
                    sx={{ fontSize: 50, color: "primary.main" }}
                  />
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    2015
                  </Typography>
                  <Typography variant="body2">
                    {locale.journeySecond}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* History Card 3 */}
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: "center" }}>
                  <AccessTimeIcon
                    sx={{ fontSize: 50, color: "primary.main" }}
                  />
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    2020
                  </Typography>
                  <Typography variant="body2">{locale.journeyThird}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>

        {/* Meet Our Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
            {locale.ourTeam}
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={2}>
            {/* Team Member 1 */}
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/140"
                  alt="Team Member"
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <PersonIcon sx={{ fontSize: 50, color: "primary.main" }} />
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    John Doe
                  </Typography>
                  <Typography variant="body2">{locale.ceoFounder}</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Team Member 2 */}
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/140"
                  alt="Team Member"
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <PersonIcon sx={{ fontSize: 50, color: "primary.main" }} />
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    Jane Smith
                  </Typography>
                  <Typography variant="body2">{locale.cto}</Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Team Member 3 */}
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://via.placeholder.com/140"
                  alt="Team Member"
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <PersonIcon sx={{ fontSize: 50, color: "primary.main" }} />
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    Alice Johnson
                  </Typography>
                  <Typography variant="body2">{locale.leadDesigner}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
            {locale.ourAchievements}
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={2}>
            {/* Achievement Card 1 */}
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: "center" }}>
                  <EmojiEventsIcon
                    sx={{ fontSize: 50, color: "primary.main" }}
                  />
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    {locale.achievements[0]}
                  </Typography>
                  <Typography variant="body2">
                    {locale.achievementsParagraph[0]}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Achievement Card 2 */}
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: "center" }}>
                  <EmojiEventsIcon
                    sx={{ fontSize: 50, color: "primary.main" }}
                  />
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    {locale.achievements[1]}
                  </Typography>
                  <Typography variant="body2">
                    {locale.achievementsParagraph[1]}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Achievement Card 3 */}
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={3}>
                <CardContent sx={{ textAlign: "center" }}>
                  <EmojiEventsIcon
                    sx={{ fontSize: 50, color: "primary.main" }}
                  />
                  <Typography variant="h6" sx={{ marginTop: 2 }}>
                    {locale.achievements[2]}
                  </Typography>
                  <Typography variant="body2">
                    {locale.achievementsParagraph[2]}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;
