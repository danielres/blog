import React from 'react'
import Footer from 'components/Footer'
import Envelope from 'react-icons/lib/fa/envelope'
import Check from 'react-icons/lib/fa/check'
import FaGithub from 'react-icons/lib/fa/github'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import FaFlickr from 'react-icons/lib/fa/flickr'
import MdInfo from 'react-icons/lib/md/info'

const I = (props) =>
  <span
    style={{color: '#666', fontSize: 24}}
  >
    {props.children}
  </span>


const C = (props) =>
  <span
    style={{color: '#595', fontSize: 15}}
  >
    <Check />
  </span>



class Page extends React.Component {
  render () {
    return (
      <div>
        <p>
          <img
            src="portrait.jpg"
            width="240"
            style={{borderRadius: '100%', padding: 0, float: 'right'}}
          />
        </p>

        <p
          style={{ borderLeft: '3px solid #ddd', paddingLeft: 20}}
        >
          Daniel Reszka is a:<br />


          <div
            style={{ paddingLeft: 10, margin: '10px 0'}}
          >
            <C /> Full-stack developer<br />
            <C /> Freelancer<br />
            <C /> Minimalist<br />
            <C /> NLP master practitioner<br />
            <C /> IT Coach
          </div>

          living in Berlin, Germany
        </p>

        <p>
          <Envelope
            style={{
              marginLeft: -22,
              marginRight: 15,
              color: 'white',
              background: '#999',
              fontSize: 50,
              padding: 10,
              borderRadius: '20%'
            }}
          />
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
