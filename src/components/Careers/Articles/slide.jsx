import React from "react"

const Slide = props => {
  const { data } = props

  const bgColor =
    data.theme === "black"
      ? "#2a2b2b"
      : data.theme === "lightblue"
      ? "#99d3d8"
      : "#009944"

  const bgStyle = {
    backgroundColor: bgColor,
    minHeight: "150px",
    fontSize: "30px",
  }

  const pStyle = {
    verticalAlign: "middle",
  }

  return (
    <div className="card rounded-0 border-0">
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        style={pStyle}
      >
        <div
          className="card-body  text-md-left text-center d-flex align-items-center justify-content-center"
          style={bgStyle}
        >
          <p className="raleway-bold text-black font-lg text-white">
            {data.title}
          </p>
        </div>
      </a>
    </div>
  )
}

export default Slide
