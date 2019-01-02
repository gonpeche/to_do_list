import React, { Component } from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
// import s from './Input.css'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "90%",
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class InputContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div>
    
          <form onSubmit={(e) => this.props.handleSubmit(e)} className={classes.container} noValidate autoComplete="off">
            <TextField
            id="standard-name"
            label="To do"
            className={classes.textField}
            value={this.props.input}
            onChange={(e) => this.props.handleChange(e)}
            margin="normal"
          />

          </form>

        </div>
    )
  }
}

export default withStyles(styles)(InputContainer);