import React from "react"

const TechStack = props => {
  const { data } = props
  return (
    <div className="col-md-2 col-4 pt-4 text-center">
      <img
        className="img-fluid mx-auto "
        src={data.image}
        title={data.title}
        alt={data.title}
      />
    </div>
  )
}

export default TechStack
