import React from "react";
import Typography from "@material-ui/core/Typography";

import styles from "../styles/CustomStyles";

const Vision = () => {
  const classes = styles();
  return (
    <div id="vision">
      <Typography variant="h2" color="primary" className={classes.sectionTitle}>
        Vision
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        className={classes.sectionDescription}
        style={{
          marginBottom: "30px",
        }}
      >
        Our Vision is to provide a personalised care to students outside their
        school hours right from their homes. We leverage the digital methods of
        teaching by connecting with students online and focus on improving their
        abilities from their comfort zone. This not only serves our clients from
        overseas but also domestic. Not to ignore, we also operate offline with
        students at our own premises everyday.
      </Typography>
      <Typography variant="h2" color="primary" className={classes.sectionTitle}>
        Experience
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        className={classes.sectionDescription}
      >
        We have experience teaching multiple grades and multiple syllabus. We
        have been teaching students from <span className="primary">SSC</span>,{" "}
        <span className="primary">CBSE</span> &amp;{" "}
        <span className="primary">ICSE</span> from over 5 years now. We are also
        associated with students from overseas in the form of online tutions.
      </Typography>
    </div>
  );
};

export default Vision;
