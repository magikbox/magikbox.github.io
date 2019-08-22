import React from "react"
import { Link } from "@reach/router"

const departmentData = [
  {
    label: "Engineering",
    imageLink: "../../images/careers/department/Engineering.png",
    departmentName: "engineering",
  },
  {
    label: "People & Culture",
    imageLink: "../../images/careers/department/people-and-culture.png",
    departmentName: "people-and-culture",
  },
  {
    label: "Science",
    imageLink: "../../images/careers/department/science.png",
    departmentName: "science",
  },
  {
    label: "Product",
    imageLink: "../../images/careers/department/product.png",
    departmentName: "product",
  },

  {
    label: "Program Management",
    imageLink: "../../images/careers/department/Productmanagement.png",
    departmentName: "program-management",
  },
]

export const CareerDepartment = props => {
  return (
    <section className="pb-5">
      <h3
        className={
          props.color !== undefined
            ? "text-center text-white neosans-regular font-xl-x my-5 text-white"
            : "text-center text-success raleway-bold Fmy-5 text-success"
        }
      >
        Choose a Department
      </h3>
      <div className="container px-0 pb-3 d-none d-md-block">
        <div className="d-flex flex-row flex-wrap justify-content-center my-3 col-lg-9 col-md-12 mx-auto">
          {departmentData.map((data, i) => {
            return (
              <div key={i} className=" col-md-4 col-6 text-center my-2  ">
                <Link
                  to={`/all-open-positions?d=${data.departmentName}`}
                  className={
                    props.color !== undefined
                      ? "super-app-location px-4 scroll d-flex flex-column justify-content-center align-items-center"
                      : "career-department px-4 scroll d-flex flex-column justify-content-center align-items-center"
                  }
                  style={{ minHeight: "193px" }}
                >
                  <div>
                    <img
                      alt={"department img"}
                      className="img-fluid"
                      src={data.imageLink}
                    />
                    <p
                      className={
                        props.color !== undefined
                          ? "neosans-bold font-md text-uppercase my-1 text-white"
                          : "neosans-bold font-md text-uppercase my-1 text-dark"
                      }
                    >
                      {data.label}
                    </p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className="d-md-none pt-4">
        {departmentData.map((data, i) => {
          return (
            <div key={i}>
              <Link
                to={`/all-open-positions?d=${data.departmentName}`}
                className="roboto-bold font-md text-center text-dark d-block"
              >
                {data.label}
              </Link>
              <hr />
            </div>
          )
        })}
      </div>
    </section>
  )
}

// export default CareerDepartment
