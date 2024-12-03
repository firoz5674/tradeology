

import Image from 'next/image'
import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
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
            <Container>
              <div className='video-wrapper'>
                <div className='video'>
                  <div className='content'>
                    <Image src={playIcon} className='banner-img' width="auto" height="auto" alt='logo' priority />
                    <p>Aspirant Exporters</p>
                  </div>
                  <div className='video-length'>
                    <p>1:09</p>
                  </div>
                  <div className='overlay'></div>
                </div>
                <div className='video'>
                  <div className='content'>
                    <Image src={playIcon} className='banner-img' width="auto" height="auto" alt='logo' priority />
                    <p>Aspirant Exporters</p>
                  </div>
                  <div className='video-length'>
                    <p>1:09</p>
                  </div>
                  <div className='overlay'></div>
                </div>
              </div>
              <button className='banner-btn'>Subscribe Now</button>
            </Container>
          </div>
        </Col>
        <Col md={5} lg={5}>
          <Image src={bannerImg} className='banner-img' width="auto" height="auto" alt='logo' priority />
          <div className='content-mobile'>
            <h2 className='sub-title'>Commodities Ka Asli B2B Global Platform</h2>
            <h1>Tradologie Hai To  Mumkin Hai</h1>
            <div className='video-wrapper'>
              <div className='video'>
                <div className='content'>
                  <Image src={playIcon} className='banner-img' width="auto" height="auto" alt='logo' priority />
                  <p>Aspirant Exporters</p>
                </div>
                <div className='video-length'>
                  <p>1:09</p>
                </div>
                <div className='overlay'></div>
              </div>
              <div className='video'>
                <div className='content'>
                  <Image src={playIcon} className='banner-img' width="auto" height="auto" alt='logo' priority />
                  <p>Aspirant Exporters</p>
                </div>
                <div className='video-length'>
                  <p>1:09</p>
                </div>
                <div className='overlay'></div>
              </div>
            </div>
            <button className='banner-btn'>Subscribe Now</button>
          </div>
        </Col>
      </Row>
      <Container>

      </Container>
    </section>
  )
}

export default Banner