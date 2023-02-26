// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {LettersCount: 0}

  LETTERCOUNTER = event => {
    this.setState({
      LettersCount: event.target.value.length,
    })
  }

  render() {
    const {LettersCount} = this.state

    return (
      <div className="bg-container">
        <div className="container1">
          <h1 className="heading">Calculate the letters you enter</h1>
          <label className="para" htmlFor="userInput">
            Enter the phrase
          </label>
          <input
            className="letter-para"
            type="text"
            placeholder="Enter the phrase"
            id="userInput"
            onChange={this.LETTERCOUNTER}
          />
          <div className="LettersCount-container">
            <p className="letter-para">No. of letters: {LettersCount}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="IMAGE"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
