import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
import img1 from '../Images/Portfolio.jpeg';
import img2 from '../Images/Athenaeum.jpeg';

function About() {
  return (
    <Grid container>
      <Card sx={{ minWidth: 1 }}>
        <img src="" />
        <CardContent>
          <Typography
            align="center"
            gutterBottom
            variant="h4"
            component="div"
            color="#F2735B"
          >
            Hello, I'm Alexandra Cruz.
          </Typography>
          <Typography align="center" variant="body2" color="text.secondary">
            A research-focused Full-Stack Software Developer with a background
            in Computer Software Engineering. My passion for software
            engineering led me to become an analytical web developer and an
            attentive learner. I love working alone as well as being part of a
            team. Patience and a natural curiosity is what I bring to a
            progressive environment.
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 1 }}>
        <img src="" />
        <CardContent>
          <Typography
            align="center"
            gutterBottom
            variant="h5"
            component="div"
            color="#F2735B"
          >
            Skills
          </Typography>
          <Typography
            align="center"
            gutterBottom
            variant="body1"
            component="div"
            color="text.secondary"
          >
            Full-Stack Development
          </Typography>
          <Typography align="center" variant="body2" color="text.secondary">
            AJAX | CSS | Express.js | Git | Github | HTML | JavaScript | jQuery
            | JSON | MongoDB | Node.js | React.js | SQL
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ minWidth: 1 }}>
        <CardContent>
          <Typography
            align="center"
            gutterBottom
            variant="h5"
            component="div"
            color="#F2735B"
          >
            Projects
          </Typography>
        </CardContent>
      </Card>

      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 1 }}>
        <img src={img1}/>
        <CardActionArea href="https://alexandracrvz.github.io/Portfolio/">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#56B77E">
              Portfolio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              3 weeks after learning to code I created a personal portfolio. 
              The portfolio is a website showcasing myself, skills, 
              and contact information as a Software Engineer much like this one. 
              I had no other projects at the time, so I left images as placeholders. 
              My skills were updated as I gained new ones.
              Anyone visiting my portfolio website is able to interact with 
              my content and get familiar with who I am as well as the skills, and 
              ideas I have to bring to the table as a developer.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 1 }}>
        <img src={img2}/>
        <CardActionArea href="https://alexandracrvz.github.io/film_app/">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="#56B77E">
              Athenaeum
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Beta 1: This Film App called "Athenaeum" allows users to search 
            for a film then be provided with the film's title, poster, genre, and 
            synopsis by fetching the information from the OMDb API. <br />Beta 2 (Under Construction): The 
            goal will be to allow the user to add their favorite films to a list 
            by clicking the "Add to Favorites" button. This App will be useful for 
            film lovers with a desire to be able to easily access a library of films 
            that they love.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
    </Grid>
    </Grid>
  );
}

export default About;
