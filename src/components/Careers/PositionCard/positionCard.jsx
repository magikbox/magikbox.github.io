import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Parser from 'html-react-parser'
import Modal from 'react-awesome-modal'
import Description from '../Description/Description'
import { getSlug } from '../../Common/utils/getSlug'
var Scroll = require('react-scroll')
var Element = Scroll.Element
var scroller = Scroll.scroller

class PositionCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
    }
  }

  getCurrentWidth = () => {
    let screenWidth = null
    if (typeof screen !== `undefined`) {
      screenWidth = screen.width
    }
    return screenWidth
  }

  getCurrentHeight = () => {
    let screenHeight = null
    if (typeof screen !== `undefined`) {
      screenHeight = screen.height
    }
    return screenHeight
  }


  render() {
    return (
      <div>
        <div className="d-flex flex-row flex-wrap pb-5">
          {this.props.jobsData.map((job, i) => {
            return (
              <Element
                id={job.id}
                name={job.id}
                key={i}
                className={`${
                  this.props.location.search.split('=')[3] === job.id
                    ? 'col-lg-12'
                    : 'col-lg-4'
                }   col-12  mt-4 mb-0 px-2`}
              >
                {this.props.location.search.split('=')[3] === job.id &&
                this.getCurrentWidth() < 768 ? (
                  <Modal
                    visible={
                      this.state.visible ||
                      this.props.location.search.split('=')[3] === job.id
                    }
                    width={this.getCurrentWidth().toString()}
                    height={this.getCurrentHeight().toString()}
                    effect="fadeInUp"
                    onClickAway={() => {
                      this.setState({ visible: false })
                    }}
                  >
                    <div
                      style={{
                        maxHeight: this.getCurrentHeight(),
                        overflowY: 'scroll',
                      }}
                    >
                      {this.props.location.search.split('=')[3] === job.id && (
                        <div>
                          <div
                            style={{
                              top: '0',
                              zIndex: '99',
                              boxShadow: '1px 7px 14px -5px rgba(0,0,0,.32)',
                            }}
                            className="w-100 position-fixed bg-white py-3"
                          >
                            <div className="d-flex flex-row flex-wrap">
                              <h6 className=" px-4 roboto-regular font-md  text-dark ">
                                {job.text}
                              </h6>
                              <i
                                onClick={e => {
                                  e.stopPropagation()
                                  this.props.history.push({
                                    pathname: `/all-open-positions`,
                                    search: `?department=${getSlug(
                                      job.categories.department
                                    )}&team=${getSlug(job.categories.team)}`,
                                  }),
                                    this.setState({
                                      visible: false,
                                    })
                                }}
                                className="fa scroll ml-auto pr-4 fa-minus fa-2x pt-1 mt-auto text-green "
                              />
                            </div>

                            <div className="d-flex flex-row flex-wrap roboto-black font-xs text-uppercase">
                              <span className="pl-4  text-green  col-">
                                {job.categories.location}
                              </span>
                              <span className="pl-4  text-black  col-">
                                {job.categories.team}
                              </span>
                            </div>
                          </div>
                          {
                            <div className="pl-4 my-5 py-5 ">
                              <Description job={job} />
                              <div className="d-block text-center" />
                            </div>
                          }
                          <a
                            style={{
                              position: 'fixed',
                              bottom: '0',
                              zIndex: '99',
                            }}
                            className="w-100 bg-green py-4 text-center position-fixed text-white raleway-bold font-sm"
                            target="_blank"
                            href={
                              job.hostedUrl +
                              `/apply?lever-source[]=${
                                typeof localStorage !== `undefined`
                                  ? localStorage.getItem('source')
                                  : 'gojek.io'
                              }`
                            }
                          >
                            APPLY FOR THIS JOB{' '}
                          </a>
                        </div>
                      )}
                    </div>
                  </Modal>
                ) : (
                  <div
                    onClick={() => {
                      this.props.history.push({
                        pathname: `/all-open-positions`,
                        search: `?department=${getSlug(
                          job.categories.department
                        )}&team=${getSlug(job.categories.team)}&position=${
                          job.id
                        }`,
                      }),
                        this.setState({
                          visible: true,
                        })
                      {
                        this.props.location.search.split('=')[3] !== job.id &&
                          this.getCurrentWidth > 480
                        scroller.scrollTo(job.id, {
                          smooth: 'easeInOutQuint',
                          offset: -200,
                        })
                      }
                    }}
                    style={{
                      minHeight: this.getCurrentWidth >= 768 ? '120px' : '90px',
                      borderRadius: '10px',
                    }}

                    className={` scroll  d-flex flex-column flex-wrap justify-content-center careers-position careers-position-unhighlight ${
                      this.props.location.search.split('=')[3] === job.id
                        ? 'border-success pt-4'
                        : ''
                    }`}
                  >
                    {this.props.location.search.split('=')[3] === job.id && (
                      <i
                        onClick={e => {
                          e.stopPropagation()
                          this.props.history.push({
                            pathname: `/all-open-positions`,
                            search: `?department=${getSlug(
                              job.categories.department
                            )}&team=${getSlug(job.categories.team)}`,
                          }),
                            this.setState({
                              visible: false,
                            })
                        }}
                        className="fa scroll ml-auto pr-5 fa-minus  mt-auto text-green "
                      />
                    )}
                    {/* <Link to={{}} className=""> */}
                    <h6 className=" px-4 roboto-regular font-sm text-dark ">
                      {job.text}
                    </h6>
                    <div className="d-flex flex-row flex-wrap roboto-black font-xs text-uppercase">
                      <span className="pl-4  text-green  col-">
                        {job.categories.location}
                      </span>
                      <span className="pl-4  text-black  col-">
                        {job.categories.team}
                      </span>
                    </div>
                    {/* </Link> */}
                    {this.props.location.search.split('=')[3] === job.id && (
                      <div>
                        {
                          <div className="pl-4 pt-3">
                            <a
                              target="_blank"
                              href={
                                job.hostedUrl +
                                `/apply?lever-source[]=${
                                  typeof localStorage !== `undefined`
                                    ? localStorage.getItem('source')
                                    : 'gojek.io'
                                }`
                              }
                              className="apply btn btn-success px-5 apply  my-2"
                            >
                              APPLY NOW
                            </a>

                            <Description job={job} />
                            <div className="d-block text-center" />
                          </div>
                        }
                        <div className="w-100 text-center">
                          <a
                            target="_blank"
                            href={
                              job.hostedUrl +
                              `/apply?lever-source[]=${
                                typeof localStorage !== `undefined`
                                  ? localStorage.getItem('source')
                                  : 'gojek.io'
                              }`
                            }
                            className="apply btn btn-success px-5 apply col-6 col-md-4  my-5"
                          >
                            APPLY FOR THIS JOB{' '}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Element>
            )
          })}
          {this.props.jobsData.length === 0 && (
            <h6 className="raleway-bold mx-auto font-xl-l">No Results Found</h6>
          )}
        </div>

        {/* <div
          onClick={() => this.props.onChangeURL(this.props.id)}
          
          
        >
          {
           
          }
          <p className="  px-1 text-success roboto-bold">
            {this.props.subHeading}
          </p>
        </div>
        {this.props.id === this.props.positionId && (
          <div className="col-12 bg-success py-1 " />
        )}*/}
      </div>
    )
  }
}

export default PositionCard
