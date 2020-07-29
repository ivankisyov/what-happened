import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: fade(theme.palette.primary.dark, 0.9),
      top: 0,
      left: 0,
    },
  })
);

export default function Loading() {
  const classes = useStyles();
  return (
    <div
      className={`${classes.root} d-flex position-fixed justify-content-center align-items-center w-100 h-100`}
    >
      <CircularProgress color="secondary" />
    </div>
  );
}
