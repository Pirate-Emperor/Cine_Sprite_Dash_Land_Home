import React, { Component } from 'react';

class Tooltip extends Component {

  constructor(props) {
    super(props);
    this.state = { active: false, timeout: 0 };
  }

  show = () => {
    const timeout = setTimeout(() => {
      this.setState({ active: true });
    }, this.props.delay || 400);

    this.setState({ timeout: timeout});
  }

  hide = () => {
    clearInterval(this.state.timeout);
    this.setState({ active: false });
  }

  render() {
    return (
      <div
        className="flex align-middle text-center"
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
      >
        {this.props.children}
        
        {this.state.active && (
          <div className={`absolute rounded-md left-1/2 p-1 m-3 w-64 bg-indigo-200 zIndex-10 transform 
              ${this.props.direction === "top" ? "top-10" : 
                this.props.direction === "bottom" ? "bottom-10" :
                this.props.direction === "left" ? "top-1/2 right-10" :
                this.props.direction === "right" ? "translate-y-8 -translate-x-36 sm:translate-y-1/2 sm:-translate-x-1/2" : ""}`}>
            {this.props.content}
          </div>
        )}

      </div>
    );
  }
}

export default Tooltip;
