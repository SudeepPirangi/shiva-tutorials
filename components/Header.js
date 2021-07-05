import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: "2rem",
    fontFamily: "Akaya Kanadaka",
  },
  fullTransparent: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  partialTransparent: {
    backgroundColor: "#0000008a",
    backdropFilter: "blur(3px)",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
  });

  return (
    <AppBar
      className={trigger ? classes.partialTransparent : classes.fullTransparent}
      position="sticky"
    >
      <Toolbar>
        {/* <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h5" color="primary" className={classes.title}>
          Shiva Tutorials
        </Typography>
        <Button color="secondary">Subjects</Button>
        <Button color="secondary">About Us</Button>
        <Button color="secondary">Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
