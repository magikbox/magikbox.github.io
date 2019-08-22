import React from "react"
import data from "../data.json"

const BehindTheScenens = () => {
  const { behindTheScenes } = data

  return (
    <section className="pt-5 pb-1">
      <h1 className="h2 text-center py-3 raleway-extrabold font-xl-l">
        {behindTheScenes.heading}
      </h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 ">
            <p className="text-center font-md roboto-regular ">
              {behindTheScenes.content}
            </p>
          </div>

          {/* <div className="embed-responsive embed-responsive-21by9">
                            <iframe className="embed-responsive-item" src={behindTheScenes.video} allowFullScreen></iframe>
                        </div> */}
        </div>
      </div>
    </section>
  )
}

export default BehindTheScenens
