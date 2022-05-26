import React from "react";
import "./style.css";

class Cat extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="item">
        <h2>{this.props.name}</h2>
        <img src={this.props.img} alt="failed" />
      </div>
    );
  }
}

export default Cat;
