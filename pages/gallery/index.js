import React from 'react'
import Footer from 'components/Footer'
import FaFlickr from 'react-icons/lib/fa/flickr'
import Lightbox from 'react-images'
import styled from 'styled-components'

const Img = (props) =>
  <img
    title={props.alt}
    style={{borderRadius: 10, cursor: 'pointer'}}
    {...props}
  />

const images = [
  { src: 'octo.jpg'                , alt: 'Drawing: Meet my friend Octopus'   },
  { src: 'turtles.jpg'             , alt: 'Drawing: Flying Turtle'            },
  { src: 'pure energy.jpg'         , alt: 'Drawing: Pure Energy'              },
  { src: 'bloom.png'               , alt: 'Drawing: Krita space flower'       },
  { src: 'insect-communication.jpg', alt: 'Photo: Insects communication macro'},
  { src: 'daydreaming.jpg'         , alt: 'Drawing: Daydreaming'              },
  { src: 'dead.jpg'                , alt: 'Drawing: Dead Lady'                },
  { src: 'insect-activity.jpg'     , alt: 'Drawing: Insects activity'         },
  { src: 'insect-autobahn.jpg'     , alt: 'Drawing: Insects autobahn'         },
  { src: 'texture-2.jpg'           , alt: 'Photo: Natural texture 1'          },
  { src: 'texture-corn.jpg'        , alt: 'Photo: Natural texture 2'          },
]

const LightboxTheme = {
  close: {
    opacity: 0,
    height: 35,
    transitionDuration: '0.5s',
    ':hover': {
      opacity: 0.8,
    },
  },
  arrow__size__medium: {
    height: 40,
    marginTop: 0,
  },
  arrow: {
    opacity: 0.3,
    width: 10,
    transitionDuration: '0.5s',
    ':hover': {
      opacity: 0.8,
    },
  },
  container: {
    background: 'rgba(0, 0, 0, 0.95)',
  },
  image: {
    borderRadius: 100,
  },
  footerCount: {
    opacity: 0,
  }
}

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lightbox: {
        isOpen: false,
        currentImage: 0,
      }
    }
  }

  render () {
    const openLightbox = (idx) =>
      this.setState({lightbox: {isOpen: true, currentImage: idx}})

    const closeLightbox = () =>
      this.setState({lightbox: {isOpen: false}})

    const gotoPrevLightboxImage = () =>
      this.setState({lightbox: {isOpen: true, currentImage: this.state.lightbox.currentImage - 1}})

    const gotoNextLightboxImage = () =>
      this.setState({lightbox: {isOpen: true, currentImage: this.state.lightbox.currentImage + 1}})

    return (
      <div>
        <Lightbox
          images={images}
          isOpen={this.state.lightbox.isOpen}
          onClose={closeLightbox}
          currentImage={this.state.lightbox.currentImage}
          backdropClosesModal={true}
          theme={LightboxTheme}
          onClickPrev={gotoPrevLightboxImage}
          onClickNext={gotoNextLightboxImage}
        />

        {images.map((i, idx) =>
          <Img
            key={i.src}
            src={i.src}
            alt={i.alt}
            title={i.alt}
            onClick={() => openLightbox(idx)}
          />
        )}

        <br />
        <br />

        <p className='text-center'>
          <FaFlickr style={{ fontSize: '130%', color: '#555', position: 'relative', top: -2}} />
          {' '}
          <a
            className='text-link'
            href='https://www.flickr.com/photos/pixarea/albums'
            target='_blank'
          >
            More of my creations on Flickr
          </a>
        </p>

        <br />

        <Footer />
      </div>
    )
  }
}

export default Gallery
