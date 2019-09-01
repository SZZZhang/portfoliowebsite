import React, { Component } from "react";
import lottie from "lottie-web";
import animationData from '../Assets/animationData.json';
import './Home.css';

import {Container} from 'react-bootstrap';

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
        <Container className="full-screen">
            <div style={{ height: "100%", display: "block" }}ref={ref => this.ref = ref} />
        </Container>
    );
  }
}

Home.propTypes = {};

export default Home;