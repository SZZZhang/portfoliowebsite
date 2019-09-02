import React, { Component } from "react";
import lottie from "lottie-web";
import animationData from '../Assets/animationData.json';
import './Home.css';

import { Container } from 'react-bootstrap';

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
        <Container className="full-screen" >
            <div id="animation" ref={ ref => this.ref = ref } />
            <h1 id="hello-txt">Hi. I'm Shirley Zhang</h1>
            <mark id="developer-txt">Developer</mark>
        </Container>
    );
  }
}

Home.propTypes = {};

export default Home;