import React, { Component } from 'react'
import Parser from 'html-react-parser'
import Modal from 'react-responsive-modal'
import { ElementLink } from 'react-scroll'

import Description from '../../../pages/description'
import { getSlug } from '../../Common/utils/getSlug'
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
} from 'react-share'

var Scroll = require('react-scroll')
var Element = Scroll.Element
var scroller = Scroll.scroller

export const getShareButton = job => (
  <div className="dropdown pr-5">
    <button
      className="btn btn-outline-success dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <i className="fa fa-share-alt" /> &nbsp; Share Job
    </button>
    {typeof window !== `undefined` &&
      job !== undefined && (
        <div
          className="dropdown-menu py-0"
          aria-labelledby="dropdownMenuButton"
        >
          <FacebookShareButton url={window.location.href} quote={job.text}>
            <button className="px-3 border-focus-none dropdown-item text-left btn  btn-block b-0 text-primary bg-white">
              <i className=" fa fa-facebook-f " />
              &nbsp;&nbsp;Facebook
            </button>
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href} quote={job.text}>
            <button className="px-3 border-focus-none dropdown-item text-left btn o btn-block text-info bg-white">
              <i className=" fa fa-twitter " />
              &nbsp;&nbsp;Twitter
            </button>
          </TwitterShareButton>

          <WhatsappShareButton url={window.location.href} quote={job.text}>
            <button className="px-3 border-focus-none dropdown-item text-left btn  btn-block text-success bg-white">
              <i className=" fa fa-whatsapp " />
              &nbsp;&nbsp;Whatsapp
            </button>
          </WhatsappShareButton>
          <TelegramShareButton url={window.location.href} quote={job.text}>
            <button className="px-3 border-focus-none  dropdown-item text-left btn  btn-block text-info bg-white">
              <i className=" fa fa-telegram " />
              &nbsp;&nbsp;Telegram
            </button>
          </TelegramShareButton>
        </div>
      )}
  </div>
)

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

  onClickPosition = job => {
    // console.log(
    //   "this.props.location.search.split('=')[3]",
    //   this.props.location.search.split('=')[3] !== job.id &&
    //   this.getCurrentWidth() > 480 
    // )

    this.props.history.push({
      pathname: `/all-open-positions`,
      search: `?d=${getSlug(job.categories.department)}&t=${getSlug(
        job.categories.team
      )}&p=${job.id}`,
    })
    //
    //
    this.setState({
      visible: true,
    }),
      this.props.jobSelected(job)
    this.props.location.search.split('=')[3] !== job.id &&
      this.getCurrentWidth() > 480 &&
      scroller.scrollTo(job.id, {
        smooth: 'easeInOutQuint',
        offset: -200,
      })
  }

  render() {
    return (
      <div>
        <div className="d-flex flex-row flex-wrap pb-5">
          {this.props.jobsData.map((job, i) => {
            return (
              <div
                key={i}
                className={`${
                  this.props.location.search.split('=')[3] === job.id
                    ? 'col-md-12'
                    : 'col-lg-4'
                }   col-12 col-md-6 mt-4 mb-0 px-2`}
              >
                {this.props.location.search.split('=')[3] === job.id &&
                this.getCurrentWidth() < 768 ? (
                  <Modal
                    style={{
                      width: this.getCurrentWidth().toString(),
                      height: this.getCurrentHeight().toString(),
                    }}
                    className="sdvsdv"
                    open={
                      this.state.visible ||
                      this.props.location.search.split('=')[3] === job.id
                    }
                    onClose={() => {}}
                    center
                  >
                    <div
                      style={{
                        maxHeight: this.getCurrentHeight(),
                        overflowY: 'scroll',
                      }}
                    >
                      {this.props.location.search.split('=')[3] === job.id && (
                        <div className="">
                          <div
                            style={{
                              top: '55px',
                              left: '0',
                              zIndex: '99',
                              boxShadow: '1px 7px 14px -5px rgba(0,0,0,.32)',
                            }}
                            className="w-100 position-fixed bg-white py-4 "
                          >
                            <div className="d-flex flex-row ">
                              <h6 className=" px-4 roboto-regular font-md  text-dark ">
                                {job.text}
                              </h6>
                              <i
                                onClick={e => {
                                  e.stopPropagation()
                                  this.props.history.push({
                                    pathname: `/all-open-positions`,
                                    search: `?d=${getSlug(
                                      job.categories.department
                                    )}&t=${getSlug(job.categories.team)}`,
                                  }),
                                    this.setState({
                                      visible: false,
                                    }),
                                    this.props.jobSelected(null)
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
                            {/* <a
                              target="_blank"
                              href={
                                job.hostedUrl +
                                `/apply?lever-source[]=${
                                  typeof localStorage !== `undefined`
                                    ? localStorage.getItem('source')
                                    : 'gojek.io'
                                }`
                              }
                              className="apply btn bg-green text-white px-5 apply ml-4 my-2"
                            >
                              APPLY NOW
                            </a> */}
                          </div>
                          {
                            <div className="pl-4 pt-5">
                              <Description {...this.props} job={job} />
                            </div>
                          }
                          <div
                            style={{
                              // position: 'fixed',
                              bottom: '0',
                              left: '0',
                              zIndex: '99',
                              // paddingBottom: '53px',
                            }}
                            className="w-100 bg-green py-4 text-center position-fixed  maison-bold font-sm"
                          >
                            <a
                              className="text-white"
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
                        </div>
                      )}
                    </div>
                  </Modal>
                ) : (
                  // <Modal
                  //   visible={
                  //     this.state.visible ||
                  //     this.props.location.search.split('=')[3] === job.id
                  //   }
                  //   width={this.getCurrentWidth().toString()}
                  //   height={this.getCurrentHeight().toString()}
                  //   effect="fadeInUp"
                  //   onClickAway={() => {
                  //     this.setState({ visible: false })
                  //   }}
                  // >

                  // </Modal>

                  <div
                    onClick={() => {
                      this.onClickPosition(job)
                    }}
                    style={{
                      minHeight:
                        this.getCurrentWidth() >= 768 ? '95px' : '90px',
                      borderRadius: '10px',
                    }}
                    className={` scroll  d-flex flex-column flex-wrap justify-content-center careers-position careers-position-unhighlight ${
                      this.props.location.search.split('=')[3] === job.id
                        ? 'border-success pt-3'
                        : ''
                    }`}
                  >
                    {this.props.location.search.split('=')[3] === job.id && (
                      <i
                        onClick={e => {
                          e.stopPropagation()
                          this.props.history.push({
                            pathname: `/all-open-positions`,
                            search: `?d=${getSlug(
                              job.categories.department
                            )}&t=${getSlug(job.categories.team)}`,
                          }),
                            this.setState({
                              visible: false,
                            }),
                            this.props.jobSelected(null)
                        }}
                        className="fa scroll ml-auto pr-5 fa-minus  mt-auto text-green "
                      />
                    )}
                    {/* <Link to={{}} className=""> */}
                    <Element id={job.id} name={job.id}>
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
                    </Element>
                    {/* </Link> */}
                    {this.props.location.search.split('=')[3] === job.id && (
                      <div>
                        {
                          <div className="pl-4 pt-3">
                            <div className="row justify-content-between align-items-center pl-4">
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

                              {
                                <div className="d-none d-md-block">
                                  {getShareButton(job)}
                                </div>
                              }
                            </div>

                            {/* // <button className="btn btn-primary">sdf</button> */}
                            {/* {console.log('sdfdsfdfdsf', window.location.href)} */}
                            <Description {...this.props} job={job} />
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
              </div>
            )
          })}
          {this.props.jobsData.length === 0 && (
            <h6 className="maison-bold mx-auto font-xl-l">No Results Found</h6>
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
