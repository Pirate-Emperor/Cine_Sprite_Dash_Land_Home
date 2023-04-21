
import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

class ChosenWord extends Component {

  render() {
    const { word, index } = this.props;

    return (
      <Draggable draggableId={word} index={index}>
        {(provided, snapshot) => (
          <div {...provided.draggableProps}
               {...provided.dragHandleProps}
               ref={provided.innerRef}
          >
            <span id={word}
                  className={`inline-block
                              cursor-move
                              select-none
                              py-1 px-2 mx-2 rounded
                              text-2xl font-medium tracking-widest transition-none
                              ${ snapshot.draggingOver === 'delete-area'
                                ? 'bg-red-300 text-red-800'
                                : snapshot.isDragging
                                  ? 'bg-indigo-300 text-indigo-800'
                                  : 'bg-indigo-50 text-indigo-500' }`}>
              { word }
            </span>
          </div>
        )}
      </Draggable>
    );
  }
}

export default ChosenWord;
