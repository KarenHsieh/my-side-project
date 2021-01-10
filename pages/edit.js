import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { CssBaseline, Container, TextField, MenuItem } from "@material-ui/core";
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    //flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const editForm = () => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <form noValidate autoComplete="off">
          <div className={classes.root}>
            <div>
              <TextField
                className={classes.textField}
                id="filled-basic"
                label="Filled"
                variant="filled"
              />

              <TextField
                className={classes.textField}
                id="filled-select-currency"
                select
                label="Select"
                value={currency}
                onChange={handleChange}
                helperText="Please select your currency"
                variant="filled"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
        </form>
      </Container>
    </React.Fragment>
  );
};
export default editForm;
