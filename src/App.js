import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'antd'
import { Navbar, FooterContainer } from './components'
import RoutesPages from './routes/index.routes'
const { Header, Content, Footer } = Layout

const App = () => {
  return (
    <BrowserRouter>
      <Header className="Header">
        <Navbar />
      </Header>
      <Content className="content">
        <RoutesPages />
      </Content>
      <Footer>
        <FooterContainer />
      </Footer>
    </BrowserRouter>
  )
}

export default App
