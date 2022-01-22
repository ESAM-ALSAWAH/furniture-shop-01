import { Row, Col, Typography, Button } from 'antd'
import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import shapeScreen from '../assets/doodles.webp'

const { Title, Text } = Typography

const listData = {
  col1: {
    title: 'Home',
    data: [
      'About',
      'Contact Us',
      'Faqs',
      'Our Services',
      'Our Team',
      'Payment',
    ],
  },
  col2: {
    title: 'Sitemap',
    data: ['About', 'What We Do', 'Projections', 'Location', 'Purchase?'],
  },
  col3: {
    title: 'Discover',
    data: ['Privacy Policy', 'Terms & Conditions', 'Owner Portal', 'Houses'],
  },
}

const Column = ({ children }) => (
  <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
    {children}
  </Col>
)
export const FooterContainer = () => {
  const renderList = Object.values(listData).map(({ title, data }, index) => {
    return (
      <Col
        lg={{ span: 8 }}
        md={{ span: 8 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
        key={index}
      >
        <Title className="title" level={3}>
          {title}
        </Title>
        {data.map((value, index) => (
          <Text className="text" key={index}>
            {value}
          </Text>
        ))}
      </Col>
    )
  })
  return (
    <Row className="relative">
      <Col className="col-1">
        <Row className="container">
          <Title>
            Have a question <br /> or need help?
          </Title>
          <Button className="btn-primary" type="primary">
            Contact us <ArrowRightOutlined />
          </Button>
          <div className="circle"></div>
          <img src={shapeScreen} className="img img-1" />
          <img src={shapeScreen} className="img img-2" />
        </Row>
      </Col>
      <Col className="col-2">
        <Row className="container">
          <Column>
            <div className="icon-container">
              <i className="ri-facebook-fill"></i>
              <i className="ri-twitter-fill"></i>
              <i className="ri-youtube-fill"></i>
              <i className="ri-instagram-line"></i>
            </div>
          </Column>
          <Column>
            <Row className="list-container">{renderList}</Row>
          </Column>
        </Row>
      </Col>
    </Row>
  )
}
