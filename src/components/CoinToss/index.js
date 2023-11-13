import {Component} from 'react'

import './index.css'

const imagesList = [
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    altImageUrl: 'toss result',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
    altImageUrl: 'toss result',
  },
]

class CoinToss extends Component {
  state = {isActive: 0, totalCount: 0, headsCount: 0, tailsCount: 0}

  onClickingButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState((prevState, isActive) => ({
        headsCount: prevState.headsCount + 1,
        isActive: tossResult,
      }))
    } else {
      this.setState((prevState, isActive) => ({
        tailsCount: prevState.tailsCount + 1,
        isActive: tossResult,
      }))
    }

    this.setState(prevState => ({
      totalCount: prevState.totalCount + 1,
    }))
  }

  render() {
    const {headsCount, tailsCount, totalCount, isActive} = this.state

    const {imageUrl, altImageUrl} = imagesList[isActive]

    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="header">Coin Toss Game</h1>
          <p className="app-text">Heads (or) Tails</p>
          <img src={imageUrl} alt={altImageUrl} className="image" />
          <button
            type="button"
            className="button"
            onClick={this.onClickingButton}
          >
            Toss Coin
          </button>
          <div className="res-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
