import React from "react"

const Heading = props => {
  return (
    <section className="bg-green first-section">
      <div className="container">
        <h1 className="h2 font-xl-x py-5 text-center text-white">
          {props.heading}
        </h1>
      </div>
    </section>
  )
}

export default Heading
