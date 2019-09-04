import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class Projects extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>

                        <MDBCard style={{ width: "22rem" }}>
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                            <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <MDBBtn href="#">MDBBtn</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Projects;