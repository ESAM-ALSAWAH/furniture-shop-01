import React from 'react'
import { Row, Col, Avatar, Typography } from 'antd'


const { Text, Title } = Typography
export const Section3 = () => {
  return (
    <Row className="container">
      <Col
        lg={{ span: 20, offset: 1 }}
        md={{ span: 20, offset: 2 }}
        sm={{ span: 24, offset: 0 }}
        xs={{ span: 24, offset: 0 }}
        className="section-title"
      >
        Testimonial
      </Col>
      <Row className="container">
        <Col
          lg={{ span: 11, offset: 1 }}
          md={{ span: 11, offset: 1 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Title style={{ maxHeight: '100px', height: '100%' }}>
            Thanks for Your Sweet Word to Us
          </Title>
          <div className="box relative">
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              style={{
                backgroundColor: '#f56a00',
              }}
            >
              Es
            </Avatar>

            <Text className="description">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              eges.”
            </Text>
            <Title className="heading">Waleed Salinas</Title>
            <Text className="description">Your Company</Text>
          </div>
        </Col>
        <Col
          lg={{ span: 11, offset: 1 }}
          md={{ span: 11, offset: 1 }}
          sm={{ span: 24 }}
          xs={{ span: 24 }}
        >
          <Text
            style={{ maxHeight: '100px', height: '100%', display: 'block' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elitos, sedos
            doing eiusmod tempor incididunt ut.
          </Text>
          <div className="box relative">
            <Avatar size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}>
              Al
            </Avatar>

            <Text className="description">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              eges.”
            </Text>
            <Title className="heading">Waleed Salinas</Title>
            <Text className="description">Your Company</Text>
          </div>
        </Col>
      </Row>
    </Row>
  )
}
