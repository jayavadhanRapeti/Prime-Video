// Write your code here
import MovieSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="prime_video_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="website_logo"
      />
      <div className="movie_slider_container">
        <h1 className="movie_genre_heading">Action Movies</h1>
        <MovieSlider moviesList={actionMovies} />
        <h1 className="movie_genre_heading">Comedy Movies</h1>
        <MovieSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}

export default PrimeVideo
