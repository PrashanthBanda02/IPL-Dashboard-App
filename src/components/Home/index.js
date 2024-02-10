import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import './index.css'
import TeamCard from '../TeamCard'

const teamsApiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch(teamsApiUrl)
    const fetchedData = await response.json()
    const teamsData = fetchedData.teams
    const formattedData = teamsData.map(eachItem => ({
      teamImageUrl: eachItem.team_image_url,
      id: eachItem.id,
      name: eachItem.name,
    }))
    this.setState({teamsList: formattedData, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state

    return (
      <Link to="/">
        {isLoading ? (
          <div className="loader-container" testid="loader">
            <Loader type="Oval" color="#000000" height={50} width={50} />
          </div>
        ) : (
          <div className="app-container">
            <div className="logo-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                className="ipl-logo"
                alt="ipl logo"
              />
              <h1 className="dashboard-heading">IPL Dashboard</h1>
            </div>
            <ul className="teamCards-container">
              {teamsList.map(eachTeam => (
                <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
              ))}
            </ul>
          </div>
        )}
      </Link>
    )
  }
}

export default Home
