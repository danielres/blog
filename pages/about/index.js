import React from 'react'
import Footer from 'components/Footer'

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

        <p>
          Full-stack developer<br />
          Freelancer<br />
          Minimalist<br />
          Nomad-ish<br />
          NLP master practitioner<br />
          IT Coach<br />
          Berlin, Germany
        </p>

        <p>
          <i
            class="glyphicon glyphicon-envelope"
            style={{
              marginLeft: '-1.1em',
              color: 'white',
              background: '#aaa',
              padding: 10,
              borderRadius: '100%'
            }}
          >
          </i>
          <a
            href="https://docs.google.com/forms/d/1BxhAu46f-qdPS-SDYsdF3RS1W1yKR2mkSKy0K7OXLoI/viewform"
            target="_blank"
            rel="external"
          >
            Ask me anything
          </a>
        </p>

        <p>
          <a href="https://www.github.com/danielres" target="_blank" rel="external">github.com/danielres</a><br />
          <a href="https://twitter.com/pixarea" target="_blank" rel="external">@pixarea</a><br />
          <a href="https://www.facebook.com/daniel.reszka.58" target="_blank" rel="external">Facebook</a><br />
          <a href="https://be.linkedin.com/in/danielres" target="_blank" rel="external">LinkedIn</a><br />
          <a href="https://www.flickr.com/photos/pixarea/" target="_blank" rel="external">Flickr</a><br />
          <a href="about.me/daniel.r">About.me</a><br />
          +49 (0) 1575 160 1005<br />
          VAT: DE 298 753 316
        </p>

      </div>
    )
  }
}

export default Page
