import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-details-logo-container">
          <div className="latest-match-details-1">
            <p className="latest-match-team-name">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="latest-match-team_logo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="separator" />
        <div className="latest-match-details-2">
          <p className="right-section-label"> First Innings </p>
          <p className="right-section-value">{firstInnings}</p>
          <p className="right-section-label"> Second Innings </p>
          <p className="right-section-value">{secondInnings}</p>
          <p className="right-section-label">Man Of The Match</p>
          <p className="right-section-value">{manOfTheMatch}</p>
          <p className="right-section-label">Umpires</p>
          <p className="right-section-label">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
