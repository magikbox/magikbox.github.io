import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import PositionCard from '../components/Careers/PositionCard/positionCard'
import axios from 'axios'
import OpenPositionDepartments from '../components/AllOpenPositions/OpenPositionDepartments'

var Scroll = require('react-scroll')
var scroll = Scroll.animateScroll
var scroller = Scroll.scroller

class allpositions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filters: false,
      departments: [],
      teams: [],
      positions: [],
      jobsData: [],
      locationName: 'All',
      scrollTop: 'd-none ',
      inputText: '',
      places: [],
      placeSelected: 'All',
      departmentSelected: 'All',
      reformatedData: [],
    }
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      window.addEventListener('scroll', this.handleScroll)
    }
    let departments = this.state.departments
    let places = this.state.places
    axios
      .get(`https://api.lever.co/v0/postings/gojek?mode=json`)
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          let departmentCount = 0
          let locationCount = 0

          if (departments.includes(response.data[i].categories.department)) {
            departmentCount = departmentCount + 1
          }
          if (places.includes(response.data[i].categories.location)) {
            locationCount = locationCount + 1
          }
          if (departmentCount === 0) {
            departments.push(response.data[i].categories.department)
          }
          if (locationCount === 0) {
            places.push(response.data[i].categories.location)
          }
        }
        this.getPositions(departments, places, this.getFilterdata(response))
      })
  }

  // this method is used to show the scroll to top button
  handleScroll = () => {
    if (typeof window !== `undefined`) {
      const top = window.pageYOffset
      if (top > 50) {
        this.setState({
          scrollTop: ' d-block ',
        })
      } else {
        this.setState({
          scrollTop: ' d-none ',
        })
      }
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

  // this method is used to get the teams array by passing departments array
  getTeamsbyDepartment = departments => {
    let teams = []
    let teamsData = []

    for (let i = 0; i < departments.length; i++) {
      let teamCount = 0
      if (teams.includes(departments[i].categories.team)) {
        teamCount = teamCount + 1
      }
      if (teamCount === 0) {
        teams.push(departments[i].categories.team)
      }
    }
    teams.map((team, j) => {
      teamsData.push({
        teamName: team,
        data: this.getShuffledData(
          departments.filter((job, i) => {
            if (job.categories.team === team) {
              return job
            }
          })
        ),
      })
    })
    return teamsData
  }

  // this methos is used to (restrict the content when it is empty) and teams
  getFilterdata = response => {
    let returnData = []
    returnData.push(
      response.data.filter((data, i) => {
        if (
          data.description !== '' &&
          data.lists.length !== 0 &&
          (data.lists && data.lists[0] && data.lists[0].content !== '') &&
          (data.lists && data.lists[1] && data.lists[1].content !== '') &&
          ![
            'Digital',
            'Finance',
            'Strategic Finance',
            'Community',
            'Legal',
            'Government Relations',
            'Expansion',
            'Growth',
            'Accounting and Finance',
            'Business Operations - Community',
            'Marketplace',
            'International Operations - Expansion',
            'Business operations - Growth',
            'Marketing and Communications - Digital',
          ].includes(data.categories.team) &&
          ![
            'b8984973-1b9a-410d-9366-4fe0cc17c954',
            'df136a0b-932d-41e9-80ae-106d20554445',
          ].includes(data.id) &&
          !['Corporate', 'University'].includes(data.categories.department)
        ) {
          return data
        }
      })
    )
    const fd = {
      data: returnData[0],
    }
    return fd
  }

  // this method is used to set the positions array by department wise
  getPositions = (departments, places, jobsData) => {
    this.setState(
      {
        jobsData: jobsData,
        departments: departments,
        places: places,
        positions: departments.map((department, i) => {
          return jobsData.data.filter((job, j) => {
            if (job.categories.department === department) {
              return job
            }
          })
        }),
      },
      () => {
        this.setState(
          {
            reformatedData: this.getReformatedData(this.state.positions),
          },
          () => {
            if (
              window.location.search.split('&')[2] &&
              window.location.search.split('&')[2].split('=')[1]
            ) {
              scroller.scrollTo(
                `${window.location.search.split('&')[2].split('=')[1]}`,
                {
                  smooth: 'easeInOutQuint',
                  offset: -100,
                }
              )
            } else {
              scroller.scrollTo(`${window.location.search.split('=')[1]}`, {
                smooth: 'easeInOutQuint',
                offset: -100,
              })
            }
          }
        )
      }
    )
  }

  // this method is used to get the final version of reformated jobs
  getReformatedData = positionGroups => {
    let returnData = []
    for (let i = 0; i < positionGroups.length; i++) {
      positionGroups[i].length !== 0 &&
        returnData.push({
          deptName: positionGroups[i][0].categories.department,
          openings: positionGroups[i].length,
          teams: this.getTeamsbyDepartment(positionGroups[i]),
        })
    }

    return returnData
  }

  // this method will return the location and department dropdowns
  getLocationAndDepartment = (stateSlug, updateState) => {
    return (
      <React.Fragment>
        <div className="dropdown position-relative">
          <button
            className="btn form-control custom-search  py-2  btn-block bg-white dropdown-toggle custom-dropdown text-left neosans-regular py-2  "
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.state[updateState]}
          </button>
          <i
            className="fa fa-chevron-down position-absolute text-green"
            style={{ right: '10px', top: '10px' }}
          />
          <div
            className="dropdown-menu w-100"
            aria-labelledby="dropdownMenuButton"
          >
            <button
              onClick={() => this.setState({ [updateState]: 'All' })}
              className="dropdown-item"
              type="button"
            >
              All
            </button>
            {this.state[stateSlug].map((place, i) => {
              return (
                <button
                  key={i}
                  onClick={() => this.setState({ [updateState]: place })}
                  className="dropdown-item"
                  type="button"
                >
                  {place}
                </button>
              )
            })}
          </div>
        </div>
      </React.Fragment>
    )
  }

  // this method will return the filtered jobs
  getAfterSearchPositions = () => {
    const returnData = this.state.jobsData.data.filter((job, i) => {
      if (
        job.text.toLowerCase().includes(this.state.inputText.toLowerCase()) &&
        (this.state.departmentSelected === 'All' ||
          this.state.departmentSelected === job.categories.department) &&
        (this.state.placeSelected === 'All' ||
          this.state.placeSelected === job.categories.location)
      ) {
        return job
      }
    })
    return returnData
  }

  render() {
    return (
      <div className="first-section">
        <Helmet>
          <title>
            GOJEK Careers: Check out the current job openings at GOJEK Tech
          </title>
          <meta
            property="og:title"
            content="GOJEK Careers: Check out the current job openings at GOJEK Tech"
          />
          <meta
            name="twitter:title"
            content="GOJEK Careers: Check out the current job openings at GOJEK Tech"
          />
          <meta
            name="description"
            content="GOJEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps."
          />
          <meta
            name="twitter:description"
            content="GOJEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps."
          />
          <meta
            property="og:description"
            content="GOJEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps."
          />
        </Helmet>
        <div className="container">
          <h1 className="text-center text-black font-xl-x raleway-bold pt-5">
            {this.state.inputText === '' &&
            this.state.placeSelected === 'All' &&
            this.state.departmentSelected === 'All'
              ? 'All Open Positions'
              : 'Search Results'}
          </h1>
          <p
            onClick={() =>
              this.setState(prevState => {
                return {
                  filters: !prevState.filters,
                }
              })
            }
            className="d-md-none text-green roboto-bold font-md pl-2"
          >
            <i className="fa fa-filter" />&nbsp;Filters
          </p>
          {this.state.filters && (
            <React.Fragment>
              <div className="col-md-3 col-12 px-2 pt-3 pt-md-0  ">
                {' '}
                <p className="roboto-bold text-uppercase mb-1">Location:</p>
                {this.getLocationAndDepartment('places', 'placeSelected')}
              </div>
              <div className="col-md-3 col-12 px-2 pt-3 pt-md-0  ">
                {' '}
                <p className="roboto-bold text-uppercase mb-1">Department:</p>
                {this.getLocationAndDepartment(
                  'departments',
                  'departmentSelected'
                )}
              </div>
            </React.Fragment>
          )}
          <div className="d-flex flex-row flex-wrap pb-5 pt-3">
            <div className="col-md-6 col-12 px-2  pt-md-0 ">
              <p className="roboto-bold text-uppercase mb-1">Search:</p>
              {/* <div className="position-relative border-focus-none">
                <input
                  style={{
                    boxShadow: 'none',
                    border: 'none',
                    borderBottom: '2px solid #000',
                  }}
                  onChange={ev => this.setState({ inputText: ev.target.value })}
                  type="text"
                  name="keyword"
                  value={this.state.inputText}
                  className="w-100 py-2 border-focus-none"
                  id="keyword"
                  placeholder="eg.. Android Engineer"
                  autoComplete="off"
                />
                <i
                  className="fa fa-search position-absolute text-green"
                  style={{ right: '0px', top: '4px',fontSize:'20px' }}
                />
              </div> */}
              <div className="position-relative">
                <input
                  onChange={ev => this.setState({ inputText: ev.target.value })}
                  type="text"
                  name="keyword"
                  value={this.state.inputText}
                  className="form-control py-2 custom-search"
                  id="keyword"
                  placeholder="eg.. Android Engineer"
                  autoComplete="off"
                />
                <i
                  className="fa fa-search position-absolute text-green"
                  style={{ right: '10px', top: '10px' }}
                />
              </div>
            </div>
            <div className="col-md-3 col-12 pl-0 pt-3 pt-md-0  d-none d-md-block">
              {' '}
              <p className="roboto-bold text-uppercase mb-1">Location:</p>
              {this.getLocationAndDepartment('places', 'placeSelected')}
            </div>
            <div className="col-md-3 col-12 pl-0 pr-2 pt-3 pt-md-0  d-none d-md-block">
              {' '}
              <p className="roboto-bold text-uppercase mb-1">Department:</p>
              {this.getLocationAndDepartment(
                'departments',
                'departmentSelected'
              )}
            </div>
          </div>
          {this.state.reformatedData.length === 0 && (
            <div
              className="d-flex flex-row justify-content-center align-items-center"
              style={{ height: '50vh' }}
            >
              <i className="fa text-green fa-spinner fa-2x fa-spin" />&nbsp;
              <p className="font-xl-l raleway-bold mb-0">Loading...</p>{' '}
            </div>
          )}
          {this.state.inputText === '' &&
          this.state.placeSelected === 'All' &&
          this.state.departmentSelected === 'All' ? (
            <div style={{ minHeight: '50vh' }}>
              <OpenPositionDepartments
                departmentSelected={this.state.departmentSelected}
                {...this.props}
                reformatedData={this.state.reformatedData}
              />
            </div>
          ) : (
            <div style={{ minHeight: '50vh' }}>
              <div className="d-flex flex-row flex-wrap d-md-none">
                {this.state.placeSelected !== 'All' && (
                  <p className="roboto-bold mb-0 font-md">
                    Location:{this.state.placeSelected}
                  </p>
                )}
                {this.state.departmentSelected !== 'All' && (
                  <p className="roboto-bold mb-0 ml-auto font-md">
                    Department:{this.state.departmentSelected}
                  </p>
                )}
              </div>
              <hr />
              <div className="d-flex flex-row flex-wrap align-items-center px-2">
                {' '}
                {this.state.inputText.trimLeft() !== '' && (
                  <h6 className="raleway-bold font-xl-l">
                    '{this.state.inputText}'
                  </h6>
                )}
                <p className="text-green ml-auto">
                  {this.getAfterSearchPositions().length + ` `}Openings
                </p>
              </div>
              <PositionCard
                {...this.props}
                jobsData={this.getAfterSearchPositions()}
              />
            </div>
          )}
        </div>
        <div className={' scrolltop  '}>
          <div className="scroll-icon position-absolute scroll  text-secondary">
            <i
              onClick={() => {
                scroll.scrollToTop()
              }}
              className={this.state.scrollTop + ' fa fa-2x fa-arrow-circle-up'}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default allpositions
