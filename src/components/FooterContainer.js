import { Row, Col, Typography, Button } from 'antd'
import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import shapeScreen from '../assets/doodles.png'
const { Title, Text } = Typography
const Column = ({ children }) => (
  <Col lg={{ span: 12 }} md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }}>
    {children}
  </Col>
)
export const FooterContainer = () => {
  return (
    <Row className="relative">
      <Col className="col-1">
        <Row className="container">
          <Title>
            Have a question <br /> or need help?
          </Title>
          <Button type="primary">
            Contact us <ArrowRightOutlined />
          </Button>
          <div className="circle"></div>
          <img src={shapeScreen} className="img img-1" />
          <img src={shapeScreen} className="img img-2" />
        </Row>
      </Col>
      <Col>
        <Row className="container"></Row>
      </Col>
    </Row>
  )
}
