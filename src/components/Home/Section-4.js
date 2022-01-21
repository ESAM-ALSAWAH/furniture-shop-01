import React from 'react'
import { Row, Col, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { ArrowRightOutlined } from '@ant-design/icons'
import shapeScreen from '../../assets/shape-screen.png'
import img1 from '../../assets/Bedding-and-modern-furniture.webp'
import img2 from '../../assets/Assembling-Furniture-with-Little-Assistants.webp'
import img3 from '../../assets/Elegant-garden-furniture-on-terrace-of-suburban-home.webp'
const { Text, Title } = Typography
export const Section4 = () => {
  return (
    <Row className="container">
      <img
        src={shapeScreen}
        style={{
          position: 'absolute',
          width: '20%',
          top: '60px',
          left: '30px',
        }}
      />
      <Col style={{ textAlign: 'center', marginBlock: '4rem' }}>
        <Title>New Collection</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elitos, sedos
          <br /> doing eiusmod tempor incididunt ut.
        </Text>
      </Col>
      <Col
        className="col"
        lg={{ span: 7, offset: 1 }}
        md={{ span: 7, offset: 1 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <img src={img1} width="100%" height="auto" />

        <Title level={4}>
          The far discovered celebrated decisively at home.
        </Title>
        <Text className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elitos, sed do
          eiusmod tem
        </Text>
        <Link to="/">
          Read More <ArrowRightOutlined />
        </Link>
      </Col>
      <Col
        className="col"
        lg={{ span: 7, offset: 1 }}
        md={{ span: 7, offset: 1 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <img src={img2} width="100%" height="auto" />
        <Title level={4}>Sir new the particular frequently how.</Title>
        <Text className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elitos, sed do
          eiusmod tem
        </Text>

        <Link to="/">
          Read More <ArrowRightOutlined />
        </Link>
      </Col>
      <Col
        className="col"
        lg={{ span: 7, offset: 1 }}
        md={{ span: 7, offset: 1 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <img src={img3} width="100%" height="auto" />
        <Title level={4}>
          Wishing an he sixteen visited tedious subject it.
        </Title>
        <Text className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elitos, sed do
          eiusmod tem
        </Text>
        <Link to="/">
          Read More <ArrowRightOutlined />
        </Link>
      </Col>
    </Row>
  )
}
