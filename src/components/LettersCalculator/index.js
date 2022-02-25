import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, searchInput: ''}

  onChangeSearchInput = event => {
    const {searchInput} = this.state
    console.log(searchInput)
    const lettersCount = searchInput.length
    this.setState({count: lettersCount, searchInput: event.target.value})
  }

  render() {
    const {count, searchInput} = this.state
    return (
      <div className="letters-calculator-app">
        <div className="letters-calculator-content">
          <div>
            <h1>
              Calculate the <br /> Letters you
              <br />
              enter
            </h1>
            <div className="input-container">
              <label htmlFor={searchInput}>Enter the phrase</label>
              <input
                type="text"
                id={searchInput}
                value={searchInput}
                onChange={this.onChangeSearchInput}
                placeholder="Enter the phrase"
                className="search-input"
              />
            </div>
            <p className="letters-count-text ">No.of letters: {count}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
