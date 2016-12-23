import React from 'react'
import { Menu, Dropdown } from 'antd'
import AvatarImg from './avatar/avatar-4.jpg'
import './Header.scss'

export default class Header extends React.Component {
  render () {
    const menu = (
      <Menu>
        <Menu.Item key='1'>{window.username || '苏理煌'}</Menu.Item>
        <Menu.Item key='2'><a href='/logout'>Lougout</a></Menu.Item>
      </Menu>
    )
    return (
      <header className='header'>
        <a href='/' className='logo'>SU ADMIN</a>
        <div className='user-info'>
          <Dropdown overlay={menu}>
            <img className='avatar' src={AvatarImg} />
          </Dropdown>
        </div>
      </header>
    )
  }
}
