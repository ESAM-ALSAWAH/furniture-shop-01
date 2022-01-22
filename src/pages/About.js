import { Col, Row } from 'antd'
import React from 'react'
import '../styles/about.css'
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
} from '../components/About'
export const About = () => {
  return (
    <Row className="about">
      <Col className="section-1">
        <Section1 />
      </Col>
      <Col className="section-2">
        <Section2 />
      </Col>
      <Col className="section-3">
        <Section3 />
      </Col>
      <Col className="section-4">
        <Section4 />
      </Col>
    </Row>
  )
}
