import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { eventsRef } from "../firebase";
import { Button, InputLabel, FormControl, Grid } from "@material-ui/core";
import { IEvent } from "../models/event.interface";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Tags } from "../enums/tags.enum";
import { useHistory } from "react-router-dom";
import { setCreationDate } from "../services/date.service";

function EventForm(props: {
  editMode?: boolean;
  event?: IEvent;
  closeModal?: () => void;
}) {
  const history = useHistory();
  const [title, setTitle] = useState(props.event ? props.event.title : "");
  const [tag, setTag] = useState(props.event ? props.event.tag : "");
  const [description, setDescription] = useState(
    props.event ? props.event.description : ""
  );

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTag(event.target.value as string);
  };

  const createEvent = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const event: IEvent = {
      title,
      description,
      tag,
      creationDate: setCreationDate(),
    };
    eventsRef.add(event);
    setTitle("");
    setTag("");
    setDescription("");
    history.push("/home");
  };

  const updateEvent = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const event: IEvent = {
      title,
      description,
      tag,
    };
    if (props.event) {
      eventsRef.doc(props.event.id).set({ ...props.event, ...event });
    }
    setTitle("");
    setTag("");
    setDescription("");
    if (props.closeModal) {
      props.closeModal();
    }
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    props.editMode ? updateEvent(e) : createEvent(e);
  };
  return (
    <>
      <h2 className="mb-4 text-center">
        {props.editMode ? "Update event:" : "Add new event:"}
      </h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              className="mb-2 w-100"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              label="Title"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className="mb-2 w-100"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              label="Description"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl className="w-50">
              <InputLabel id="tag-label">Tag</InputLabel>
              <Select
                labelId="tag-label"
                label="Tag"
                value={tag}
                onChange={handleChange}
              >
                <MenuItem value={Tags.GOOD}>{Tags.GOOD}</MenuItem>
                <MenuItem value={Tags.BAD}>{Tags.BAD}</MenuItem>
                <MenuItem value={Tags.LESSON_LEARNT}>
                  {Tags.LESSON_LEARNT}
                </MenuItem>
                <MenuItem value={Tags.DREAM}>{Tags.DREAM}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mt-4"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}
export default EventForm;
