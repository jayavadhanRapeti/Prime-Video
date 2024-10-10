// Write your code here

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesList.map(eachMovie => (
          <Popup
            modal
            trigger={
              <button
                type="button"
                className="trigger-button"
                key={eachMovie.id}
              >
                <img src={eachMovie.thumbnailUrl} alt="thumbnail" />
              </button>
            }
            position="center"
            className="popup-content"
          >
            {close => (
              <>
                <button
                  type="button"
                  className="trigger_close_button"
                  onClick={() => close()}
                  data-testid="closeButton"
                >
                  <IoMdClose className="closeIcon" />
                </button>
                <div className="movieCard">
                  <ReactPlayer url={eachMovie.videoUrl} />
                </div>
              </>
            )}
          </Popup>
        ))}
      </Slider>
    </div>
  )
}

export default MovieItem
