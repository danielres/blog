import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import styled from 'styled-components'
import Footer from 'components/Footer'
import _Envelope from 'react-icons/lib/fa/envelope'
import _Check from 'react-icons/lib/fa/check'
import FaGithub from 'react-icons/lib/fa/github'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import FaFlickr from 'react-icons/lib/fa/flickr'
import MdInfo from 'react-icons/lib/md/info'
import PageTitle from 'components/PageTitle'


const I = styled.span`
  color: #666;
  font-size: 24px;
`

const C = styled(_Check)`
  color: #595;
  font-size: 15px;
  margin-left: -20px;
`

const Envelope = styled(_Envelope)`
  margin-left: -29px;
  margin-right: 7px;
  color: #999;
  font-size: 60px;
  padding: 10px;
  border-radius: 20%;
`

const Portrait = styled((p) => <div className={p.className}><img width={150} height={150} {...p} src='portrait.jpg' /></div>)`
  text-align: center;
  @media screen and (min-width: 480px) {
    float: right;
    margin-right: 0px;
    width: 200px;
    height: 200px;
    margin-top: 40px;
  }
  img {
    margin-top: 0;
    border-radius: 100%;
    padding: 0;
    border: 2px solid #6DB4F5;
    background: #6DB4F5;
    transform: rotate(9deg);
  }
`

const BorderLeft = styled.div`
    border-left: 3px solid #ddd;
    padding-left: 20px;
    margin-bottom:20px;
`

const S = styled.span`
  @media screen and (min-width: 480px) {
    position: relative;
    left: -29px;
  }
  margin-top: 20px;
  display: inline-block;
  text-align: center;
  color: #f6f6f6;
  background: #999;
  border-radius: 20%;
  padding: 5px 10px 8px;
  line-height: 45px;
  width: 60px;
  margin-right: 15px;
  font-size: 40px;
  transition-duration: 0.4s;
    &:hover {
      background: #5790C4;
      color: white;
    }
  a {
    color: inherit;
  }
  position: relative;
  transition-duration: 0.2s;
  top: 0;
  box-shadow: 0 0 0 rgba(0,0,0,0);
  &:hover {
    top: -5px;
    box-shadow: -0px 10px 10px rgba(0,0,0,0.2);
  }
`

class Page extends React.Component {
  render () {
    return (
      <div>
        <PageTitle>About</PageTitle>

        <Portrait />

        <BorderLeft>
          Daniel Reszka is a:<br />
          <div
            style={{ paddingLeft: 40, margin: '10px 0'}}
          >
            <C /> <Link className='text-link' to={prefixLink('/dev/')}>Full-stack developer</Link> <small style={{color: 'gray'}}> (React / NodeJS / RoR)</small><br />
            <C /> <Link className='text-link' to={prefixLink('/gallery/')}>Digital artist</Link> <br />
            <C /> Freelancer<br />
            <C /> Minimalist<br />
            <C /> NLP master practitioner<br />
            <C /> Coach for IT teams and <br />project leaders
          </div>

          <p>living in Berlin, Germany</p>

        </BorderLeft>

        <p>
          <Envelope />

          <a
            href="https://docs.google.com/forms/d/1BxhAu46f-qdPS-SDYsdF3RS1W1yKR2mkSKy0K7OXLoI/viewform"
            target="_blank"
            rel="external"
            className="text-link"
          >
            Ask me anything
          </a>
        </p>

        <BorderLeft>
          Phone: +49 (0) 1575 160 1005<br />
          VAT: DE 298 753 316
        </BorderLeft>

        <S>
          <a title="github.com/danielres" href="https://www.github.com/danielres" target="_blank" rel="external">
            <FaGithub />
          </a>
        </S>

        <S>
          <a title="twitter.com/pixarea" href="https://twitter.com/pixarea" target="_blank" rel="external">
            <FaTwitter />
          </a>
        </S>

        <S>
          <a title="facebook.com/daniel.reszka.58" href="https://www.facebook.com/daniel.reszka.58" target="_blank" rel="external">
            <FaFacebook />
          </a>
        </S>

        <S>
          <a title="linkedin.com/in/danielres" href="https://be.linkedin.com/in/danielres" target="_blank" rel="external">
            <FaLinkedin />
          </a>
        </S>

        <S>
          <a title="flickr.com/photos/pixarea" href="https://www.flickr.com/photos/pixarea/albums" target="_blank" rel="external">
            <FaFlickr />
          </a>
        </S>

        <S>
          <a title="about.me/daniel.r" href="https://about.me/daniel.r" target="_blank" rel="external">
            <MdInfo />
          </a>
        </S>


      </div>
    )
  }
}

export default Page
