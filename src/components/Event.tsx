import * as React from "react";
import { IEvent } from "../models/event.interface";
import {
  makeStyles,
  createStyles,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
  Theme,
} from "@material-ui/core";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EditIcon from "@material-ui/icons/Edit";
import { blue } from "@material-ui/core/colors";
import { Tags } from "../enums/tags.enum";
import DateBox from "./DateBox";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import EventForm from "./EventForm";

export interface IEventProps {
  event: IEvent;
}

type tagColors =
  | "inherit"
  | "disabled"
  | "action"
  | "primary"
  | "secondary"
  | "error"
  | undefined;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    tagIcon: {
      color: blue[500],
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export default function Event({ event }: IEventProps) {
  const classes = useStyles();

  function setTagColor(): tagColors {
    let color: tagColors;
    if (event.tag === Tags.BAD) {
      color = "error";
    } else {
      color = "primary";
    }
    return color;
  }

  const [isModalOpened, setModalOpened] = React.useState(false);

  const handleModalOpen = () => {
    setModalOpened(true);
  };

  const handleModalClose = () => {
    setModalOpened(false);
  };

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardHeader
          title={event.title}
          subheader={<DateBox date={event.creationDate} />}
        />
        <CardContent className="flex-grow-1 d-flex flex-column">
          <Typography className="mb-3 flex-grow-1">
            {event.description}
          </Typography>
          <Divider />
        </CardContent>
        <CardActions>
          <div className="d-flex flex-grow-1">
            <LocalOfferIcon
              fontSize="small"
              color={setTagColor()}
              className="mr-1"
            />
            <Typography color="textPrimary" variant="body2">
              {event.tag}
            </Typography>
          </div>
          <Button size="small" onClick={(e) => handleModalOpen()}>
            <EditIcon color="primary" />
          </Button>
        </CardActions>
      </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={isModalOpened}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpened}>
          <div className={classes.paper}>
            <EventForm editMode event={event} closeModal={handleModalClose} />
          </div>
        </Fade>
      </Modal>
    </>
  );
}
