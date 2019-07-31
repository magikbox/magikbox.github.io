import React, { Component } from 'react'
import { Link } from 'react-scroll'

class Menu extends Component {
  render() {
    const { data, currentPage } = this.props

    return (
      <li
        className={
          `mx-2 header-menu nav-item ${data.type === 'dropdown' &&
            'dropdown'}` +
          (currentPage === data.link ||
          (~currentPage.indexOf('/careers/') && data.name === 'Careers') ||
          ((currentPage === '/gojek-expansion/' ||
            currentPage === '/go-viet/') &&
            data.name === 'News')
            ? 'active'
            : '')
        }
      >
        {data.src !== 'gomakeimpact' &&
          data.src !== 'superapp' &&
          (data.type === 'dropdown' ? (
            <React.Fragment>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {data.options.map((item, i) => {
                  return (
                    <a
                      key={i}
                      className="dropdown-item navbar-dropdown-item text-muted"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  )
                })}
              </div>
            </React.Fragment>
          ) : (
            <a
              className={
                data.type === 'button'
                  ? `header-btn btn btn-success rounded-1 maison-bold green-apply-btn`
                  : 'nav-link'
              }
              href={data.link}
              target={data.type === 'externalLink' ? '_blank' : null}
            >
              {data.name}
              {currentPage === data.link ? (
                <span className="sr-only">(current)</span>
              ) : (
                ''
              )}
              {data.type === 'externalLink' && (
                <img width="18px"
                  className="img-fluid pb-1"
                  src="../../../../images/logo-gif.gif"
                />
              )}
            </a>
          ))}
        {(data.src === 'gomakeimpact' || data.src === 'superapp') && (
          <Link
            to={data.link}
            spy={true}
            smooth={true}
            className="nav-link text-success scroll"
            offset={-50}
          >
            {data.name}
          </Link>
        )}
      </li>
    )
  }
}

export default Menu
