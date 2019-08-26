import React, { Component } from 'react'
// import data from '../data.json'
import Parser from 'html-react-parser'
import { Helmet } from 'react-helmet'
import MetaTags from 'react-meta-tags'
import axios from 'axios'
import { getShareButton } from '../components/Careers/PositionCard/positionCard'
import Description from './description'
import Modal from 'react-responsive-modal'
import SEO from '../components/seo'

class JobDescription extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobData: null,
      visible: true,
    }
  }

  componentWillMount() {
    this.setState({
      jobData: this.props.location.state && this.props.location.state.job,
    })
    console.log('this.props', this.props)
    // axios
    //   .get(
    //     `https://api.lever.co/v0/postings/gojek/${
    //       this.props.location.search.split('=')[1]
    //     }`
    //   )
    //   .then(response => {
    //     this.setState({ jobData: response.data })
    //   })
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

  getUrl() {
    if (typeof window !== `undefined`) {
      return window.location.href
    }
  }

  render() {
    const { jobData } = this.state

    return (
      <div className="py-5 my-5 py-md-2 my-md-0">
        <SEO
          title={'Gojek Careers: Business Intelligence Engineer'}
          description={
            'A Business Intelligence Engineer’s objective is to facilitate the flow of quality data to the data warehouse and maintain its integrity and reliability so that analysts and business users can use reliable data to make decisions. BigQuery is our current data warehouse solution where we gather the data from all of GOJEK’s microservices for better data discovery experience and to get new insight for business analysis. We use Airflow as a scheduler and dependency management solution for all BI jobs at various frequencies. Plus Google Deployment Manager and Docker for provisioning and application management solution.'
          }
          url={this.getUrl()}
        />
        {/* )}
        {jobData === null && ( */}
        {/* <div
          className="d-flex flex-row justify-content-center align-items-center"
          style={{ height: '50vh' }}
        >
          <i className="fa text-green fa-spinner fa-2x fa-spin" />&nbsp;
          <p className="font-xl-l maison-bold mb-0">Loading...</p>{' '}
        </div> */}
        {/* )} */}
        {jobData !== null && (
          <div className={' col-12 col-md-8 mx-auto mt-4 mb-0 px-2 pt-5'}>
            {this.getCurrentWidth() < 768 ? (
              <Modal
                style={{
                  width:
                    this.getCurrentWidth() !== null &&
                    this.getCurrentWidth().toString(),
                  height:
                    this.getCurrentHeight() !== null &&
                    this.getCurrentHeight().toString(),
                }}
                open={this.state.visible}
                onClose={() => {}}
                center
              >
                {jobData !== null && (
                  <div
                    style={{
                      maxHeight: this.getCurrentHeight(),
                      overflowY: 'scroll',
                    }}
                  >
                    <div className="">
                      <div
                        style={{
                          top: '40px',
                          left: '0',
                          zIndex: '99',
                          boxShadow: '1px 7px 14px -5px rgba(0,0,0,.32)',
                        }}
                        className="w-100 position-fixed bg-white py-4 "
                      >
                        <div className="d-flex flex-row ">
                          <h6 className=" px-4 roboto-regular font-md  text-dark ">
                            {jobData.text}
                          </h6>
                          {/* <i
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
                      /> */}
                        </div>

                        <div className="d-flex flex-row flex-wrap roboto-black font-xs text-uppercase">
                          <span className="pl-4  text-green  col-">
                            {jobData.categories.location}
                          </span>
                          <span className="pl-4  text-black  col-">
                            {jobData.categories.team}
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
                          <Description {...this.props} job={jobData} />
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
                            jobData.hostedUrl +
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
                  </div>
                )}
              </Modal>
            ) : (
              jobData !== null && (
                <React.Fragment>
                  <h3 className="d-none d-md-block text-center text-black maison-bold">
                    {jobData.text}
                  </h3>

                  <div
                    style={{
                      minHeight:
                        this.getCurrentWidth() >= 768 ? '95px' : '90px',
                      borderRadius: '10px',
                    }}
                    className={` scroll  d-flex flex-column flex-wrap justify-content-center careers-position careers-position-unhighlight border-success py-3 mb-5`}
                  >
                    <h6 className=" px-4 roboto-regular font-sm text-dark ">
                      {jobData.text}
                    </h6>
                    <div className="d-flex flex-row flex-wrap roboto-black font-xs text-uppercase">
                      <span className="pl-4  text-green  col-">
                        {jobData.categories.location}
                      </span>
                      <span className="pl-4  text-black  col-">
                        {jobData.categories.team}
                      </span>
                    </div>
                    <div>
                      {
                        <div className="pl-4 pt-3">
                          <div className="row justify-content-between align-items-center pl-4">
                            <a
                              target="_blank"
                              href={
                                jobData.hostedUrl +
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
                                {getShareButton(jobData)}
                              </div>
                            }
                          </div>

                          {/* // <button className="btn btn-primary">sdf</button> */}
                          {/* {console.log('sdfdsfdfdsf', window.location.href)} */}
                          <Description {...this.props} job={jobData} />
                          <div className="d-block text-center" />
                        </div>
                      }
                      <div className="w-100 text-center">
                        <a
                          target="_blank"
                          href={
                            jobData.hostedUrl +
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
                  </div>
                </React.Fragment>
              )
            )}
          </div>
        )}
      </div>
    )
  }
}
export default JobDescription
