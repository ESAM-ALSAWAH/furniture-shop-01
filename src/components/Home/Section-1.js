import React from 'react'
import { Row, Col, Typography } from 'antd'
import chair from '../../assets/chair.png'

const { Text, Title } = Typography
export const Section1 = () => {
  return (
    <Row className="container">
      <Col
        lg={{ span: 12, order: 1 }}
        md={{ span: 12, order: 1 }}
        sm={{ span: 24, order: 2 }}
        xs={{ span: 24, order: 2 }}
      >
        <Title level="2">Exclusive</Title>
        <Title>Find Your Best Furniture</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elitos, sed do
          eiusmod tempor incididunt ut.
        </Text>
        <button>Discover Me</button>
        <Row
          style={{
            maxWidth: '500px',
            marginTop: '5rem',
          }}
        >
          <Col span={6} style={{ marginInline: '10px' }}>
            <h3>Size</h3>
            <Text>40 x 65 x 45</Text>
          </Col>
          <Col span={6} style={{ marginInline: '10px' }}>
            <h3 level="3">Material</h3>
            <Text>Fabric foam, wood</Text>
          </Col>
          <Col span={6} style={{ marginInline: '10px' }}>
            <h3 level="3">Weight</h3>
            <Text>26kg</Text>
          </Col>
        </Row>
      </Col>
      <Col
        lg={{ span: 12, order: 2 }}
        md={{ span: 12, order: 2 }}
        sm={{ span: 24, order: 1 }}
        xs={{ span: 24, order: 1 }}
      >
        <div className="custome-shape">
          <div className="circle">
            <img src={chair} width="100%" />
          </div>
        </div>
      </Col>
    </Row>
  )
}
