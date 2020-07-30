import React, { useState, useEffect } from "react";
import Event from "./Event";
import { eventsRef } from "../firebase";
import { IEvent } from "../models/event.interface";
import { Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";

function EventsList() {
  const [events, setEvents] = useState<Array<IEvent>>([]);
  useEffect(() => {
    eventsRef.onSnapshot(function (querySnapshot) {
      const events: Array<IEvent> = [];
      querySnapshot.forEach(function (doc) {
        // @ts-ignore
        events.push({ ...doc.data(), id: doc.id });
      });
      setEvents(events);
    });
  }, []);
  return events.length === 0 ? (
    <Alert severity="info">
      No events yet, <Link to="/add-event">let's go</Link> and create your first
      one!
    </Alert>
  ) : (
    <Grid container spacing={3} justify="center" alignItems="stretch">
      {events.map((event) => (
        <Grid item container xs={12} sm={6} lg={4} key={event.id}>
          <Event event={event} />
        </Grid>
      ))}
    </Grid>
  );
}

export default EventsList;
