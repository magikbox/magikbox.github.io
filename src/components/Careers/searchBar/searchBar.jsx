import React, { Component } from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom'
import { getSlug } from '../../Common/utils/getSlug.js'
var Scroll = require('react-scroll')
var scroller = Scroll.scroller

export const getReformattedPlaces = places => {
  const placesRestricted = [
    'Pekanbaru',
    'Manado',
    'Palembang',
    'Tangerang',
    'Bandung',
    'Batam',
    'North Sumatra',
    'EJBN',
    'East Java and Bali',
    'Kalimantan',
    'Sumatra',
    'East Indonesia',
  ]
  let returnedData = []
  places.map(place => {
    if (!placesRestricted.includes(place)) {
      returnedData.push(place)
    }
  })

  return returnedData
}

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locationName: 'Location',
    }
  }

  getCurrentWidth = () => {
    let screenWidth = null
    if (typeof screen !== `undefined`) {
      screenWidth = screen.width
    }
    return screenWidth
  }

  onEnterPosition = result => {
    if (result.length > 0) {
      this.props.props.history.push(
        {
          pathname: `/all-open-positions`,
          search: `?d=${getSlug(result[0].categories.department)}&t=${getSlug(
            result[0].categories.team
          )}&p=${result[0].id}`,
          state: { jobSelected: result[0] },
        }`/all-open-positions`
      )
    }
  }

  render() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(
        'source',
        this.props.source === undefined ? 'gojek.io' : this.props.source
      )
    }

    const { places, searchResult } = this.props
    const locations = [
      'Bengaluru',
      'Jakarta',
      'Bangkok',
      'Singapore',
      'Ho Chi Minh City',
    ]

    return (
      <section>
        <div className="container pt-5 px-5">
          <h1 className="font-xl-x maison-bold text-center text-md-left">
            Help Build<br /> a <span className="text-green">SuperApp</span>
          </h1>
          <div className="d-flex flex-row flex-wrap pt-4">
            <div className="col-md-8 col-12 pl-0 order-2 order-md-1">
              <p className="roboto-bold text-uppercase mb-0 ">
                What do you like to do?
              </p>
              <input
                type="text"
                name="keyword"
                value={this.props.inputText}
                onChange={ev => this.props.onChangeInputText(ev)}
                className="form-control   custom-search  py-3  "
                id="keyword"
                autoComplete="off"
                placeholder="Ex: Full Stack, Android, iOS, Product, Design, Engineer"
                onKeyUp={ev =>
                  ev.key === 'Enter'
                    ? this.onEnterPosition(this.props.searchResult)
                    : ''
                }
              />
            </div>
            <div className="col-md-4 col-12 pl-0 pt-3 pt-md-0 order-1 order-md-2">
              <p className="roboto-bold text-uppercase mb-0">Where?</p>
              <div className="dropdown position-relative">
                <button
                  className="btn form-control custom-search  py-3  btn-block bg-white dropdown-toggle custom-dropdown text-left  py-2  "
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>{this.props.locationName}</span>
                </button>
                <i
                  className="fa fa-chevron-down position-absolute text-green"
                  style={{ right: '10px', top: '16px' }}
                />
                <div
                  style={{ maxHeight: '300px', overflowY: 'auto' }}
                  className="dropdown-menu w-100 "
                  aria-labelledby="dropdownMenuButton"
                >
                  <button
                    onClick={() => this.props.onClickLocation('All', -1)}
                    className="dropdown-item "
                    type="button"
                  >
                    All
                  </button>

                  {getReformattedPlaces(this.props.places).map((data, i) => {
                    return (
                      <button
                        key={i}
                        onClick={() => this.props.onClickLocation(data, i)}
                        className="dropdown-item"
                        type="button"
                      >
                        {data}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          {searchResult.result !== null &&
            searchResult.result.length === 0 &&
            this.props.inputText !== '' && (
              <h5 className="text-center text-green bg-gray border-0 py-2 col-12 scroll  font-weight-bold ">
                {console.log('locationName', this.props.locationName)}
                {this.props.locationName === 'All'
                  ? 'No jobs found.'
                  : 'No jobs found for this location.'}
              </h5>
            )}

          {searchResult.result !== null &&
            searchResult.result.length > 0 && (
              <div
                className="col-12 px-0 d-flex flex-row flex-wrap justify-content-center search-result"
                style={{}}
              >
                {searchResult.result.map((data, i) => {
                  return (
                    <Link
                      to={{
                        pathname: `/all-open-positions`,
                        search: `?d=${getSlug(
                          data.categories.department
                        )}&t=${getSlug(data.categories.team)}&p=${data.id}`,
                        state: { jobSelected: data },
                      }}
                      key={i}
                      // onClick={() => this.onClickPositionFromSearch(data)}
                      className="text-left bg-white-hover-gray border-0 py-2 col-12 scroll"
                    >
                      <span className="roboto-regular font-sm text-dark ">
                        {data.text}
                      </span>&nbsp;
                      <span className="roboto-bold text-success font-sm">
                        {data.categories.location}
                      </span>
                    </Link>
                  )
                })}
              </div>
            )}
          {searchResult.options !== null &&
            searchResult.result.length === 0 &&
            searchResult.options.length > 0 && (
              <React.Fragment>
                <h5 className="text-center">
                  Checkout the jobs in other Location
                </h5>
                <div
                  className="col-12 px-0 d-flex flex-row flex-wrap justify-content-center search-result"
                  style={{}}
                >
                  {searchResult.options.map((data, i) => {
                    return (
                      <Link
                        to={{
                          pathname: `/all-open-positions`,
                          search: `?d=${getSlug(
                            data.categories.department
                          )}&t=${getSlug(data.categories.team)}&p=${data.id}`,
                          state: { jobSelected: data },
                        }}
                        key={i}
                        // onClick={() => this.onClickPositionFromSearch(data)}
                        className="text-left bg-white-hover-gray border-0 py-2 col-12 scroll"
                      >
                        <span className="roboto-regular font-sm text-dark ">
                          {data.text}
                        </span>&nbsp;
                        <span className="roboto-bold text-success font-sm">
                          {data.categories.location}
                        </span>
                      </Link>
                    )
                  })}
                </div>
              </React.Fragment>
            )}
          <div className="pt-2">
            <Link to="/all-open-positions" className="">
              <u className=" text-green">I'd like to view all open positions</u>
            </Link>
          </div>
        </div>
      </section>
    )
  }
}

export default SearchBar
