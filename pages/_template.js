import React from 'react'
import { Link as _Link } from 'react-router'
import { Container } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, scale } from 'utils/typography'
import { config } from 'config'
import styled from 'styled-components';
import IHome from 'react-icons/lib/ti/home'
import _ICode from 'react-icons/lib/io/code'
import IPicture from 'react-icons/lib/io/android-color-palette'
import IAbout from 'react-icons/lib/io/android-person'
import './styles.scss'


const ICode = () =>
  <_ICode style={{position: 'relative', left: 1.5}} />

const Link = (props) =>
  <_Link {...props} activeClassName='active' onlyActiveOnIndex={true}/>

const I = styled.span`
  font-size: 30px;
  display: inline-block;
  margin: 30px 10px 30px;
  a {
    color: #444;
    box-shadow: none;
    background: transparent;
    padding: 10px 11px;
    border-radius: 100%;
    display: inline-block;
    text-align: center;
    transition-duration: 0.2s;
    &.active,
    &:hover{
      background: white;
    }
  }
`

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    const header =
      <div>
        <div style={{textAlign: 'center'}}>
          <I>
            <Link
              title="Articles"
              to={prefixLink('/')}
            >
              <IHome />
            </Link>
          </I>

          <I>
            <Link
              title="Programming"
              to={prefixLink('/dev/')}
            >
              <ICode />
            </Link>
          </I>

          <I>
            <Link
              title="Creations"
              to={prefixLink('/gallery/')}
            >
              <IPicture />
            </Link>
          </I>

          <I>
            <Link
              title="About"
              to={prefixLink('/about/')}
            >
              <IAbout />
            </Link>
          </I>
        </div>

      </div>

    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3/4)}`,
        }}
      >
        {header}
        <div className='main'>
          {children}
        </div>
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
