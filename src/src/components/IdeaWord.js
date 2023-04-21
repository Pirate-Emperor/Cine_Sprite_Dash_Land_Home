import React, { Component } from 'react';
import { genreData } from '../data/genreData.js';
class IdeaWord extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedsentence: "", isDragging: false, numWords: 3, categoriesCollapsed: false, categoriesExpanded: false };
  }
  getRandomWord = (genre) => {
    const categories = Object.keys(genreData);
    const randomCategory = genreData[genre];
    return randomCategory[Math.floor(Math.random() * randomCategory.length)];
  }
  render() {
    const { check, category, word, selected } = this.props;

    return (
      <span className={`inline-block
                        py-1 px-2 m-1 rounded
                        cursor-pointer
                        select-none
                        text-m font-medium tracking-widest
                        ${selected
                          ? "bg-indigo-200 text-indigo-800 hover:bg-indigo-300 hover:black"
                          : "bg-indigo-50 text-indigo-500 hover:bg-indigo-200 hover:text-indigo-800"}`}
              onClick={() => this.props.onClick(check?this.getRandomWord(word):"",word)}>
        { word }
      </span> 
    );
  }
}

export default IdeaWord;
