

import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import bannerImg from "../../images/banner.png"
import playIcon from "../../images/play.png"

const Banner = () => {
  return (
    <section className='banner'>
      <Row className='align-items-ceter'>
        <Col md={7} lg={7}>
          <div className='banner-content'>
            <h2 className='sub-title'>Commodities Ka Asli B2B Global Platform</h2>
            <div className='title'>
              <h1>Tradologie Hai To <br />Mumkin Hai</h1>
            </div>
          </div>
        </Col>
        <Col md={5} lg={5}>
          <Image src={bannerImg} className='banner-img' width="auto" height="auto" alt='logo' priority />
        </Col>
      </Row>
      <Container>
        <div className='video-wrapper'>
          <div className='video'>
            <Image src={playIcon} className='banner-img' width="auto" height="auto" alt='logo' priority />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Banner