import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/icons/logo.svg'
import { Space, Menu, Dropdown, Button } from 'antd'
import { DownOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
const StoreMenu = (
  <Menu className="dropdown">
    <Menu.Item key="1">
      <Link to="/our-services" className="link">
        Our Services
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/our-team" className="link">
        Our Team
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/payments" className="link">
        Payments
      </Link>
    </Menu.Item>
  </Menu>
)
const MoreMenu = (
  <Menu className="dropdown">
    <Menu.Item key="1">
      <Link to="/about" className="link">
        About
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/faqs" className="link">
        Faqs
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link to="/contact-us" className="link">
        Contact Us
      </Link>
    </Menu.Item>
  </Menu>
)
export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <Space className="container">
      <Space
        className="toggle-menu-mobile"
        onClick={(e) => setOpen((prev) => !prev)}
      >
        {open ? <CloseOutlined /> : <MenuOutlined />}
      </Space>
      <Space className="logo">
        <img src={Logo} width="40px" height="40px" />
      </Space>
      <Space className={`Navbar-right-Section ${open ? 'active' : ' '}`}>
        <Link to="/" className="Navbar-link">
          Home page
        </Link>
        <Dropdown overlay={StoreMenu} trigger={[open ? 'click' : 'hover']}>
          <a className="Navbar-link" onClick={(e) => e.preventDefault()}>
            Store <DownOutlined />
          </a>
        </Dropdown>
        <Dropdown overlay={MoreMenu} trigger={[open ? 'click' : 'hover']}>
          <a className="Navbar-link" onClick={(e) => e.preventDefault()}>
            More <DownOutlined />
          </a>
        </Dropdown>
        <Button className="btn">Contact Me</Button>
      </Space>
    </Space>
  )
}
