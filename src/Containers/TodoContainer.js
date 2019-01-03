import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles'
import { DragSource } from 'react-dnd';
import Item from '../Component/Item'

const styles = () => ({
    margin: {
        margin: "0px",
        padding: "0px",
        float: "right"
    },
  });

class TodoContainer extends Component {
    // deleteItem = (id) => {
    //     console.log('deleting ' + id)
    // }
    // constructor(props){
    //     super(props)
    //     this.deleteItem = this.deleteItem.bind(this)
    // }
    deleteItem (i) {
        console.log('hola ' + i)
    }
        


  render() {
      const { classes, remove } = this.props
    //   const { isDragging, connectDragSource, item } = this.props;

      return (
        <div className="item">
        <ul className="ul">
    {
        this.props.list.length > 0 ?
            this.props.list.map( (todo, i) => ( 
            
                    <Item 
                        key={i} 
                        item={todo}
                        remove={remove}
                        handleDrop={(i) => this.deleteItem(i)}/>

        
            )) : null
    }
    </ul>  
      </div>
      )
   
      
  }
}

export default withStyles(styles)(TodoContainer);
