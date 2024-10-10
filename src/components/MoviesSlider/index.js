// Write your code here

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {moviesList} = props

  return (
    <div>
      <MovieItem moviesList={moviesList} />
    </div>
  )
}

export default MovieSlider
