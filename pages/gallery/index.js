import React from 'react'
import Footer from 'components/Footer'

class Gallery extends React.Component {
  render () {
    return (
      <div>
        <img src='octo.jpg' alt='Drawing: Meet my friend Octopus' />
        <img src='turtles.jpg' alt='Drawing: Flying Turtle' />
        <img src='pure energy.jpg' alt='Drawing: Pure Energy' />
        <img src='bloom.png' alt='Drawing: Krita space flower' />
        <img src='insect-communication.jpg' alt='Photo: Insects communication macro' />

        <img src='daydreaming.jpg' alt='Drawing: Daydreaming' />
        <img src='dead.jpg' alt='Drawing: Dead Lady' />
        <img src='insect-activity.jpg' alt='Drawing: ' />
        <img src='insect-autobahn.jpg' alt='Drawing: ' />
        <img src='texture-2.jpg' alt='Drawing: ' />
        <img src='texture-corn.jpg' alt='Drawing: ' />

        <p><a href='https://www.flickr.com/photos/pixarea/' target='_blank'>More of my creations on Flickr</a></p>

        <Footer />
      </div>
    )
  }
}

export default Gallery
