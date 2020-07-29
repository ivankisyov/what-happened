import React from "react";
import Profile from "./components/pages/Profile";
import Navbar from "./components/layout/Navbar";
import SignIn from "./components/pages/SignIn";
import UserProvider from "./providers/user-provider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import PasswordReset from "./components/pages/PasswordReset";
import NoMatch from "./components/pages/NoMatch";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import { Container } from "@material-ui/core";
import EventForm from "./components/EventForm";
import StickyFooter from "./components/layout/StickyFooter";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <UserProvider>
        <Router>
          <Navbar />
          <Container component="main" maxWidth="md" className="pt-5">
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/add-event">
                <EventForm />
              </Route>
              <Route path="/sign-up">
                <SignUp />
              </Route>
              <Route path="/password-reset">
                <PasswordReset />
              </Route>
              <Route exact path="/">
                <SignIn />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </Container>
          <StickyFooter />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
