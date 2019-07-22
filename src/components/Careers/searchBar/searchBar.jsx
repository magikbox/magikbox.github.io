import React, { Component } from 'react'
import data from '../data.json'
import { Link } from 'react-router-dom'
import { getSlug } from '../../Common/utils/getSlug.js'
var Scroll = require('react-scroll')
var scroller = Scroll.scroller

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
        `/all-open-positions?d=${getSlug(
          result[0].categories.department
        )}&t=${getSlug(result[0].categories.team)}&p=${result[0].id}`
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
                  className="dropdown-menu w-100"
                  aria-labelledby="dropdownMenuButton"
                >
                  <button
                    onClick={() => this.props.onClickLocation('All', -1)}
                    className="dropdown-item "
                    type="button"
                  >
                    All
                  </button>
                  {this.props.places.map((data, i) => {
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
          {this.props.searchResult !== null &&
            this.props.searchResult.length > 0 && (
              <div
                className="col-12 px-0 d-flex flex-row flex-wrap justify-content-center search-result"
                style={{}}
              >
                {this.props.searchResult.map((data, i) => {
                  return (
                    <Link
                      to={{
                        pathname: `/all-open-positions`,
                        search: `?d=${getSlug(
                          data.categories.department
                        )}&t=${getSlug(data.categories.team)}&p=${
                          data.id
                        }`,
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
          <div className="pt-2">
            <Link to="/all-open-positions" className="">
              <u className=" text-green">I'd like to view all open positions</u>
            </Link>
          </div>
        </div>
      </section>
      // <div
      //   className={
      //     'py-5 col-11 mx-auto' +
      //     `${this.props.type === 'careers' ? ` col-md-8 ` : ` col-md-12 `} `
      //   }
      // >
      //   <div className=" d-flex flex-row flex-wrap justify-content-between align-items-center col-md-12 mx-auto">
      //     <div
      //       className={
      //         `text-left px-0` +
      //         `${
      //           this.props.type === 'careers'
      //             ? ` col-lg-12 col-md-8 `
      //             : ` col-12 col-lg-2 col-md-3 text-md-right`
      //         } `
      //       }
      //     >
      //       <h6 className="text-success maison-extrabold font-xl-l mb-0">
      //         Search&nbsp;
      //       </h6>
      //     </div>
      //     <div
      //       className={
      //         `text-left px-0 position-relative ` +
      //         `${
      //           this.props.type === 'careers'
      //             ? ` col-12   `
      //             : ` col-12 col-lg-9 col-md-8`
      //         }`
      //       }
      //     >
      //       <input
      //         onChange={ev => this.props.onChangeInputText(ev)}
      //         type="text"
      //         name="keyword"
      //         value={this.props.inputText}
      //         className="form-control   custom-search bg-gray border-0 py-3 mt-2 "
      //         id="keyword"
      //         placeholder="Ex: Full Stack, Android, iOS, Product, Design, Engineer"
      //       />
      //       <i
      //         className="fa fa-search position-absolute "
      //         style={{
      //           right: '10px',
      //           top: this.getCurrentWidth() < 558 ? '20px' : '25px',
      //         }}
      //       />
      //     </div>
      //     {this.props.type === 'careers' &&
      //       searchResult !== null && (
      //         <div
      //           className="col-12 px-0 d-flex flex-row flex-wrap justify-content-center"
      //           style={{ maxHeight: '150px', overflowY: 'scroll' }}
      //         >
      //           {searchResult.map((data, i) => {
      //             return (
      //               <div
      //                 key={i}
      //                 onClick={() => this.onClickPositionFromSearch(data)}
      //                 className="text-left bg-white-hover-gray border-0 py-2 col-12 scroll"
      //               >
      //                 <span className="roboto-regular font-sm text-dark ">
      //                   {data.text}
      //                 </span>&nbsp;
      //                 <span className="roboto-bold text-success font-sm">
      //                   {data.categories.location}
      //                 </span>
      //               </div>
      //             )
      //           })}
      //         </div>
      //       )}
      //     {this.props.type !== 'careers' && (
      //       <div className="col-12 col-md-3 col-lg-3 text-left d-none d-md-block" />
      //     )}

      //     <div
      //       className={
      //         `d-flex flex-row flex-wrap justify-content-md-start justify-content-center px-0 py-0 py-md-3 ` +
      //         `${
      //           this.props.type === 'careers'
      //             ? ` col-12 ${
      //                 searchResult !== null && searchResult.length !== 0
      //                   ? ' bg-white p-2 '
      //                   : 'bg-transparent'
      //               }`
      //             : ` col-12 col-lg-9 col-md-8`
      //         }`
      //       }
      //     >
      //       <h6
      //         onClick={() => this.props.onClickLocation('All', -1)}
      //         className={
      //           `scroll col- mr-3 roboto-bold d-none d-md-block` +
      //           `${
      //             this.props.locationName === 'All'
      //               ? ` custom-tabs-highlight `
      //               : ` custom-tabs-unhighlight ${this.props.textColor}`
      //           } `
      //         }
      //       >
      //         All
      //       </h6>
      //       {places.map((data, i) => {
      //         return (
      //           <h6
      //             key={i}
      //             onClick={() => this.props.onClickLocation(data, i)}
      //             className={
      //               `scroll col- mr-3 roboto-bold d-none d-md-block` +
      //               `${
      //                 data === this.props.locationName
      //                   ? ` custom-tabs-highlight `
      //                   : ` custom-tabs-unhighlight ${this.props.textColor}`
      //               } `
      //             }
      //           >
      //             {data}
      //           </h6>
      //         )
      //       })}
      //       {searchResult &&
      //       searchResult !== null &&
      //       searchResult.length !== 0 ? (
      //         <React.Fragment>
      //           <span style={{ fontSize: '14px' }} className="roboto-regular">
      //             * Candidates can only apply from their country of origin.{' '}
      //           </span>
      //           <button
      //             onClick={() =>
      //               this.onClickPositionFromSearch(searchResult[0])
      //             }
      //             type="button"
      //             className="btn bg-success btn-sm ml-auto text-white maison-extrabold "
      //           >
      //             Search<i className="fa fa-search pl-3" />
      //           </button>
      //         </React.Fragment>
      //       ) : (
      //         ''
      //       )}
      //     </div>

      //     <div className="d-md-none col-12 px-0 my-3">
      //       <div className="dropdown position-relative">
      //         <button
      //           className="btn btn-block btn-success dropdown-toggle custom-dropdown text-left neosans-regular py-2 font-md "
      //           type="button"
      //           id="dropdownMenuButton"
      //           data-toggle="dropdown"
      //           aria-haspopup="true"
      //           aria-expanded="false"
      //         >
      //           Location: {this.props.locationName}
      //         </button>
      //         <i
      //           className="fa fa-chevron-down position-absolute text-white"
      //           style={{ right: '10px' }}
      //         />
      //         <div
      //           className="dropdown-menu w-100"
      //           aria-labelledby="dropdownMenuButton"
      //         >
      //           <button
      //             onClick={() => this.props.onClickLocation('All', -1)}
      //             className="dropdown-item"
      //             type="button"
      //           >
      //             All
      //           </button>
      //           {places.map((data, i) => {
      //             return (
      //               <button
      //                 key={i}
      //                 onClick={() => this.props.onClickLocation(data, i)}
      //                 className="dropdown-item"
      //                 type="button"
      //               >
      //                 {data}
      //               </button>
      //             )
      //           })}
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    )
  }
}

export default SearchBar
