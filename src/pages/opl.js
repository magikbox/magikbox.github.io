import React from "react";
import SEO from "../components/seo";
import openPositions from "../components/Careers/opl.json";
import { getSlug } from "../components/Common/utils/getSlug.js";
import { Link } from "react-router-dom";

class Opl extends React.Component {
  getCurrentWidth = () => {
    let screenWidth = null;
    if (typeof window !== `undefined`) {
      screenWidth = window.screen.width;
    }
    return screenWidth;
  };

  getCurrentHeight = () => {
    let screenHeight = null;
    if (typeof window !== `undefined`) {
      screenHeight = window.screen.height;
    }
    return screenHeight;
  };
  render() {
    return (
      <section className="first-section">
        <SEO
          isDynamic={false}
          title="Gojek: Operations Platform"
          description="Operations Platform (aka “OpsPlatform”) builds platforms and
          products for Gojek’s Driver, Merchant, and Customer operations. At
          its core, OpsPlatform bridges the gap between the “Offline World”
          and “Online Gojek”."
          url="https://gojek.io"
        />
        <div className="container-fluid">
          <div className="row align-items-center bg-green">
            <div className="col-md-5 p-md-0 p-5">
              <h1 className="maison-bold text-center text-white">
                Operations Platform
              </h1>
            </div>
            <div className="col-md-7 p-0">
              <div className="bg-dark operations-banner go-jek-work-gradient background-img relative-position" />
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <p className="description-font text-dark">
            Gojek is one of the fastest-growing startup in South East Asia, and
            11th in Fortune’s list of “50 companies that changed the world” in
            2019. It operates in 207 cities in Southeast Asia, across 22
            services that includes on-demand ride, food, payments, logistics,
            and lifestyle services. It does this by enabling 2M+
            driver-partners, 500k+ merchant partners, and 60k+ service partners
            across the sub-continent.
          </p>
          <p className="description-font text-dark">
            Operations Platform (aka “OpsPlatform”) builds platforms and
            products for Gojek’s Driver, Merchant, and Customer operations. At
            its core, OpsPlatform bridges the gap between the “Offline World”
            and “Online Gojek”. Our products span the gamut of the Gojek
            universe - Driver and Merchant onboarding; customer support
            infrastructure for Customers, Merchants and Drivers; Driver care
            operations in walk-in centers; KYC for drivers, merchants and
            customers; and sales technology products to provide critical
            advantages to the merchant sales organization.
          </p>
          <p className="font-weight-bold font-sm">
            What does it translate to in terms of the work OpsPlatform engineers
            are doing? A few examples:
          </p>
          <ul className="description-font text-dark ml-3">
            <li>
              Automating incoming support ticket workflows powered by
              configurable and real-time rule engine
            </li>
            <li>
              Using NLP based Machine Learning to prioritize and efficiently
              resolve incoming support tickets
            </li>
            <li>
              Chatbots for automatically resolving incoming customer and driver
              queries
            </li>
            <li>
              Automated Machine Learning based systems to scan and verify
              incoming customer, driver and merchant documents for KYC
            </li>
            <li>
              Face biometrics systems (face detection, liveness detection) to
              combat fraud
            </li>
          </ul>
          <p className="font-weight-bold font-sm my-3">Tech Stack</p>
          <ul className="description-font text-dark ml-3">
            <li>
              We have running services written in Golang, Ruby on Rails, Python,
              Clojure, and Elixir
            </li>
            <li>
              We power all of the In-App Help on Gojek app (Android and iOS)
            </li>
            <li>
              We use Android to develop apps for assisted onboarding of Merchant
              Partners
            </li>
            <li>
              We enable and host Machine Learning models helping us do
              face-biometrics, document scanning for KYC, ticket prioritization
              etc.
            </li>
            <li>
              We use Big Data technologies to enable our Call Center partners to
              get all the context on incoming queries at their fingertips
            </li>
          </ul>
          <p className="description-font text-dark mt-1">
            We are very open to trying out new technology if it solves our
            business problems most efficiently.
          </p>
          <p className="font-weight-bold description-font my-3 ">
            Intrigued by what you’ve read so far and want to work with us?
            Checkout our current openings across various locations:
          </p>

          {/* {this.state.oplPositions.map((job, key) => ( */}
          <div>
            <div className="d-flex flex-row flex-wrap pb-5">
              {openPositions.data.map((job, i) => {
                return (
                  <div
                    id={job.id}
                    name={job.id}
                    key={i}
                    className="col-12 col-md-6 my-2 mb-0 px-2 col-lg-4"
                  >
                    {/* eslint-disable-next-line */}
                    <Link
                      target="_blank"
                      to={{
                        pathname: `/all-open-positions`,
                        search: `?d=${getSlug(
                          job.categories.department
                        )}&t=${getSlug(job.categories.team)}&p=${job.id}`,
                        state: { jobSelected: job }
                      }}
                      key={i}
                      // onClick={() => this.onClickPositionFromSearch(data)}
                      // className="text-left bg-white-hover-gray border-0 py-2 col-12 scroll"
                    >
                      <div
                        style={{
                          minHeight:
                            this.getCurrentWidth() >= 768 ? "95px" : "90px",
                          borderRadius: "10px"
                        }}
                        className={` scroll  d-flex flex-column flex-wrap justify-content-center careers-position careers-position-unhighlight`}
                      >
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
                        {this.props.location.search.split("=")[3] ===
                          job.id && (
                          <div>
                            {
                              <div className="pl-4 pt-3">
                                <div className="row justify-content-between align-items-center pl-4" />
                                <div className="d-block text-center" />
                              </div>
                            }
                          </div>
                        )}
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Opl;
