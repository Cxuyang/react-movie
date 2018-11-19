import React from 'react'
import {List, WhiteSpace, Grid } from 'antd-mobile'
import './user.styl'
const Item = List.Item
class User extends React.Component{
  render(){
    const data = [{
      icon: 'icon-homeuizqdianying',
      text: '电影票'
    },{
      icon: 'icon-youhuiquan',
      text: '优惠券'
    },{
      icon: 'icon-card',
      text: '权益卡'
    },{
      icon: 'icon-yanchufuwu',
      text: '演出票'
    }]
    return(
      <div className='user-content'>
        <div className="user-wrapper">
          <div className="user-background"></div>
          <svg className="icon user-avatar" aria-hidden="true">
            <use xlinkHref='#icon-avatar'></use>
          </svg>
          <div className="user-info">
            <span className="user-name">用户001</span>
            <span className="user-vip">黄金会员</span>
          </div>
        </div>        
        <List className="my-list">
          <Item arrow="horizontal">会员中心</Item>
        </List>
        <WhiteSpace></WhiteSpace>
        <div className="img-wrapper">
        {
          data.map((item, index) => {
            return <div key={index} className="img-block">
              <svg className={`icon ${item.icon}`} aria-hidden="true">
                <use xlinkHref={`#${item.icon}`}></use>
              </svg>
              <span>{item.text}</span>
            </div>
          })
        }
          
        </div>
        <WhiteSpace></WhiteSpace>
        <List className="my-list">
          <Item arrow="horizontal" extra={'29'}>想看的电影</Item>
          <Item arrow="horizontal" extra={'22'}>看过的电影</Item>
          <Item arrow="horizontal">我的小聚场</Item>
          <Item arrow="horizontal">银行卡优惠</Item>
          <Item arrow="horizontal">娱乐宝</Item>
          <Item arrow="horizontal" extra={'咨询票小蜜'}>帮助与反馈</Item>
        </List>
      </div>
    )
  }
}
export default User