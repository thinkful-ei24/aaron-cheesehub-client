import React, { Component } from "react";
import "./App.css";
import CheeseList from "./components/cheese-list";
import { connect } from "react-redux";
import { getCheeseAction } from './actions/cheese';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getCheeseAction())
  }

  render() {

    return (
      <div>
        <CheeseList cheeses={this.props.cheeses} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
