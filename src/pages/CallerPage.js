import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(5),
  },
  buttons: {
    margin: theme.spacing(5, 1.5),
  },
}));

const CallerPage = () => {
  const classes = useStyles();

  return (
    <Box component="div" textAlign="center" className={classes.wrapper}>
      <Typography variant="h2">Caller Page</Typography>
      <Button variant="contained" className={classes.buttons}>
        Call
      </Button>
      <Button variant="contained" className={classes.buttons}>
        Hang up
      </Button>
    </Box>
  );
};

export default CallerPage;
