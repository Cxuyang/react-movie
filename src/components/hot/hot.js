import React from 'react'
import {connect} from 'react-redux'
import {getInTheaters, getComingSoon} from '../../redux/data.redux'
import {Tabs} from 'antd-mobile'
import { StickyContainer, Sticky } from 'react-sticky'
import MovieList from '../movielist/movielist'
@connect(
  state => state.data,
  {getInTheaters, getComingSoon}
)
class Hot extends React.Component{
  componentWillMount() {
    this.props.getInTheaters()
    this.props.getComingSoon()
  }
  render(){
    const tabs = [
      {title: '正在热映'},
      {title: '马上上映'}
    ]
    function renderTabBar(props) {
      return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
      </Sticky>);
    }
    return(
      <div className='hot-content'>
        <StickyContainer>
          <Tabs tabs={tabs}
            initalPage={'正在热映'}
            renderTabBar={renderTabBar}
          >
            <div>
              {
                this.props.in_theaters
                ? <MovieList MovieList={this.props.in_theaters.subjects} isShowRank={false}></MovieList>
                : null
              }
            </div>
            <div>
              {
                this.props.coming_soon
                ? <MovieList MovieList={this.props.coming_soon.subjects} isShowRank={false}></MovieList>
                : null
              }
            </div>
          </Tabs>
        </StickyContainer>
      </div>
    )
  }
}
export default Hot