import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const CustomStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px",
    borderTop: "1px solid #000",
    fontSize: "1.2rem",
    color: "#000",
    background: "#fff",
  },
}));

const Footer = () => {
  const styles = CustomStyles();
  return (
    <footer>
      <div className={styles.footer}>
        &copy; Copyright 2021, Developed by&nbsp;
        <a
          href="https://www.linkedin.com/in/sudeepp/"
          target="_blank"
          rel="noreferrer"
        >
          Sudeep Pirangi
        </a>
      </div>
    </footer>
  );
};

export default Footer;
