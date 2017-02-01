import React from 'react'
import Footer from 'components/Footer'
import _IGithub from 'react-icons/lib/fa/github'

const IGithub = () =>
  <span style={{fontSize: '170%', color: 'gray'}}>
    <_IGithub />
  </span>

const entries = [
  {
    name: 'React-redux-rails-oauth-boilerplate <br />',
    desc: `An open-source boilerplate for apps with decoupled frontend and backend
           using token authentication and Facebook as an auth provider. <br />
           Allows faster development of apps based on this stack.<br />
           Uses React, Redux, Redux sagas, Rails 5, Services,...`,
    tags: ['React', 'Redux', 'Redux-sagas', 'Oauth', 'Rails', 'NodeJS', 'Rspec', 'TDD'],
    links: {
      github: 'danielres/react-redux-rails-oauth-boilerplate',
    }
  },
  {
    name: 'Marketplace',
    desc: 'A platform to improve efficiency and ease self-management in companies organized in a flat hierarchy (holacracy).',
    tags: ['Rails', 'Pure Ruby', 'AngularJS', 'Rspec', 'TDD'],
    links: {
      github: 'danielres/maketplace',
    }
  },
  {
    name: 'Expresto',
    desc: 'A collaborative and social platform to learn and share idiomatic expressions in many languages.',
    tags: ['Rails', 'Rspec', 'TDD', 'I18n'],
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

const entryStyle = { padding: '20px 20px 1px', background: 'white', marginBottom: 20, borderRadius: 10}
const entryTitleStyle = { fontWeight: 'normal', marginTop: 0}
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
              <p>
                <IGithub />
                {' '}
                <a href={`https://github.com/${e.links.github}`}>{e.links.github}</a>
              </p>
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
