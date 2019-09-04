import React, { Component } from "react";
import lottie from "lottie-web";
import animationData from '../Assets/animationData.json';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import portrait from '../Assets/portrait.png';
class Home extends Component {

  componentDidMount() {
    lottie.loadAnimation({
      container: this.ref, // the dom element that will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animationData,
    });
  }

  render() {
    return (
      <div>
        <Container className="full-screen" >
          <div id="animation" ref={ref => this.ref = ref} />
          <h1 id="hello-txt">Hi. I'm Shirley Zhang</h1>
          <mark id="developer-txt">Developer</mark>
        </Container>
        <Container className="full-screen">
          <Row>
            <Col>
              <img src={portrait} style={{ width: '100%' }} />
            </Col>
            <Col>
              <h1>A Little Bit About Me</h1>
              <p>Hi, I’m Shirley Zhang. I’m in my last year of high school and I have a passion for programming. I love working on my side projects and going to hackathons. Last summer, I was fortunate to be given the opportunity to work as a innovation developer at RBC. Most of my work up to this point have been in front end, however, I am currently learning new backend skills to develop a more full stack portfolio.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Home.propTypes = {};

export default Home;