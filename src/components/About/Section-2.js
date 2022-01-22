import React from 'react'
import { Row, Col, Typography } from 'antd'
const { Text, Title } = Typography
export const Section2 = () => {
  return (
    <Row className="container">
      <Col>
        <Title>Our Story is Your Story</Title>
      </Col>
      <Col>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Et egestas
          quis ipsum suspendisse ultrices gravida dictum fusce ut.
        </Text>
      </Col>
    </Row>
  )
}
