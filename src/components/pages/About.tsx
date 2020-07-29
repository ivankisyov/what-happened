import React from "react";
import { Grid, Typography } from "@material-ui/core";

export default function About() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h2 className="mb-4">Main Objective</h2>
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Record daily events, which in someway you find useful, either good or
          bad or...
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <h3 className="mb-2">Main Features:</h3>
      </Grid>
      <Grid item xs={12}>
        <ul>
          <li>record event - each event has its own timestamp</li>
          <li>each event is categorized by custom tag</li>
          <li>
            tags can be:
            <ul>
              <li>good - those are the best ones :D</li>
              <li>
                bad - those could become educational. To become such, you need
                to make a plan for it(timebox it, etc).
              </li>
              <li>lesson-learnt(more info follows...)</li>
              <li>dream tag(something you are dreaming to do)</li>
            </ul>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12}>
        <h4 className="mb-2">Does this tool looks like:</h4>
      </Grid>
      <Grid item xs={12}>
        <ul>
          <li>retro tool: yes</li>
          <li>diary or log: in a way</li>
        </ul>
      </Grid>
    </Grid>
  );
}
