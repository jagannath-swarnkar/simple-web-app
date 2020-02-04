import React from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Button, TextField } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  appBar: {
    height: "70px",
    background: "coral",
    paddingTop: "3px",
    minWidth: "max-content"
  },
  fullHeader: {
    display: "flex",
    padding: 5
  },
  leftHeader: {
    flexGrow: 1,
    display: "flex",
    fontSize: "30px",
    marginRight: "70px"
  },
  rightHeader: {
    flexGrow: 1,
    display: "flex",
    marginLeft: "70px"
  },
  userName: {
    flexGrow: 4,
    fontWeight: "bold",
    alignSelf: "center",
    marginLeft: "5px"
  },
  Input1: {
    flexGrow: 6
  },
  input2: {
    flexGrow: 6
  },
  logout: {
    flexGrow: 4,
    fontSize: 20,
    alignSelf: "center"
  },
  button: {
    float: "right",
    marginRight: "10px",
    background: "royalblue",
    color: "white",
    fontWeight: "bold"
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");

  const onChangeHandler1 = e => {
    setInput1(e.target.value);
    props.input1(e.target.value);
  };
  const onChangeHandler2 = e => {
    setInput2(e.target.value);
    props.input2(e.target.value);
  };

  const logoutHandler = () => {
    reactLocalStorage.remove("token");
    window.location = "http://localhost:3000/login";
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <div className={classes.fullHeader}>
          <div className={classes.leftHeader}>
            <div className={classes.userName}>{props.username}</div>
            <div className={classes.Input1}>
              <TextField
                id="input_1"
                fullWidth
                label="Text input one"
                variant="outlined"
                value={input1}
                onChange={onChangeHandler1}
              />
            </div>
          </div>
          <div className={classes.rightHeader}>
            <div className={classes.input2}>
              <TextField
                id="input_2"
                fullWidth
                label="Text input Two"
                variant="outlined"
                value={input2}
                onChange={onChangeHandler2}
              />
            </div>
            <div className={classes.logout}>
              <Button className={classes.button} onClick={logoutHandler}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
}
