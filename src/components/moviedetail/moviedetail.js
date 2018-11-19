import React from 'react'
import {connect} from 'react-redux'
import {Button, List} from 'antd-mobile'
import {getMovieDetail} from '../../redux/data.redux'
import './moviedetail.styl'
const Item = List.Item
@connect(
  state => state.data,
  {getMovieDetail}
)
class MovieDetail extends React.Component{
  constructor(props) {
    super(props)
    this.goRouteBack = this.goRouteBack.bind(this)
  }
  componentWillMount() {
    this.props.getMovieDetail(this.props.match.params.movieID)
  }
  shouldComponentUpdate(nextProps) {
    if (!nextProps) {
      return false
    }
    return true
  }
  goRouteBack() {
    this.props.history.goBack()
  }
  render() {
    const movieDetail = this.props.movie_detail
    if (!movieDetail) {
      return null
    }
    return (
      <div className="movie-detail">
        <div className="movie-header">
          <div className="header-background">
            <img width="100%" height="100%" alt='img' src={movieDetail.images.small} />
          </div>
          <div className="movie-info">
            <span className="movie-title">{movieDetail.title}</span>
            <span className="movie-subtitle">{movieDetail.aka[0]}</span>
            <span className="movie-genres">{movieDetail.genres.join(' ')}</span>
            <span className="movie-countries">{movieDetail.countries.join(' ')} | {movieDetail.year}</span>
            <span className="movie-rating">评分: <span className="rating-text">{movieDetail.rating.average}</span> | 评分人数: {movieDetail.ratings_count}</span>
            <span className="movie-wash">想看人数: <span className="wash-text">{movieDetail.wish_count}</span></span>
          </div>
          <img className="movie-img" alt='img' src={movieDetail.images.small} />
        </div>
        <div className="split-div"></div>
        <div className="movie-introduction">
          <h2>简介</h2>
          <p>{movieDetail.summary}</p>
        </div>
        <div className="split-div"></div>
        <div className="movie-actors">
          <h2>演职人员</h2>
          <List className="my-list">
          {
            movieDetail.directors.map((item, index) => {
              return <Item arrow="horizontal" key={item.id} extra={'详情'} onClick={()=>{window.open(item.alt)}}>{item.name}</Item>
            })
          }
          {
            movieDetail.casts.map((item, index) => {
              return <Item arrow="horizontal" key={item.id} extra={'详情'} onClick={()=>{window.open(item.alt)}}>{item.name}</Item>
            })
          }
          </List>
        </div>
        <div className="split-div"></div>
        <Button size="small" className="back-btn" type="primary" onClick={this.goRouteBack}>返回</Button>
      </div>
    )
  }
}
export default MovieDetail