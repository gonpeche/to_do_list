import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles'
import { DragSource } from 'react-dnd';

const itemSource = {
    beginDrag(props) {
        let obj = {
            item: props.list
        }
     
        return obj;
    },
    endDrag(props, monitor, component) {
        return props.handleDrop('1')
    }
}


function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    }
}

class Item extends Component {
    
  render() {
      const { key, item, connectDragSource, classes, remove } = this.props

      return connectDragSource(
              <div >
                <li key={key}>{item}
                    <IconButton aria-label="Delete" className="remove">
                            <DeleteIcon fontSize="small" onClick={() => remove(key)}/>
                    </IconButton>
                </li>
              </div>
      )
  }
}


export default DragSource('item', itemSource, collect)(Item);