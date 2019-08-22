import React from "react"

import Layout from "../components/layout"

const NotFoundPage = props => (
  <Layout location={props.location}>
    <div className="first-section ">
      <img alt="404" src="../images//404.png" className="img-fluid" />
    </div>
  </Layout>
)

export default NotFoundPage
