import React from 'react'
import { Row, Col, Typography, Button } from 'antd'
import chair from '../../assets/Chair (1).webp'
const { Text, Title } = Typography

export const Section5 = () => {
  return (
    <Row className="container">
      <Col
        className="col"
        lg={{ span: 12, order: 1 }}
        md={{ span: 12, order: 1 }}
        sm={{ span: 24, order: 2 }}
        xs={{ span: 24, order: 2 }}
      >
        <Title>Sale up to 50%</Title>
        <Text className="discreption">
          Lorem ipsum dolor sit amet, consectetur adipisci <br /> elitosos, sed
          do eiusmod tempor incididunt u
        </Text>
        <Button className="btn-primary" type="primary">
          Discover More
        </Button>
      </Col>
      <Col
        lg={{ span: 12, order: 2 }}
        md={{ span: 12, order: 2 }}
        sm={{ span: 24, order: 1 }}
        xs={{ span: 24, order: 1 }}
      >
        <img src={chair} width="100%" />
      </Col>
    </Row>
  )
}
