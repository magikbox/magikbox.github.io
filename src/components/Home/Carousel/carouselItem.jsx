import React from "react"

const CarouselItem = props => {
  const { data } = props

  var borderStyle = {
    borderBottom: "2px solid white",
  }

  return (
    <div className={"carousel-item " + (data.active === true ? "active" : "")}>
      <picture>
        <source
          className="relative-position"
          media="(max-width: 425px)"
          srcSet={data.responsiveImage}
        />
        <img className="img-fluid" src={data.image} alt={data.alt} />
      </picture>

      <div className="carousel-caption col-9 col-xl-6 col-md-8 text-md-left text-center mt-md-5">
        <p className="font-lg absolute-caption neosans-light text-white mb-0">
          {data.firstLine}
          <br /> {data.secondLine}
          <br />
          <a
            className="banner-link text-white"
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            style={borderStyle}
          >
            <span className="font-lg raleway-bold py-1">{data.linkText}</span>
          </a>
        </p>
      </div>
    </div>
  )
}

export default CarouselItem
