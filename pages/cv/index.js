import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import _Envelope from 'react-icons/lib/fa/envelope'
import CvLink from './CvLink'

const Envelope = styled(_Envelope)`
  color: #999;
  font-size: 30px;
  margin-right: 10px;
  position: relative;
  top: -2px;
`


const entries = [
  {}
]

const Portrait = styled(
    (p) =>
      <div className={p.className}>
        <img src='portrait.jpg' alt='' />
      </div>
  )`
  text-align: center;
  img {
    width: 150px;
    border-radius: 100%;
    margin-bottom: 0.5em;
  }
  `

const PageTitle = styled(
  (p) =>
    <h2 className={p.className}>
      Daniel Reszka, 37
      <div>
        <small>Full-stack developer <br /><small>(RoR+React/Redux/nodeJS)</small></small>
      </div>
    </h2>
)`
  font-weight: normal;
  text-align: center;
  line-height: 1.2;
  div {
    line-height: 1;
  }
  font-weight: normal;
  margin: 0 0 0.8em;
  small {
    color: gray;
  }

`

const Intro = styled(
  (p) =>
    <p className={p.className}>
      <div>I build APIs, responsive websites and web apps</div>
      <div>I'm fluent in React + Redux + Rails</div>
    </p>
  )`
  font-weight: normal;
  text-align: center;
  line-height: 1.4;
  `

const Contents = styled(
  (p) =>
    <div className={p.className}>
      <Portrait />
      <PageTitle />
      <Intro />
      <div style={{textAlign: 'center'}}>
        <p className='pdf-text'>My CV</p>
        <div>
          <CvLink />
          <small className='mute'>
            ({moment('2017-02-15').format('MMM D, YYYY')})
          </small>
        </div>
        <hr />
      </div>
      <div className='list'>
        <p>You might also like to visit these pages</p>
        <div><a className='text-link' href='/'>Blog</a></div>
        <div><a className='text-link' href='/dev/'>Programming & Design</a></div>
        <div><a className='text-link' href='/gallery/'>Gallery</a></div>
        <div><a className='text-link' href='/about/'>About</a></div>
      </div>
      </div>

  )`
    background: white;
    padding: 3em 0 4em;
    border-radius: 20px;
    // box-shadow: 0 5px 30px rgba(0,0,0,0.2);
    .list {
      text-align: center;
      p {
        margin-bottom: 1em;
      }
    }
    .pdf-text {
      margin: 2.5em 0 0.25em;
    }
    hr {
      margin: 3.5em 10%;
    }
  `

class CV extends React.Component {
  render () {
    return (
      <Contents />
    )
  }
}


export default CV
