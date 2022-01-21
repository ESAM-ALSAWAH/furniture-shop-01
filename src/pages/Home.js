import React from 'react'
import { Row, Col } from 'antd'

import { Section1, Section2, Section3 } from '../components'
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
    </Row>
  )
}
