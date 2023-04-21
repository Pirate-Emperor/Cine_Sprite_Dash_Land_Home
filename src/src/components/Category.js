import React, { Component } from 'react';
import IdeaWord from './IdeaWord';

class Category extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.collapse === false && this.props.collapse === true) {
      this.setState({ isOpen: false });
    }

    if (prevProps.expand === false && this.props.expand === true) {
      this.setState({ isOpen: true });
    }

    if (prevProps.selectedWords !== this.props.selectedWords) {
      if (this.props.words.some(word => this.props.selectedWords.includes(word))) {
        this.setState({ isOpen: true });
      }
    }
  }

  handleArrowClick = () => {
    const isOpen = this.state.isOpen;
    this.setState({ isOpen: !isOpen });
  }
  
  render() {
    const { check, category, words } = this.props;
    const arrow = this.state.isOpen 
      ? (<svg arias-hidden="true" data-reactid="281" fill="none" height="24" stroke="rgb(79, 70, 229)" strokeLinecap="round" 
              strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
         <polyline points="18 15 12 9 6 15"></polyline>
        </svg>)
      : (<svg arias-hidden="true" data-reactid="266" fill="none" height="24" stroke="rgb(79, 70, 229)" strokeLinecap="round" 
              strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>);

    const hasWords = words.some(word => this.props.selectedWords.includes(word));

    return (
      <div className="p-2 lg:w-1/4 sm:w-1/2 w-full">
        <div className={`border border-indigo-50 rounded-xl p-2 mb-2 flex flex-auto flex-row justify-between rounded-md ${hasWords ? "bg-indigo-50 text-indigo-600 " : ""}`}>
          <h2 className="font-medium title-font select-none tracking-widest m-2 text-sm text-center sm:text-left uppercase">
            { category }
          </h2>
          <div className="rounded-full w-7 h-7 m-2 my-auto float-right flex items-center justify-center bg-indigo-50 cursor-pointer"
               onClick={this.handleArrowClick}>
            { arrow }
          </div>
        </div>
        { this.state.isOpen
            ? <div className="flex flex-auto flex-wrap sm:items-start sm:text-left text-center items-center -mb-1">
                {
                  words.map((word) => {
                    return <IdeaWord check={check} category={category} key={`word-${word}`} word={word} onClick={this.props.onClickWord} selected={this.props.wordSelected.includes(word)}/>
                  })
                }
              </div>
            : null
        }
      </div>
    );
  }
}

export default Category;
