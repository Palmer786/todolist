import React from "react";
import { Paper, Typography } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";

const About = () => {
  return (
    <Paper className="paper" elevation={5}>
      <div className="page-title">
        <Typography variant="h3" component="h3">
          About
        </Typography>
        <InfoIcon color="primary" fontSize="large" />
      </div>
      <Typography component="p">It's my todo app</Typography>
    </Paper>
  );
};

export default About;
