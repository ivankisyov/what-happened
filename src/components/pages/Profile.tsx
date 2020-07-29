import React, { useContext } from "react";
import { UserContext } from "../../providers/user-provider";
import Loading from "../Loading";
import MailIcon from "@material-ui/icons/Mail";

import {
  makeStyles,
  Theme,
  createStyles,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      width: "100%",
    },
    list: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const Profile = () => {
  const classes = useStyles();
  const user = useContext(UserContext);

  return user ? (
    <div className="align-items-center d-flex flex-column">
      <h2 className="mb-4 text-center">Personal information:</h2>
      <Card className={classes.root} variant="outlined">
        <CardHeader title={user.displayName} />
        <CardContent>
          <List className={classes.list}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <MailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="E-mail" secondary={user.email} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  ) : (
    <Loading />
  );
};
export default Profile;
