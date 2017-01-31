import React from 'react'
import Footer from 'components/Footer'

const entries = [
  {
    name: 'React-redux-rails-oauth-boilerplate <br />',
    desc: 'An open-source boilerplate with decoupled frontend/backend apps, featuring React, Redux, Redux sagas, Rails 5, Trailblazer... <br />Uses token authentication and Facebook as an auth provider.',
    tags: ['React', 'Redux', 'Redux-sagas', 'Oauth', 'Rails', 'NodeJS', 'Rspec', 'TDD'],
    links: {
      github: 'danielres/react-redux-rails-oauth-boilerplate',
    }
  },
  {
    name: 'Marketplace',
    desc: 'A platform to improve internal communication, transparency and decision-making in companies following the principles of self-management.',
    tags: ['Rails', 'Pure Ruby', 'AngularJS', 'Rspec', 'TDD'],
    links: {
      github: 'danielres/maketplace',
    }
  },
  {
    name: 'Expresto',
    desc: 'Collaborative platform to share and learn idiomatic expressions in various languages.',
    tags: ['Rails', 'Rspec', 'TDD'],
    pic: 'expresto.jpg',
    links: {
      github: 'danielres/expresto_BDD',
    }
  },
  {
    name: 'Spirales',
    tags: ['Rails', 'RefineryCMS', 'Custom Events Engine', 'Paypal'],
    desc: 'Offical website for an association of psychotherapists.',
    pic: 'spirales.jpg',
    links: {
      pic: 'http://www.spirales.info/',
    }
  },
  {
    name: 'Nathalie Champougny',
    tags: ['Rails', 'RefineryCMS'],
    desc: 'Personal website of psychologist Nathalie Champougny.',
    pic: 'psynath.png',
    links: {
      pic: 'http://www.psynath.com/',
    }
  },
  {
    name: 'Kizedec',
    tags: ['Rails', 'RefineryCMS'],
    desc: 'Personal website of life-coach Jean-Luc Champougny.',
    pic: 'kizedec.png',
    links: {
      pic: 'http://www.kizedec.com/',
    }
  },
  {
    name: 'Association C.G. Jung and M.L. Von Franz ',
    desc: 'Offical website for the association.',
    tags: ['Rails', 'RefineryCMS'],
    pic: 'mlvf.png',
  },
  {
    name: 'Wymeditor',
    pic: 'wymeditor.jpg',
  },
  {
    name: 'Tempo',
    desc: 'Simplest possible sinatra app to generate reports for the very nice <a href="https://github.com/projecthamster/hamster" target="_blank">hamster time-tracker</a>.',
    tags: ['Sinatra', 'Ruby'],
    links: {
      github: 'danielres/tempo',
    }
  },
  {
    name: 'Pixarea Blog',
    pic: 'pixarea-blog.jpg',
  },
  {
    name: 'Pixarea',
    pic: 'pixarea.jpg',
  },
]

const entryStyle = { borderTop: '1px solid #ccc', paddingBottom: 30}
const entryTitleStyle = { fontWeight: 'normal'}
const entryTagsStyle = { textTransform: 'uppercase'}
const entryTagStyle = { marginLeft: '1.5em', fontSize: '80%', color: 'gray'}

class Gallery extends React.Component {
  render () {
    return (
      <div>
        {entries.map((e) =>
          <div style={entryStyle}>
            <h3 style={entryTitleStyle}>
              <span dangerouslySetInnerHTML={{ __html: e.name }} />
              {e.tags  && <small style={entryTagsStyle}>{e.tags.map((t) => <span style={entryTagStyle}>{t}</span>)}</small>}
            </h3>

            {e.desc &&
              <p dangerouslySetInnerHTML={{ __html: e.desc }} />
            }

            {e.links && e.links.github &&
              <p><a href={`https://github.com/${e.links.github}`}>{e.links.github}</a></p>
            }

            {e.links && e.links.pic
              ? <a href={e.links.pic} tilte='Visit website' target='_blank'>
                  <img src={e.pic} alt={e.name} title={`Project: ${e.name}`} />
                </a>
              : e.pic &&
                <img src={e.pic} alt={e.name} title={`Project: ${e.name}`} />
            }
          </div>
        )}

        <Footer />
      </div>
    )
  }
}

export default Gallery
