import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import styled from 'styled-components'
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import Footer from 'components/Footer'
import PageTitle from 'components/PageTitle'

import '../css/zenburn.css'

const Content = styled(
  (props) =>
    <div
      className={props.className}
      dangerouslySetInnerHTML={{ __html: props.body }}
    />
  )`
    img {
      border-radius: 10px;
    }
  `

const PostTitle = styled(
  (props) =>
    <h3 className={props.className}>
      {props.title}
      {props.sub &&
        <div style={{borderTop: '1px solid #aaa', width: '60%', margin: 'auto'}}>
          <small className='mute'>{props.sub}</small>
        </div>
      }
    </h3>
  )`
    font-weight: 100;
    margin: 40px 0;
    text-align: center;
  `
class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <div className="markdown">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <PageTitle link='/'>Articles</PageTitle>
        <PostTitle title={post.title} sub={post.sub} />

        <Content body={post.body} />

        <em
          className='mute'
          style={{
            display: 'block',
            marginBottom: rhythm(1.5),
          }}
        >
          Posted {moment(post.date).format('MMMM D, YYYY')}
        </em>
        <ReadNext post={post} pages={route.pages} />
        <Footer />
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
