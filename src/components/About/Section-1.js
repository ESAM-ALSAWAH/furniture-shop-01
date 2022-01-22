import React from 'react'
import { Row, Col, Image, Typography } from 'antd'
import stella from '../../assets/ttd.webp'
import Girlroom from '../../assets/Girl-room.webp'
const { Text, Title } = Typography
export const Section1 = () => {
  return (
    <Row className="container">
      <Col
        className="col-1"
        lg={{ span: 11, offset: 1 }}
        md={{ span: 11, offset: 1 }}
        sm={{ span: 24, order: 2 }}
        xs={{ span: 24, order: 2 }}
      >
        <Title>
          A Wayward
          <br />
          Vision In Best
          <br />
          Furniture
        </Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </Text>
        <Text>
          egestas quis ipsum suspendisse ultrices gravida dictum fusce ut.
          Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt
          lobortis. Aliquam ut porttitor leo a diam sollicitudin.
        </Text>
        <img src={stella} />
      </Col>
      <Col
        className="col-2"
        lg={{ span: 11, offset: 1 }}
        md={{ span: 11, offset: 1 }}
        sm={{ span: 24, order: 1 }}
        xs={{ span: 24, order: 1 }}
      >
        <Image src={Girlroom} width="100%" height="auto" />
      </Col>
    </Row>
  )
}
