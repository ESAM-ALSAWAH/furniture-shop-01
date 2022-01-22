import React from 'react'
import { Row, Col, Image, Typography, Button } from 'antd'

import Livingroom from '../../assets/Living-room-with-green-furniture-1-1.webp'
const { Text, Title } = Typography
export const Section3 = () => {
  return (
    <Row className="container">
      <Col
        className="col-1"
        lg={{ span: 11, offset: 1 }}
        md={{ span: 11, offset: 1 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <Image src={Livingroom} width="100%" height="auto" />
      </Col>
      <Col
        className="col-2"
        lg={{ span: 11, offset: 1 }}
        md={{ span: 11, offset: 1 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <Title>
          We Are a Lifestyle <br /> Brand
        </Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Et egestas
          quis ipsum suspendisse ultrices gravida dictum fusce ut
        </Text>
        <Button className="btn-primary" type="primary">
          Read More
        </Button>
      </Col>
    </Row>
  )
}
