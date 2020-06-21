import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./img/0.jpg"
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import { randomWord } from './words'

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
    this.handleGuess = this.handleGuess.bind(this);
  }

  getInitialState = () =>{
    return { nWrong: 0, guessed: new Set(), answer: randomWord() };
  }

  reset = () => (
    this.setState(this.getInitialState())
  )

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
        key={ltr}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {

    let pok = this.guessedWord().join("") === this.state.answer && <p>AMAZING! You win!</p>
    let lose = this.state.nWrong < this.props.maxWrong ? 
      <p className='Hangman-btns'>{this.generateButtons()}</p> :
      <p>You are hanged! You loose. The right word was: {this.state.answer}</p>
    
      return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={this.state.nWrong + " misses..."}/>
        {pok}
        <p className="Hangman-wrong">Number of wrong guesses: {this.state.nWrong}</p>
        <p className='Hangman-word'>{this.guessedWord()}</p>
        {lose}
        <button onClick={this.reset} className="reset_button">Reset game</button>
      </div>
    );
  }
}

export default Hangman;
