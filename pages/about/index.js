import React from 'react'
import styled from 'styled-components';
import Footer from 'components/Footer'
import _Envelope from 'react-icons/lib/fa/envelope'
import _Check from 'react-icons/lib/fa/check'
import FaGithub from 'react-icons/lib/fa/github'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import FaFlickr from 'react-icons/lib/fa/flickr'
import MdInfo from 'react-icons/lib/md/info'

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
  margin-left: -22px;
  margin-right: 15px;
  color: white;
  background: #999;
  font-size: 50px;
  padding: 10px;
  border-radius: 20%;
`

const Portrait = styled((p) => <img {...p} src='portrait.jpg' />)`
  border-radius: 100%;
  padding: 0;
  float: right;
  margin-top: 90px;
`

const BorderLeft = styled.div`
  border-left: 3px solid #ddd;
  padding-left: 20px;
  margin-bottom:20px;
`

class Page extends React.Component {
  render () {
    return (
      <div>
        <Portrait />

        <BorderLeft>
          Daniel Reszka is a:<br />
          <div
            style={{ paddingLeft: 40, margin: '10px 0'}}
          >
            <C /> Full-stack developer <small>(mainly: React / RoR)</small><br />
            <C /> Freelancer<br />
            <C /> Minimalist<br />
            <C /> NLP master practitioner<br />
            <C /> Coach for IT teams and <br />project leaders
          </div>

          living in Berlin, Germany
        </BorderLeft>



        <p>
          <Envelope />

          <a
            href="https://docs.google.com/forms/d/1BxhAu46f-qdPS-SDYsdF3RS1W1yKR2mkSKy0K7OXLoI/viewform"
            target="_blank"
            rel="external"
          >
            Ask me anything
          </a>
        </p>

        <p
          style={{ borderLeft: '3px solid #ddd', paddingLeft: 20}}
        >
          <I><FaGithub />   </I> <a href="https://www.github.com/danielres" target="_blank" rel="external">github.com/danielres</a><br />
          <I><FaTwitter />  </I> <a href="https://twitter.com/pixarea" target="_blank" rel="external">@pixarea</a><br />
          <I><FaFacebook /> </I> <a href="https://www.facebook.com/daniel.reszka.58" target="_blank" rel="external">Facebook</a><br />
          <I><FaLinkedin /> </I> <a href="https://be.linkedin.com/in/danielres" target="_blank" rel="external">LinkedIn</a><br />
          <I><FaFlickr />   </I> <a href="https://www.flickr.com/photos/pixarea/" target="_blank" rel="external">Flickr</a><br />
          <I><MdInfo />     </I> <a href="about.me/daniel.r">About.me</a><br />
          +49 (0) 1575 160 1005<br />
          VAT: DE 298 753 316
        </p>

      </div>
    )
  }
}

export default Page
