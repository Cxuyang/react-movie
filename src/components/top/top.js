import React from 'react'
import {connect} from 'react-redux'
import {getTop} from '../../redux/data.redux'
import MovieList from '../movielist/movielist'
@connect(
  state => state.data,
  {getTop}
)
class Top extends React.Component{
  componentWillMount() {    
    this.props.getTop()
  }
  render(){
    return(
      <div className='top-content'>
        {
          this.props.top
          ? <MovieList MovieList={this.props.top.subjects} isShowRank={true}></MovieList>
          : <span className="nodata">暂无数据!</span>
        }
        
      </div>
    )
  }
}
export default Top