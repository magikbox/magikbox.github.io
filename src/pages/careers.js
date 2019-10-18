import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

import Banner from '../components/Careers/Banner/index'
import BehindTheScenes from '../components/Careers/BehindTheScenes/index'
import Advantages from '../components/Careers/Advantages/index'
import EmployeeStories from '../components/Careers/EmployeeStories/index'
import CountBanner from '../components/Careers/CountBanner/CountBanner'
import CareerDepartment from '../components/Careers/CareerDepartment/CareerDepartment'
import SearchBar from '../components/Careers/searchBar/searchBar'
import { Link } from 'react-scroll'
import axios from 'axios'
import Slider from 'react-slick'
import SEO from '../components/seo'
import {
  restrictedDepartments,
  restrictedTeams,
  restrictedIds,
} from './all-open-positions'

var Scroll = require('react-scroll')
var scroller = Scroll.scroller

class Careers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      keyword: '',
      team: '',
      location: '',
      department: '',
      // locationId: '1',
      locationName: 'All',
      inputText: '',
      places: [],
      searchResult: {
        result: null,
        options: null,
      },
      jobResponseData: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    axios
      .get(`https://api.lever.co/v0/postings/gojek?mode=json`)
      .then(response => {
        let placesAdded = []
        for (let i = 0; i < response.data.length; i++) {
          let count = 0
          if (placesAdded.includes(response.data[i].categories.location)) {
            count = count + 1
          }
          if (count === 0) {
            placesAdded.push(response.data[i].categories.location)
          }
        }
        this.setState({
          jobResponseData: this.getFilterdata(response),
          places: placesAdded,
        })
        return response
      })
  }

  getFilterdata = response => {
    // ('before return', response)
    let returnData = []
    returnData.push(
      response.data.filter((data, i) => {
        if (
          data.description !== '' &&
          data.lists.length !== 0 &&
          (data.lists && data.lists[0] && data.lists[0].content !== '') &&
          (data.lists && data.lists[1] && data.lists[1].content !== '') &&
          !restrictedTeams.includes(data.categories.team) &&
          !restrictedIds.includes(data.id) &&
          !restrictedDepartments.includes(data.categories.department)
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

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      keyword: document.getElementById('keyword').value,
      location:
        document.getElementById('location').value === 'all'
          ? ''
          : document.getElementById('location').value,
      team:
        document.getElementById('team').value === 'all'
          ? ''
          : document.getElementById('team').value,
      department:
        document.getElementById('department').value === 'all'
          ? ''
          : document.getElementById('department').value,
    })
    scroller.scrollTo('myScrollToElement', {
      smooth: 'easeInOutQuint',
    })
  }

  handleChange = evt => {
    if (evt.target.value === 'all') {
      this.setState({
        [evt.target.name]: '',
      })
    } else {
      this.setState({
        [evt.target.name]: evt.target.value,
      })
    }
  }

  resetFilters = () => {
    this.setState({
      keyword: '',
      location: '',
      team: '',
      department: '',
    })
  }

  onChangeInputText = ev => {
    const targetvalue = ev.target.value
    this.setState(
      {
        inputText: targetvalue,
        searchResult: {
          ...this.state.searchResult,
          result: this.state.jobResponseData.data.filter((data, i) => {
            if (
              data.text.toLowerCase().includes(targetvalue.toLowerCase()) &&
              targetvalue !== '' &&
              ((this.state.locationName &&
                this.state.locationName.toLowerCase() === 'all') ||
                data.categories.location === this.state.locationName)
            ) {
              return data
            }
          }),
        },
      },
      () => {
        if (
          this.state.searchResult.result.length === 0 &&
          this.state.locationName !== 'All'
        ) {
          this.setState({
            searchResult: {
              ...this.state.searchResult,
              options: this.state.jobResponseData.data.filter((data, i) => {
                if (
                  data.text.toLowerCase().includes(targetvalue.toLowerCase()) &&
                  targetvalue !== ''
                ) {
                  return data
                }
              }),
            },
          })
        }
      }
    )
  }

  onClickLocation = name => {
    this.setState(
      {
        locationName: name,
        searchResult: {
          ...this.state.searchResult,
          result: this.state.jobResponseData.data.filter((data, i) => {
            if (
              data.text
                .toLowerCase()
                .toLowerCase()
                .includes(this.state.inputText.toLowerCase()) &&
              this.state.inputText !== '' &&
              (data.categories.location.toLowerCase() === name.toLowerCase() ||
                name.toLowerCase() === 'all')
            ) {
              return data
            }
          }),
        },
      },
      () => {
        if (
          this.state.searchResult.result.length === 0 &&
          this.state.locationName !== 'All'
        ) {
          this.setState({
            searchResult: {
              ...this.state.searchResult,
              options: this.state.jobResponseData.data.filter((data, i) => {
                if (
                  data.text
                    .toLowerCase()
                    .includes(this.state.inputText.toLowerCase()) &&
                  this.state.inputText !== ''
                ) {
                  return data
                }
              }),
            },
          })
        }
      }
    )
  }

  componentWillMount() {
    if (typeof localStorage !== `undefined`) {
      localStorage.setItem('source', 'gojek.io')
    }
  }

  render() {
    var settings = {
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: '0px',
      dots: true,

      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            arrows: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            dots: true,
            arrows: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToScroll: 1,
          },
        },
      ],
    }

    const sliderData = [
      {
        imgsrc: 'career-banner-1',
      },
      {
        imgsrc: 'career-banner-2',
      },
      {
        imgsrc: 'career-banner-3',
      },
      {
        imgsrc: 'career-banner-4',
      },
      {
        imgsrc: 'career-banner-5',
      },
    ]

    return (
      <div className="first-section">
        <SEO
          isDynamic={false}
          title="Gojek Careers: Check out the current job openings at Gojek Tech"
          description="Gojek is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps."
          url="https://gojek.io"
        />

        {/* Main banner image */}
        <SearchBar
          props={this.props}
          places={this.state.places}
          searchResult={this.state.searchResult}
          onChangeInputText={ev => this.onChangeInputText(ev)}
          onClickLocation={name => this.onClickLocation(name)}
          locationName={this.state.locationName}
          inputText={this.state.inputText}
          source="gojek.io"
        />
        <CountBanner props={this.props} bannerImage="careers-second-banner" />
        <section>
          <div className="container-fluid pt-5 pt-md-1">
            <Slider
              {...settings}
              className="row go-jek-slider lg-controls-dark custom-controls-dark "
            >
              {sliderData.map((slide, i) => {
                return (
                  <div key={i} className={slide.imgsrc}>
                    <div style={{ height: '50vh' }} />
                    {/* <img
                      src={`../images/careers/${slide.imgsrc}`}
                      className="img-fluid"
                    /> */}
                  </div>
                )
              })}
            </Slider>
          </div>
        </section>

        <BehindTheScenes />

        <CareerDepartment props={this.props} />

        <Advantages />

        <EmployeeStories
          keyword={this.state.keyword}
          team={this.state.team}
          location={this.state.location}
          department={this.state.department}
          resetFilters={this.resetFilters.bind(this)}
          referer="https://www.gojek.io/"
          showHeadings={true}
        />
      </div>
    )
  }
}

export default Careers
