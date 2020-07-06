import React, { Component } from "react";
import MainChart from "./MainChart";
import SecondSlide from './components/SecondSlide'
import css from "./components/App.module.css"

class App extends Component {
  state = { slide: true };

  changeSlide() {
    this.setState({
      slide: !this.state.slide,
    });
  }
  render() {
    const {slide} = this.state;
    return (
      <>
        <button onClick={() => this.changeSlide()} className={css.btn}>Смена страници</button>
        {slide ? <MainChart /> : <SecondSlide />}
      </>
    );
  }
}

export default App;
