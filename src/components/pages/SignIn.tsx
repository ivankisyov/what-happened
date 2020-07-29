import React, { useState, ChangeEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { auth, signInWithGoogle } from "../../firebase";
import {
  makeStyles,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const signInWithEmailAndPasswordHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    email: string,
    password: string
  ) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/home");
      })
      .catch((error) => {
        setError("Error signing in with password and email!");
        console.error("Error signing in with password and email", error);
      });
  };

  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setError(null);
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    }
  };

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" className="mb-3">
        Sign in
      </Typography>
      <div>
        {error !== null && <Alert severity="error">{error}</Alert>}
        <form>
          <TextField
            type="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userEmail"
            label="Email Address"
            name="userEmail"
            autoComplete="email"
            autoFocus
            onChange={(event) => onChangeHandler(event)}
          />

          <TextField
            type="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userPassword"
            label="Password"
            name="userPassword"
            autoComplete="current-password"
            onChange={(event) => onChangeHandler(event)}
          />
          <div className="d-flex justify-content-center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mt-4 mb-4"
              onClick={(event) => {
                signInWithEmailAndPasswordHandler(event, email, password);
              }}
            >
              Sign In
            </Button>
          </div>
        </form>
        <Typography className="text-center d-none">or</Typography>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          className="mt-4 mb-4 d-none"
          onClick={() => {
            signInWithGoogle();
          }}
        >
          Sign in with Google
        </Button>

        <Grid
          container
          direction="column"
          alignItems="center"
          className="d-none"
        >
          <Grid item>
            <Link to="password-reset">
              <Typography>Forgot Password?</Typography>
            </Link>
          </Grid>
          <Grid item>
            <Typography>
              Don't have an account? <Link to="sign-up">Sign up here</Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SignIn;
