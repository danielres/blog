import React from 'react'
import { Link } from 'react-router'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'

class Bio extends React.Component {
  render () {
    return (
      <div
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={prefixLink('/static/img/profile-pic.jpg')}
          alt={`author ${config.authorName}`}
          width="46"
          height="46"
          style={{
            float: 'left',
            marginRight: rhythm(1/4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '100%',
            border: '2px solid #f6f6f6',
          }}
        />
        <div
          style={{ marginLeft: 70}}
        >
          Crafted by <strong>{config.authorName}</strong> who lives and works in Berlin building useful things.
          {' '}
          <Link className='text-link' to='/about/'>You should follow him on social media</Link>.
        </div>
      </div>
    )
  }
}

export default Bio
