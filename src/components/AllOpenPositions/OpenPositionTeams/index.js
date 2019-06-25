import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PositionCard from '../../Careers/PositionCard/positionCard'
import { getSlug } from '../../Common/utils/getSlug'

class OpenPositionTeams extends Component {
  constructor(props) {
    super(props)
    this.state = {
      teamIndex: 0,
    }
  }

  getShuffledData = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
  }

  render() {
    return (
      <div className="py-4">
        <div className="d-none d-md-block">
          <div className="d-flex flex-row flex-wrap px-2">
            {this.props.teams.map((team, i) => {
              return (
                <Link
                  to={{
                    pathname: `/all-open-positions`,
                    search: `?d=${
                      this.props.location.search.split('=')[1].split('&')[0]
                    }&t=${getSlug(team.teamName)}`,
                  }}
                  onClick={() => this.setState({ teamIndex: i })}
                  replace={true}
                  key={i}
                  className={`roboto-black font-sm pt-3 pr-5  ${
                    (this.props.location.search.split('=')[2] &&
                      this.props.location.search
                        .split('=')[2]
                        .split('&')[0]) === undefined && i == 0
                      ? 'text-success'
                      : this.props.location.search.split('=')[2] &&
                        this.props.location.search
                          .split('=')[2]
                          .split('&')[0] === getSlug(team.teamName)
                        ? 'text-success'
                        : 'text-dark'
                  }`}
                >
                  <span
                    style={{
                      borderBottom:
                        (this.props.location.search.split('=')[2] &&
                          this.props.location.search
                            .split('=')[2]
                            .split('&')[0]) === undefined && i == 0
                          ? '2px solid #3ca745'
                          : this.props.location.search.split('=')[2] &&
                            this.props.location.search
                              .split('=')[2]
                              .split('&')[0] === getSlug(team.teamName)
                            ? '2px solid #3ca745'
                            : '2px solid transparent',
                    }}
                  >
                    {team.teamName}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="d-md-none col-12 px-2">
          <p className="mb-0 font-sm raleway-bold text-black">TEAM:</p>

          <div className="dropdown position-relative">
            <button
              style={{ boxShadow: 'none', borderBottom: '2px solid #009944' }}
              className="btn text-green px-0 pb-1 pt-2 btn-block bg-white dropdown-toggle custom-dropdown text-left neosans-regular font-md  text-uppercase"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {(this.props.location.search.split('=')[2] &&
                this.props.location.search.split('=')[2].split('&')[0]) ===
              undefined
                ? this.props.teams[0].teamName.replace(/-/g, ' ')
                : this.props.location.search.split('=')[2] &&
                  this.props.location.search
                    .split('=')[2]
                    .split('&')[0]
                    .replace(/-/g, ' ')}
            </button>
            <i
              className="fa fa-chevron-down position-absolute text-green"
              style={{ right: '0px', top: '8px' }}
            />
            <div
              className="dropdown-menu w-100"
              aria-labelledby="dropdownMenuButton"
            >
              {this.props.teams.map((team, i) => {
                return (
                  <Link
                    key={i}
                    className="dropdown-item text-uppercase font-md pl-3"
                    // type="button"
                    to={{
                      pathname: `/all-open-positions`,
                      search: `?d=${
                        this.props.location.search.split('=')[1].split('&')[0]
                      }&t=${getSlug(team.teamName)}`,
                      //   state: { teams: this.props.teams },
                    }}
                  >
                    {' '}
                    {team.teamName}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {this.props.teams.map((team, i) => {
          return (this.props.location.search.split('=')[2] &&
            this.props.location.search.split('=')[2].split('&')[0]) ===
            undefined && i == 0 ? (
            <PositionCard
              {...this.props}
              key={i}
              jobsData={this.props.teams[0].data}
            />
          ) : (
            this.props.location.search.split('=')[2] &&
              this.props.location.search.split('=')[2].split('&')[0] ===
                getSlug(team.teamName) && (
                <PositionCard
                  {...this.props}
                  key={i}
                  jobsData={this.props.teams[i].data}
                />
              )
          )
        })}
      </div>
    )
  }
}

export default OpenPositionTeams
