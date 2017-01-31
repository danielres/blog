import React from 'react'
import { Link } from 'react-router'
import { Container } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, scale } from 'utils/typography'
import { config } from 'config'

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    const header =
      <div>
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginRight: 20,
            display: 'inline-block',
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={prefixLink('/')}
          >
            {config.blogTitle}
          </Link>
        </h3>

        <Link
          to={prefixLink('/dev/')}
        >
          Dev
        </Link>
        {' '}
        <Link
          to={prefixLink('/gallery/')}
        >
          Gallery
        </Link>
        {' '}
        <Link
          to={prefixLink('/about/')}
        >
          About
        </Link>
      </div>

    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3/4)}`,
        }}
      >
        {header}
        {children}
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
