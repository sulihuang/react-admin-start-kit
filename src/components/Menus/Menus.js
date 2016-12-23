import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router'

const Menus = ({ menus, collapse }) => {
  const menu = menus.map((item) => {
    return (
      <Menu.Item key={'menu' + item.key}>
        <Link to={item.url}>
          <Icon type={item.icon} />
          {!collapse && <span className='nav-text'> {item.name}</span>}
        </Link>
      </Menu.Item>
    )
  })
  return (
    <Menu
      mode='inline'
      theme='dark'
      defaultOpenKeys={['sub1']}
    >
      {menu}
    </Menu>
  )
}

Menus.propTypes = {
  menus: React.PropTypes.array.isRequired,
  collapse: React.PropTypes.bool.isRequired
}

export default Menus
