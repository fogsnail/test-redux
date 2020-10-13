import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actChangeSize} from '../actions/index'
class App extends React.Component {
    onChange = (event) => {
        this.props.changeSize(event.target.value);
    }
  render() {
    var {size} = this.props
    return (
      <div >
          <label style={{marginRight:'20px'}}>Change Size:</label>
          <input className="input" type="number" value={size || ''} onChange = { (event)=> {this.onChange(event)}}></input>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        size: state.changeStyle.size,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeSize: (size) => {
            dispatch(actChangeSize(size))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
