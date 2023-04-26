import React, { Component, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import ChosenWords from './components/ChosenWords';
import RemoveWordArea from './components/RemoveWordArea';
import ChangeNumWordsButton from './components/ChangeNumWordsButton';
import ChooseRandomWordsButton from './components/ChooseRandomWordsButton';
import Category from './components/Category';
import { wordsData } from './data/wordsData.js';
import './App.css';
import {db} from "../Firebase.js"
import { collection, getDocs, addDoc } from "firebase/firestore"; 

class Appy extends Component {
  

  constructor(props) {
    super(props);
    this.state = { selectedWords: [], displayedWords: [], wordSelected: [], isgenre:false, isDragging: false, numWords: 1, categoriesCollapsed: false, categoriesExpanded: false };
  }

  changeNumWords = (diff) => {
    var totalNumWords = 0;
    Object.keys(wordsData).forEach(category => totalNumWords = totalNumWords + wordsData[category].length);

    if ((this.state.numWords === 1 && diff < 0)
        || (this.state.numWords === totalNumWords && diff > 0)
        || (this.state.numWords === 10 && diff > 0)) {
      return;
    }

    const newNumWords = this.state.numWords + diff;
    this.setState({ numWords: newNumWords });
  }

  getRandomWord = () => {
    const categories = Object.keys(wordsData);
    const randomCategory = wordsData[categories[Math.floor(Math.random() * categories.length)]]
    return randomCategory[Math.floor(Math.random() * randomCategory.length)];
  }

  chooseRandomWords = () => {
    var chosenWords = [];

    while (chosenWords.length < this.state.numWords) {
      const randomWord = this.getRandomWord();
      if (!chosenWords.includes(randomWord)) {
        chosenWords.push(randomWord);
      }
    }

    this.setState({ selectedWords: chosenWords });
  }

  displayWords = () => {
    this.setState({ displayedWords: this.state.selectedWords });
  }

  clearWords = () => {
    this.setState({ selectedWords: [] });
    this.setState({ displayedWords: [] });
    this.setState({ wordSelected: [] });
  }

  collapseCategories = () => {
    this.setState({ categoriesCollapsed: true }, () => { this.setState({ categoriesCollapsed: false })});
  }

  expandCategories = () => {
    this.setState({ categoriesExpanded: true }, () => { this.setState({ categoriesExpanded: false })});
  }

  onClickWord = (word,type) => {
    if (this.state.wordSelected.includes(type)) {
      // remove type
      const newWordSelected = this.state.wordSelected.filter((selectedWord) => selectedWord !== type);
      this.setState({ wordSelected: newWordSelected });
    } else {
      // add type
      var newWordSelected = Array.from(this.state.wordSelected);
      newWordSelected.push(type);
      this.setState({ wordSelected: newWordSelected });
    }
    if (this.state.selectedWords.includes(word)) {
      // remove word
      const newSelectedWords = this.state.selectedWords.filter((selectedWord) => selectedWord !== word);
      this.setState({ selectedWords: newSelectedWords });
    } else {
      // add word
      var newSelectedWords = Array.from(this.state.selectedWords);
      newSelectedWords.push(word);
      this.setState({ selectedWords: newSelectedWords });
    }
  }

  onDragStart = () => {
    this.setState({ isDragging: true });
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === 'delete-area') {
      // delete word
      const newSelectedWords = Array.from(this.state.selectedWords);
      newSelectedWords.splice(source.index, 1);
      this.setState({ selectedWords: newSelectedWords, isDragging: false });
      return;
    }

    if (destination.droppablId === source.droppablId && destination.index === source.index) {
      // no change
      this.setState({ isDragging: false });
      return;
    }

    const newSelectedWords = Array.from(this.state.selectedWords);
    // remove 1 at source index
    newSelectedWords.splice(source.index, 1);
    // add dragged word at destination index
    newSelectedWords.splice(destination.index, 0, draggableId);

    this.setState({ selectedWords: newSelectedWords, isDragging: false });
  }

  render() {
    const addTodo = async (e) => {
      e.preventDefault();  
     
      try {
          const docRef = await addDoc(collection(db, "parameters"), {
            param: "God of War",    
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", );
        }
  }
    return (
      <div className="App">
        <div className="h-full p-8">
        </div>
        <section className="text-gray-600 body-font">
          <div className="container md:px-32 sm:px-10 px-2 pb-24 mx-auto">
            <div className="text-center mb-5">
              <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd} >
                <ChosenWords selectedWords={this.state.displayedWords} />
                <RemoveWordArea isDragging={this.state.isDragging}/>
              </DragDropContext>
              <div className="flex flex-row flex-auto space-around align-center justify-center">
                <div>
                  <div className="flex flex-auto flex-row content-center">
                    <ChangeNumWordsButton diff={-1} changeNumWords={this.changeNumWords}/>
                    <ChooseRandomWordsButton numWords={this.state.numWords} onClick={this.displayWords}/>
                    <ChangeNumWordsButton diff={1} changeNumWords={this.changeNumWords}/>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center content-center text-base text-center leading-relaxed text-gray-400 pt-4">
                <button className="flex flex-row border border-indigo-100 rounded-xl p-1 select-none focus:outline-none hover:bg-indigo-50" onClick={this.clearWords}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pl-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <p className="px-2">Clear</p>
                </button>
              </div>
              <div className="border-double border-4 border-indigo-200 rounded-md p-3 mt-6 xl:mx-96 lg:mx-64 sm:mx-24 mx-12">
                <p className="">Choose the desired set of parameters</p>
              </div>
            </div>
            <div className="flex flex-row justify-center content-center text-base leading-relaxed text-gray-400">
              <button className="flex flex-row border border-indigo-100 rounded-xl p-1 select-none focus:outline-none hover:bg-indigo-50 px-2 mx-2" onClick={this.collapseCategories}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <p className="px-2">Collapse all</p>
              </button>
              <button className="flex flex-row border border-indigo-100 rounded-xl p-1 select-none focus:outline-none hover:bg-indigo-50 px-2 mx-2" onClick={this.expandCategories}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <p className="px-2">Expand all</p>
              </button>
            </div>
            <div className="container flex flex-wrap m-4 mx-auto text-center items-left justify-left">
              { 
                Object.keys(wordsData).map((category) => {
                  return <Category key={`category-${category}`} check={category==='genre'?true:false} category={category} words={wordsData[category]}
                                   onClickWord={this.onClickWord} selectedWords={this.state.selectedWords} wordSelected={this.state.wordSelected}
                                   collapse={this.state.categoriesCollapsed} expand={this.state.categoriesExpanded} />
                }) 
              }
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Appy;
