import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getSlug } from '../../Common/utils/getSlug'
import OpenPositionTeams from '../OpenPositionTeams'
var Scroll = require('react-scroll')
var Element = Scroll.Element
var scroll = Scroll.animateScroll
var scroller = Scroll.scroller
class OpenPositionDepartments extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  //   this method is used to get the teams by using URL
  getTeamsFromURL = () => {
    const departmentSlug = this.props.location.search
      .split('=')[1]
      .split('&')[0]

    const department = this.props.reformatedData.filter((dept, i) => {
      if (getSlug(dept.deptName) === departmentSlug) {
        return dept
      }
    })
    return department[0].teams
  }

  render() {
    return (
      <div>
        {this.props.reformatedData.map((department, i) => {
          return (
            <React.Fragment key={i}>
              <Element
                id={getSlug(department.deptName)}
                name={getSlug(department.deptName)}
                key={i}
              >
                <div className="d-flex flex-row flex-wrap align-items-center justify-content-between pl-0 pr-2">
                  <Link
                    to={{
                      pathname: `/all-open-positions`,
                      search: `${
                        this.props.location.search === ''
                          ? `?d=${getSlug(department.deptName)}`
                          : `${
                              this.props.location.search
                                .split('&')[0]
                                .split('=')[1] === getSlug(department.deptName)
                                ? ``
                                : `?d=${getSlug(department.deptName)}`
                            }`
                      }`,
                      state: { teams: department.teams },
                    }}
                    className="col-md-10 col-6 px-2"
                    replace={true}
                  >
                    <div>
                      <p
                        className={`raleway-bold font-xl-l mb-0 ${
                          getSlug(department.deptName) ===
                          this.props.location.search.split('&')[0].split('=')[1]
                            ? 'text-black'
                            : 'text-muted'
                        } `}
                      >
                        {department.deptName}
                      </p>
                    </div>
                  </Link>
                  <div className=" col- mb-3 mb-md-0">
                    <span className="text-green roboto-bold ">
                      {department.openings + ` `}Openings
                      <Link
                        to={{
                          pathname: `/all-open-positions`,
                          search: `${
                            getSlug(department.deptName) ===
                            this.props.location.search
                              .split('&')[0]
                              .split('=')[1]
                              ? ``
                              : `?d=${getSlug(department.deptName)}`
                          }`,
                        }}
                        className="scroll d-md-none"
                      >
                        {getSlug(department.deptName) ===
                        this.props.location.search
                          .split('&')[0]
                          .split('=')[1] ? (
                          <i
                            style={{ fontSize: '20px' }}
                            className="fa pl-5 fa-minus pt-3 mt-auto text-green"
                          />
                        ) : (
                          <i
                            style={{ fontSize: '20px' }}
                            className="fa pl-5  fa-plus pt-3 mt-auto text-green"
                          />
                        )}
                      </Link>
                    </span>
                  </div>
                </div>
              </Element>
              {console.log('sdfdsfdsfdsfdsfdsffds', this.props.location)}
              {getSlug(department.deptName) ===
                this.props.location.search.split('&')[0].split('=')[1] && (
                <OpenPositionTeams
                  {...this.props}
                  departmentSelected={this.props.departmentSelected}
                  teams={
                    this.props.location.state === undefined
                      ? this.getTeamsFromURL()
                      : this.props.location.state.teams
                  }
                />
              )}

              <hr />
            </React.Fragment>
          )
        })}
      </div>
    )
  }
}

export default OpenPositionDepartments
