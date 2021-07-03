import React from "react";
import { Typography, Button } from "@material-ui/core";
import { Phone } from "@material-ui/icons";

const Hero = () => {
  return (
    <div className="heroSection">
      <Typography variant="h3" component="h1" color="primary">
        Shiva Tutorials
      </Typography>
      <Typography variant="h4" component="h2" color="secondary">
        Home Tutions are now online
      </Typography>
      <div style={{ margin: "4rem 0" }}>
        <Button href="tel:+919618074734" variant="contained" color="primary">
          <Phone />
          &nbsp; Schedule a Demo
        </Button>
      </div>
      <Typography component="body1" color="secondary">
        Have questions? <a href="tel:+919618074734">Contact Us</a>
      </Typography>
    </div>
  );
};

export default Hero;
