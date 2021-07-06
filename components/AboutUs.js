import React from "react";
import { Typography } from "@material-ui/core";

import {
  Smartphone,
  WhatsApp,
  Email,
  LinkedIn,
  Link,
} from "@material-ui/icons";

import styles from "../styles/CustomStyles";

const AboutUs = () => {
  const classes = styles();
  return (
    <div className="about-section">
      <Typography variant="h2" color="primary" className={classes.sectionTitle}>
        Contact Us
      </Typography>
      <div className="profiles">
        <div className="profile tutor">
          <div className="profile-picture"></div>
          <div className="info">
            <p className="desc">Tutor:</p>
            <p className="name">Shiva Kumar Yadav</p>
            <p className="qualification">
              B.Tech <span>(Computer Science)</span>
            </p>
            <p className="status">
              8+ years of experience as Teacher for Secondary Education
            </p>
            <div className="contact">
              <p className="phone">
                <a href="tel:+919618074734">
                  <Smartphone /> +91-9618074734
                </a>
              </p>
              <p className="whatsapp">
                <WhatsApp /> +91-9618074734
              </p>
              <p className="email">
                <a href="mailto:shiva.palla@gmail.com">
                  <Email /> shiva.palla@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="profile developer">
          <div className="profile-picture"></div>
          <div className="info">
            <p className="desc">Website by:</p>
            <p className="name">Sudeep Pirangi</p>
            <p className="qualification">
              M.Tech <span>(Software Engineering)</span>
            </p>
            <p className="status">Full-Stack Web Developer</p>
            <div className="contact">
              <p className="phone">
                <a href="tel:+919959704570">
                  <Smartphone /> +91-9959704570
                </a>
              </p>
              <p className="whatsapp">
                <WhatsApp /> +91-9959704570
              </p>
              <p className="email">
                <a href="mailto:sudeep_edu@yahoo.com">
                  <Email /> sudeep_edu@yahoo.com
                </a>
              </p>
              <p className="linkedIn">
                <a
                  href="https://www.linkedin.com/in/sudeepp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn /> https://www.linkedin.com/in/sudeepp/
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
