import React, { Component } from "react";
import Main from "./Main";
import Middle from "./Middle";
import State from "./State";
import UseState from "./UseState";
import Counter from "./Counter";
import Ternary from "./Ternary";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <State />
        <Ternary />
        <Counter />
        <Middle />
        <Main />
        <UseState />
      </div>
    );
  }
}
