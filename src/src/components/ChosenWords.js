import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import ChosenWord from './ChosenWord';

class ChosenWords extends Component {
  
  render() {
    const { selectedWords } = this.props;

    return (
      <Droppable droppableId="chosen-words-droppable" direction="horizontal">
        { (provided) => (
          <div ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex flex-auto flex-row flex-wrap gap-y-4 justify-center sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 mt-16 h-full"
          >
            {
              selectedWords.length === 0
                ? <div className="border-double border-4 border-indigo-200 rounded-md p-3 mt-6 xl:mx-96 lg:mx-64 sm:mx-24 mx-12">
                    <p className="text-base title-font leading-relaxed text-gray-400">Please select the desired parameters from the given set including genre, theme, mood, and creative. Other Parameters require special privileges.</p>
                  </div>
                : null
          }
          {
            selectedWords.map((selectedWord, index) => {
              return <ChosenWord key={`chosen=${selectedWord}`} index={index} word={selectedWord}/>
            })
          }
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )}
}

export default ChosenWords;
