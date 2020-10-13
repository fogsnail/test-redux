import React, { Component } from "react";
import "./App.css";
import Box from "./components/Box";
import { connect } from "react-redux";

class App extends React.Component {
  chekcSize = (size) => {
    if (size == 80) return "Max size";
    else if (size == 30) return "Min size";
    else return size + " px";
  };
  render() {
    var { size } = this.props;
    return (
      <div className="App">
        <div className="box">
          <Box />
          <p> Font size : {this.chekcSize(size)}</p>
        </div>

        <div className="title">
          <p style={{ fontSize: `${this.props.size}px` }}>Fabbi</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    size: state.changeStyle.size,
  };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(App);
