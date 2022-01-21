import React from 'react'
import { Row, Col } from 'antd'
import { Section1, Section2, Section3 ,Section4} from '../components'
import '../styles/home.css'
export const Home = () => {
  return (
    <Row>
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
