import React from 'react'
import { Switch, Route} from 'react-router-dom'
import {TabBar} from 'antd-mobile'
import Hot from '../hot/hot'
import Top from '../top/top'
import Find from '../find/find'
import User from '../user/user'
class Dashboard extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'hotTab',
      hidden: false,
      fullScreen: false,
    }
  }
  componentWillMount() {
    this.props.history.push('/hot')
  }
  render(){
    const componentsArray = [{
      path: '/hot',
      tabname: 'hotTab',
      icon: '#icon-moviesel',
      title: '热映',
      component: Hot
    },{
      path: '/top',
      tabname: 'topTab',
      icon: '#icon-top',
      title: 'top',
      component: Top
    },{
      path: '/find',
      tabname: 'findTab',
      icon: '#icon-find',
      title: '发现',
      component: Find
    },{
      path: '/user',
      tabname: 'userTab',
      icon: '#icon-user',
      title: '我的',
      component: User
    },]
    return(
      <div className='dashboard-content'>
        <div className="dashboard-header">
          <span>淘票票</span>
        </div>
        <div className="dashboard-route">
          <Switch>
            {componentsArray.map((item, index) => {
              return <Route key={index} path={item.path} component={item.component}></Route>
            })}
          </Switch>
        </div>
        <div className="tab-bar">
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#d81e06"
            barTintColor="white"
            hidden={this.state.hidden}
            tabBarPosition='bottom'
          >
            {
              componentsArray.map((item, index) => {
                return <TabBar.Item
                        title={item.title}
                        key={index}
                        icon={
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref={item.icon}></use>
                          </svg>
                        }
                        selectedIcon={
                          <svg className="icon" aria-hidden="true">
                            <use xlinkHref={item.icon}></use>
                          </svg>
                        }
                        selected={this.state.selectedTab === item.tabname}
                        onPress={() => {
                          this.setState({
                            selectedTab: item.tabname
                          })
                          this.props.history.push(item.path)
                        }}
                      >
                      </TabBar.Item>
              })
            }
          </TabBar>
        </div>
        
      </div>
    )
  }
}
export default Dashboard