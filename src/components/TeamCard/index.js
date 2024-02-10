import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {teamImageUrl, id, name} = teamDetails

  return (
    <li className="team-card">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt={name} className="team-card-image" />
        <p className="team-card-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
