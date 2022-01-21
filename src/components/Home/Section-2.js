import React from 'react'
import { Row, Col, Button, Image, Typography, Space } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import Workspace from '../../assets/White-and-green-living-room.webp'
import Girlroom from '../../assets/Girl-room.webp'
import Minimalist from '../../assets/Minimalist-bright.webp'
import shapeScreen from '../../assets/shape-screen.png'
import { Link } from 'react-router-dom'

const { Text, Title } = Typography
export const Section2 = () => {
  return (
    <Row className="container">
      <Col
        lg={{ span: 11, offset: 1 }}
        md={{ span: 11, offset: 1 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <Title className="heading">
          Featured
          <br /> Collection
        </Title>
        <Text className="description">
          Lorem ipsum dolor sit amet, consectetur adipisci elitosos, sed do
          eiusmod tempor incididunt ut.
        </Text>
        <div className="image-box">
          <Image src={Workspace} width="100%" />
          <div className="image-title">Workspace</div>
        </div>
        <Title className="heading">Refine Your Vision</Title>

        <Link to="/">
          Read More <ArrowRightOutlined />
        </Link>
        <div className="relative">
          <img
            src={shapeScreen}
            width="400"
            height="400"
            style={{
              top: '-100px',
              left: '-300px',
            }}
          />
          <Title className="heading">Join Our List</Title>
          <Text className="description">
            Lorem ipsum dolor sit amet, consectetur adipisci elitosos, sed do
            eiusmod tempor incididunt ut.
          </Text>
          <Button className="btn">Discover More</Button>
        </div>
      </Col>
      <Col
        lg={{ span: 11, offset: 1 }}
        md={{ span: 11, offset: 1 }}
        sm={{ span: 24 }}
        xs={{ span: 24 }}
      >
        <div className="image-box">
          <Image src={Girlroom} width="100%" />
          <div className="image-title">Bedroom</div>
        </div>
        <Title className="heading">Selected Style</Title>
        <div className="relative">
          <Link to="/">
            Read More <ArrowRightOutlined />
          </Link>
          <img
            src={shapeScreen}
            width="50"
            heigth="50"
            style={{
              top: '-50px',
              left: '-25px',
            }}
          />
        </div>
        <Image src={Minimalist} width="100%" />
        <Title className="heading">Sunday Collection</Title>
        <div className="relative">
          <img
            src={shapeScreen}
            width="50"
            heigth="50"
            style={{
              top: '-50px',
              left: '-25px',
            }}
          />
          <Link to="/">
            Read More <ArrowRightOutlined />
          </Link>
        </div>
      </Col>
    </Row>
  )
}
