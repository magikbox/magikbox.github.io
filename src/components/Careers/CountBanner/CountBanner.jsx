import React, { Component } from 'react'
import data from '../data.json'
import Slider from 'react-slick'

class CountBanner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryId: '1',
      openPositionId: 'null',
    }
  }

  render() {
    const pathname = this.props.props && this.props.props.location.pathname
    var settings = {
      dots: false,
      infinite: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            dots: false,
            arrows: true,
            centerMode: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    const count = [
      {
        heading: '6600x',
        subHeading: 'total order volume growth in 3 years',
      },
      {
        heading: '50+ orders',
        subHeading: 'processed on an average every second',
      },
      {
        heading: '1 million+',
        subHeading: 'driver partners on the platform',
      },
      {
        heading: '18+',
        subHeading: 'products',
      },
      {
        heading: '250+',
        subHeading: 'engineers',
      },
    ]
    return (
      <React.Fragment>
        <section id="career-banner-id">
          <div className={` container-fluid px-0`}>
            <div className="container d-lg-none">
              <Slider
                {...settings}
                className="row go-jek-slider lg-controls-dark custom-controls-dark py-3"
              >
                {count.map((data, i) => {
                  return (
                    <div key={i} className="bg-white text-center ">
                      <h6 className="font-lg-x text-success mb-0 pt-5 roboto-bold">
                        {data.heading}
                      </h6>
                      <h6 className=" text-muted font-xs mb-0 px-1">
                        {data.subHeading}
                      </h6>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
          <div className="container  d-none d-lg-block">
            <div className="d-flex flex-row flex-wrap justify-content-between align-items-start">
              {count.map((data, i) => {
                return (
                  <div
                    key={i}
                    style={{ width: '185px' }}
                    className=" text-center py-5 "
                  >
                    <React.Fragment>
                      <h6 className="text-success font-lg-x mb-0  roboto-bold">
                        {data.heading}
                      </h6>
                      <h6 className="text-muted font-xs mb-0 px-4 pt-2">
                        {data.subHeading}
                      </h6>
                    </React.Fragment>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default CountBanner
