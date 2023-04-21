
import React, { Component } from 'react';

class ChooseRandomWordsButton extends Component {

  render() {
    const { numWords } = this.props;

    return (
      <button className="flex flex-auto mx-1
                         text-white bg-indigo-400
                         border-0 py-2 px-8
                         focus:outline-none hover:bg-indigo-500
                         rounded text-m
                         inline-flex items-center justify-center" onClick={this.props.onClick}>
          <p className="text-xl pl-4 pr-3 text-indigo-100">{`Generate ( Scale Factor: `}{numWords}{`)`}  </p>  
      </button>
    );
  }
}

export default ChooseRandomWordsButton;
