import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import styles from "../styles/CustomStyles";

const useStyles = makeStyles({
  root: {
    maxWidth: "25%",
    boxShadow: "0 8px 5px 5px rgba(255,255,255,0.2)",
  },
  media: {
    height: 140,
  },
});

function Expertise() {
  const classes = styles();
  const subjects = [
    {
      id: 1,
      subject: "Mathematics",
      image: "/giovanni.jpg",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      id: 2,
      subject: "Physics",
      image: "/giovanni.jpg",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
    {
      id: 3,
      subject: "Biology",
      image: "/giovanni.jpg",
      desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
  ];

  return (
    <>
      <Typography variant="h2" color="primary" className={classes.sectionTitle}>
        Expertise
      </Typography>
      <div className="flex-row-evenly cards-section">
        {subjects.map((subject) => {
          return <MediaCard {...subject} />;
        })}
      </div>
    </>
  );
}

function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.subject}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.subject}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}

export default Expertise;
