import React from 'react'
import moment from 'moment'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import Helmet from "react-helmet"
import access from 'safe-access'
import styled from 'styled-components'
import { config } from 'config'
import include from 'underscore.string/include'
import Footer from 'components/Footer'

const _Entry = (props) =>
  <div className={props.className}>
    <Link
      to={prefixLink(props.page.path)}
    >
      <div>
        <small className='mute'>
          {moment(props.page.data.date).format('MMMM D, YYYY')}
        </small>
      </div>
      <h3>{props.title}</h3>
      <div className='sep' />
      {<div className='sub'><small>{props.sub || ' . '}</small></div>}
    </Link>
  </div>

const Entry = styled(_Entry)`
  cursor: pointer;
  margin: 0 0 3px;
  padding: 30px;
  ${props => props.isFirst && 'border-radius: 10px 10px 0 0;' }
  ${props => props.isLast  && 'border-radius: 0 0  10px 10px;' }
  text-align: center;
  background: transparent;
  background: white;
  background: #f8f8f8;
  transition-duration: 0.4s;
  &:hover {
    background: transparent;
    background: white;
  }
  a {
    // color: #666;
  }
  .sep {
    width: 20%;
    transition-duration: 0.5s;
    margin: auto;
    background: transparent;
    height: 1px;
  }
  &:hover .sep {
    transition-duration: 0.4s;
    width: 60%;
    background: #333;
  }
  h3 {
    font-weight: 100;
    margin: 0;
  }
  .sub {color: gray}
`

class BlogIndex extends React.Component {
  render () {
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    const posts = sortedPages.filter((page) => access(page, 'file.ext') === 'md' && !include(page.path, '/404'))
    const entries = posts.map((page, idx) => {
      const title = access(page, 'data.title') || page.path
      const sub = access(page, 'data.sub') || ''
      const isFirst = idx === 0 ? true : false
      const isLast = idx === posts.length - 1 ? true : false
      return <Entry title={title} sub={sub} page={page} isFirst={isFirst} isLast={isLast} />
    })
    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            {"name": "description", "content": "Sample blog"},
            {"name": "keywords", "content": "blog, articles"},
          ]}
        />

        <div style={{marginBottom: 40}}>
          {entries}
        </div>


        <Footer />
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
