import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `white`,
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem`,
      }}
    >
      <p style={{ margin: `0rem` }}>
        <Link
          to="blogs"
          style={{
            color: `#282c2a`,
            fontSize: `16px`,
            textDecoration: `none`,
            padding: `0.5rem`,
          }}
        >
          Blog
        </Link>
        <Link
          to="/contact"
          style={{
            color: `#282c2a`,
            fontSize: `16px`,
            textDecoration: `none`,
            padding: `0.5rem`,
          }}
        >
          Contact
        </Link>
      </p>
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: `0 auto`,
        maxWidth: 960,
        padding: `3rem 1.2rem`,
      }}
    >
      <p style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#282c2a`,
            fontSize: `48px`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </p>
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
