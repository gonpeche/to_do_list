import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles'


const styles = () => ({
    margin: {
        margin: "0px",
        padding: "0px",
        float: "right"
    },
  });

class TodoContainer extends Component {

  render() {
      const { classes, remove } = this.props
    return (
        <React.Fragment>
        <ul className="ul">
        {
            this.props.list.length > 0 ?
                this.props.list.map( function(todo, i) { 
                    return (
                        <li key={i}>{i + 1}-{todo}
                        <IconButton aria-label="Delete" className={classes.margin}>
                                <DeleteIcon fontSize="small" onClick={() => remove(i)}/>
                        </IconButton>
                        </li>
                    )
                }) : null
        }
        </ul>        
        </React.Fragment>
    )
  }
}

export default withStyles(styles)(TodoContainer)