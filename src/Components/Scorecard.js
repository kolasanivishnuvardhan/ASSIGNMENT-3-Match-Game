import './Scorecard.css'

const Scorecard = props => {
  const {score, onClickPlayAgain, gameEnd} = props
  const onClickPlayAgainBtn = () => {
    onClickPlayAgain()
  }
  const hideOrDisplayScorecard = gameEnd ? '' : 'hide-scorecard'
  return (
    <div className={`scorecard-container ${hideOrDisplayScorecard}`}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-image"
      />
      <p className="your-score">YOUR SCORE</p>
      <h1 className="score-text">{score}</h1>
      <div className="play-again-button-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <button className="play-again-btn" onClick={onClickPlayAgainBtn}>
          PLAY AGAIN{' '}
        </button>
      </div>
    </div>
  )
}

export default Scorecard
