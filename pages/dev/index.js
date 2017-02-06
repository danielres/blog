import React from 'react'
import styled from 'styled-components'
import Footer from 'components/Footer'
import _IGithub from 'react-icons/lib/fa/github'
import PageTitle from 'components/PageTitle'

const IGithub = () =>
  <span style={{fontSize: '170%', color: 'gray'}}>
    <_IGithub />
  </span>

const entries = [
  {
    name: 'React-redux-rails-oauth-boilerplate <br />',
    desc: `An open-source boilerplate for apps with decoupled frontend and backend
           using token authentication and Facebook as an auth provider. <br />
           Allows faster development of apps based on this stack.<br />`,
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
    name: 'Spirales',
    tags: ['Rails', 'RefineryCMS', 'Custom Events Engine', 'Paypal SDK'],
    desc: `<p>The offical website for a well-being association located near Reims, France.</p>
            <p>This website is built with <a class="text-link" href="http://www.refinerycms.com/" target"_blank">RefineryCMS</a>, and allows the client to have complete control over the contents.</p>
            <p>The association organizes frequent activities, therefore I developed an custom event engine as well as a secure booking
            and online payment system that uses the Paypal API.</p>`,
    pic: 'spirales.jpg',
    links: {
      pic: 'http://www.spirales.info/',
    }
  },
  {
    name: 'WYMeditor',
    pic: 'wymeditor.jpg',
    links: {
      pic: 'http://www.wymeditor.org/',
    },
    desc: `<p>
            Back in 2005, with <a href="http://hovinne.com/" target="_blank" class="text-link">Jean-François Hovinne</a>, we launched a new type of online editor,
            challenging the very concept of existing WYSYWIG editors, and allowing for higher-quality and more reliable output.
           </p>
           <p>
             WYMeditor is still improving and being used and integrated in a
             long and growing list of high-profile websites (see <a href="http://www.wymeditor.org/" class="text-link" target="_blank">Applications using WYMeditor</a>),
             such as
             <a href="http://www.kickstarter.com/" target="_blank" class="text-link">Kickstarter</a> and
             <a href="http://www.policystat.com/" target="_blank" class="text-link">PolicyStat</a>, and content management systems like
             <a href="http://www.refinerycms.com/" target="_blank" class="text-link">RefineryCMS</a>.
           </p>
           <p>
             I don't contribute anymore to WYMeditor, the project is now maintained by
             <a href="https://github.com/winhamwr" target="_blank" class="text-link">Wes Winham</a>
             and other contributors (who are doing an amazing job).
           </p>
           `,
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
    name: 'Expresto',
    desc: 'A collaborative and social platform to learn and share idiomatic expressions in many languages.',
    tags: ['Rails', 'Rspec', 'TDD', 'I18n'],
    pic: 'expresto.jpg',
    links: {
      github: 'danielres/expresto_BDD',
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
    name: 'Tempo',
    desc: 'Simplest possible sinatra app to generate reports for the very nice <a href="https://github.com/projecthamster/hamster" target="_blank">hamster time-tracker</a>.',
    tags: ['Sinatra', 'Ruby'],
    links: {
      github: 'danielres/tempo',
    }
  },
  // {
  //   name: 'Pixarea Blog',
  //   pic: 'pixarea-blog.jpg',
  // },
  // {
  //   name: 'Pixarea',
  //   pic: 'pixarea.jpg',
  // },
]


const Entry = styled.div`
  padding: 20px 20px 1px;
  background: white;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  `

const EntryTitle = styled((p) =>
  <h3 className={p.className}>
    <span
      className='text'
      dangerouslySetInnerHTML={{ __html:  p.text}}
    />
    {p.tags  &&
      <small className='tags'>
        {p.tags.map((t) => <span className='tag'>{t}</span>)}
      </small>
    }
  </h3>
  )`
  font-weight: normal;
  margin-top: 0.2em;
  margin-bottom: 0.8em;
  .text {
    margin-right: 1.5em;
    display: inline-block;
    margin-bottom: 0.5em;
  }
  .tags {
    display: inline-block;
    text-transform: uppercase;
    line-height: 1.2;
  }
  .tag {
    min-width: 5em;
    text-align: center;
    display: inline-block;
    padding: 0 0.5em;
    font-size: 80%;
    color: gray;
    border-left: 1px solid #bbb;
    border-right: 1px solid #bbb;
    margin-right: -1px;
    &:last-child {
    }
  }
  `

const EntryContents = styled(({e, className}) => {
  console.log(e)
  const hasPic = e.pic ? 'hasPic' : ''
  return <div className={`${className}`}>
      <div className='pic'>
        {e.links && e.links.pic
          ? <a href={e.links.pic} tilte='Visit website' target='_blank'>
              <img src={e.pic} alt={e.name} title={`Project: ${e.name}`} />
            </a>
          : e.pic &&
            <img src={e.pic} alt={e.name} title={`Project: ${e.name}`} />
        }
      </div>
      <div className={hasPic}>
        {e.desc && <div className='desc' dangerouslySetInnerHTML={{ __html: e.desc }} /> }

        {e.links && e.links.github &&
          <p className='links'>
            <IGithub />
            {' '}
            <a className='text-link' href={`https://github.com/${e.links.github}`}>{e.links.github}</a>
          </p>
        }
      </div>
    </div>
  })`
    .pic {
      @media screen and (min-width: 480px){
        float: left;
        width: 40%;
      }
      img {
        border: 4px solid transparent;
        border-radius: 10px;
        box-sizing: content-box;
        transition-duration: 0.4s;
        margin-left: -4px;
        &:hover {
          border: 4px solid #58BCFF;
          background: #58BCFF;
        }
      }
    }
    .hasPic .desc,
    .hasPic .links {
      @media screen and (min-width: 480px){
        float: right;
        width: 57%;
      }
    }
    .desc,
    .links {
      line-height: 1.6;
      p {
        margin-bottom: 1.4em
      }
    }
  `

class Gallery extends React.Component {
  render () {
    return (
      <div>
        <PageTitle>Programming</PageTitle>
        {entries.map((e) =>
          <Entry key={e.name}>
            <EntryTitle text={e.name} tags={e.tags} />
            <EntryContents e={e} />
          </Entry>
        )}
        <br />
        <Footer />
      </div>
    )
  }
}

export default Gallery
