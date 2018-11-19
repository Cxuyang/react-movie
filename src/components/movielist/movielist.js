import React from 'react'
import {withRouter} from 'react-router-dom'
import './movielist.styl'
@withRouter
class MovieList extends React.Component{
  openDetail(movieID) {
    this.props.history.push(`/moviedetail/${movieID}`)
  }
  render(){
    let movieList = this.props.MovieList
    return (
      <div className="movie-list">
        {movieList.map((item, index) => {
            return <div className="movie-block" onClick={()=>this.openDetail(item.id)} key={index}>
                    {
                      this.props.isShowRank
                      ? <span className={index === 0 ? 'movie-rank rank-first' : index === 1 ? 'movie-rank rank-secend' : index === 2 ? 'movie-rank rank-third' : 'movie-rank'}>{index + 1}</span>
                      : null
                    }
                    <img src={item.images.small} alt={item.title} />
                    <div className="block-right">
                      <div className="right-title">{item.title}</div>
                      <span className="right-rate">淘票票评分 <span className="rate-text">{item.rating.average}</span></span>
                      <span className="right-director">导演: {item.directors.map(directorItem => directorItem.name).join(' ')}</span>
                      <span className="right-actor">主演: {item.casts.map(actorItem => actorItem.name).join(' ')}</span>
                    </div>
                   </div>
          })
        }
      </div>
    )
  }
}
export default MovieList