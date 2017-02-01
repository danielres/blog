import React from 'react'
import Footer from 'components/Footer'
import FaFlickr from 'react-icons/lib/fa/flickr'

const Img = (props) =>
  <img
    src={props.src}
    alt={props.alt}
    title={props.alt}
    style={{borderRadius: 10}}
  />

class Gallery extends React.Component {
  render () {
    return (
      <div>
        <Img src='octo.jpg' alt='Drawing: Meet my friend Octopus' width='900' height='693' />
        <Img src='turtles.jpg' alt='Drawing: Flying Turtle' width='1175' height='500' />
        <Img src='pure energy.jpg' alt='Drawing: Pure Energy' width='1024' height='707' />
        <Img src='bloom.png' alt='Drawing: Krita space flower' width='1440' height='900' />
        <Img src='insect-communication.jpg' alt='Photo: Insects communication macro' width='1024' height='768' />

        <Img src='daydreaming.jpg' alt='Drawing: Daydreaming' width='1024' height='765' />
        <Img src='dead.jpg' alt='Drawing: Dead Lady' width='1024' height='773' />
        <Img src='insect-activity.jpg' alt='Drawing: ' width='1024' height='768' />
        <Img src='insect-autobahn.jpg' alt='Drawing: ' width='1024' height='768' />
        <Img src='texture-2.jpg' alt='Drawing: ' width='768' height='1024' />
        <Img src='texture-corn.jpg' alt='Drawing: ' width='768' height='1024' />

        <br />
        <br />

        <p className='text-center'>
          <FaFlickr />
          {' '}
          <a href='https://www.flickr.com/photos/pixarea/albums' target='_blank'>More of my creations on Flickr</a>
        </p>

        <br />

        <Footer />
      </div>
    )
  }
}

export default Gallery
