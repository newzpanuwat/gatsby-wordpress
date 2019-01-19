import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `#282c2a`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `3rem 1.2rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
        <h3 style={{ margin: `0rem`, float: "left" }}>
          <Link
            to="blogs"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            Blog
        </Link>
          <Link
            to="/contact"
            style={{
              color: `white`,
              textDecoration: `none`,
              padding: `1.5rem`
            }}
          >
            Contact
        </Link>
        </h3>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
