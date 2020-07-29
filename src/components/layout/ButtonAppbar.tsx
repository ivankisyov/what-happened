import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: theme.typography.pxToRem(20),
    },
  })
);

interface IButtonAppBarProps {
  toggleDrawer: (
    anchor: "left",
    open: boolean
  ) => (
    event: React.KeyboardEvent<Element> | React.MouseEvent<Element, MouseEvent>
  ) => void;
}

export default function ButtonAppBar(props: IButtonAppBarProps) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={props.toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h1" className={classes.title}>
            What Happened
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              auth.signOut();
              history.push("/");
            }}
          >
            Sign out
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
