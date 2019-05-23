import React, { Component } from 'react'
import data from '../data.json'
import Parser from 'html-react-parser'

class Description extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   categoryId: '1',
    //   openPositionId: 'null',
    // }
  }

  render() {
    const { job } = this.props
    // const { positionData } = this.props
    // const applyData = {
    //   id: positionData[0].id,
    //   path: positionData[0].id,
    //   name: positionData[0].text,
    //   place: positionData[0].categories.location,
    //   jobId: positionData[0].id,
    //   referer: 'https://www.gojek.io/',
    // }
    return (
      <div className="py-5 my-5">
        <p className="pt-4  roboto-bold text-black font-sm">Overview</p>
        <div className=" description-font text-dark col-12 pl-1">
          {Parser(job.description)}
        </div>
        {job.lists[0] !== undefined && (
          <React.Fragment>
            <p className="pt-3 roboto-bold text-black font-sm">
              Responsibilities
            </p>
            <div className=" description-font text-dark col-12 pl-0">
              <ul className="pl-3">
                <div className=" job-points">
                  {Parser(job.lists[0].content)}
                </div>
              </ul>
            </div>
          </React.Fragment>
        )}
        {job.lists[0] !== undefined && (
          <React.Fragment>
            <p className="pt-3 roboto-bold text-black font-sm">Experience</p>
            <div className=" description-font text-dark col-12 pl-0 ">
              <ul className="pl-3">
                <div className=" job-points">
                  {Parser(job.lists[1].content)}
                </div>
              </ul>
            </div>
          </React.Fragment>
        )}
      </div>
      // <div className="px-1 col-12 text-left mb-3">
      //   <div className="container  border-success custom-box-shadow">
      //     <span
      //       onClick={this.props.onClickCloseButton}
      //       className="float-right scroll"
      //     >
      //       <i className="fa fa-times" />
      //     </span>
      //     <div className="row mt-4">
      //       <div className="col-12">
      //         <ul className="nav nav-tabs" id="myTab" role="tablist">
      //           <li>
      //             <a
      //               className={
      //                 'nav-link jd-tab roboto-bold text-uppercase active'
      //               }
      //               id={`#overview-tab`}
      //               data-toggle="tab"
      //               href={`#overview-tab`}
      //               role="tab"
      //               aria-controls={`overview-tab`}
      //               aria-selected="true"
      //             >
      //               Overview
      //             </a>
      //           </li>
      //           <li>
      //             <a
      //               className={'nav-link jd-tab roboto-bold text-uppercase'}
      //               id={`#responsibilities-tab`}
      //               data-toggle="tab"
      //               href={`#responsibilities-tab`}
      //               role="tab"
      //               aria-controls={`responsibilities-tab`}
      //               aria-selected="true"
      //             >
      //               Responsibilities
      //             </a>
      //           </li>
      //           <li>
      //             <a
      //               className={'nav-link jd-tab roboto-bold text-uppercase'}
      //               id={`#experience-and-skills-tab`}
      //               data-toggle="tab"
      //               href={`#experience-and-skills-tab`}
      //               role="tab"
      //               aria-controls={`experience-and-skills-tab`}
      //               aria-selected="true"
      //             >
      //               Experience &amp; Skills
      //             </a>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>

      //     <div className="tab-content" id="myTabContent">
      //       <div
      //         className={'tab-pane fade show active'}
      //         id={`overview-tab`}
      //         role="tabpanel"
      //         aria-labelledby={`overview-tab`}
      //       >
      //         <section className="roboto-regular">
      //           <div className="container">
      //             <div className="row justify-content-center">
      //               <div className="col-12 pt-4 description-font">
      //                 {Parser(positionData[0].description)}
      //               </div>
      //             </div>
      //           </div>
      //         </section>
      //       </div>

      //       <div
      //         className={'tab-pane fade show'}
      //         id={`responsibilities-tab`}
      //         role="tabpanel"
      //         aria-labelledby={`responsibilities-tab`}
      //       >
      //         <section className="roboto-regular">
      //           <div className="container">
      //             <div className="row justify-content-center">
      //               <div className="col-12 row pt-4 description-font">
      //                 <ul className="">
      //                   <div className=" job-points">
      //                     {positionData[0].lists[0] !== undefined &&
      //                       Parser(positionData[0].lists[0].content)}
      //                   </div>
      //                 </ul>
      //               </div>
      //             </div>
      //           </div>
      //         </section>
      //       </div>

      //       <div
      //         className={'tab-pane fade show'}
      //         id={`experience-and-skills-tab`}
      //         role="tabpanel"
      //         aria-labelledby={`experience-and-skills-tab`}
      //       >
      //         <section className="roboto-regular">
      //           <div className="container">
      //             <div className="row justify-content-center">
      //               <div className="col-12 row pt-4 description-font">
      //                 <ul className="">
      //                   <div className=" job-points">
      //                     {positionData[0].lists[1] !== undefined &&
      //                       Parser(positionData[0].lists[1].content)}
      //                   </div>
      //                 </ul>
      //               </div>
      //             </div>
      //           </div>
      //         </section>
      //       </div>
      //     </div>

      //     <div className="d-block text-center">
      //       <a
      //         target="_blank"
      //         href={
      //           positionData[0].hostedUrl +
      //           `/apply?lever-source[]=${localStorage.getItem('source')}`
      //         }
      //         className="apply btn btn-success px-5 apply  my-5"
      //       >
      //         APPLY FOR THIS JOB{' '}
      //       </a>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default Description
