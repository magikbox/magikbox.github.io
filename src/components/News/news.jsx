import React, { Component } from 'react'

import data from './data.json'
import Card from './card'

class LatestNews extends Component {
  render() {
    const { news } = data
    const { type } = this.props

    return (
      <section className="py-4 ">
        <div className="container">
          <div className="row">
            {news.data[type].map((latestNews, key) => (
              <Card data={latestNews} key={key} />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default LatestNews
