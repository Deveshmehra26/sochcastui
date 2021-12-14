import React from "react";
import "./Testimonial.css";
import ping from "../img/PngItem_3375242 1.png";
import darrow from "../img/vuesax-linear-arrow-right.svg";
import arrow from "../img/arrow-right.svg";
import slogo from "../img/sochlogo.png";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  CardGroup,
  CardImg,
  Button,
} from "reactstrap";

function Testimonial() {
  return (
    <div className="testbox my-md-5 px-md-5">
      <Container>
        <div>
          <Card className="main">
            <CardBody>
              <Row>
                <Col md="3">
                  <img src={slogo} className="slogo" />
                </Col>
                <Col md="6">
                  <p className="text-white my-5">
                    Explore and share an extensive collection of high-quality
                    audio from artists and creators around the world.
                  </p>
                </Col>
                <Col
                  md={{
                    offset: 1,
                    size: 2,
                  }}
                >
                  <img src={arrow} className="sarrow my-5" />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </div>
      </Container>

      <Container>
        <h5 className="testimonial my-5">Testimonial</h5>
        <Row>
          <Col className="" md="8">
            <h1>Creator-obessed,</h1>
            <h1>community-focused</h1>
          </Col>
          <Col className="px-5" md="4">
            <p>
              We're building a commutnity of voices and listeners who laugh,
              learn discover, and drive change together .With Sounder, you're
              part of something bigger.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col md="4">
            <div>
              <Card className="testcard">
                <CardBody>
                  <Row>
                    <Col md="3">
                      <img src={ping} className="imgthumb mx-3" alt="frame" />
                    </Col>
                    <Col md="9">
                      <h5>Yasmine Gloria</h5>
                      <p>Coustomer</p>
                    </Col>
                  </Row>
                  <hr />
                  <CardText>
                    A cool place to relax, the food is also delicious and there
                    is free internet as a modern hangout, at affordable price
                    especially for slang kids
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col md="4">
            <Card className="testcard">
              <CardBody>
                <Row>
                  <Col md="3">
                    <img src={ping} className="imgthumb mx-3" alt="frame" />
                  </Col>
                  <Col md="9">
                    <h5>Yasmine Gloria</h5>
                    <p>Coustomer</p>
                  </Col>
                </Row>
                <hr />
                <CardText>
                  Friendly service as well as good food affordable prices,
                  spacious place and free wifi and also complies with health
                  protocols
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card className="testcard">
              <CardBody>
                <Row>
                  <Col md="3">
                    <img src={ping} className="imgthumb mx-3" alt="frame" />
                  </Col>
                  <Col md="9">
                    <h5>Yasmine Gloria</h5>
                    <p>Coustomer</p>
                  </Col>
                </Row>
                <hr />
                <CardText>
                  A cool place to relax, the food is also delicious and there is
                  free internet as a modern hangout, at affordable price
                  especially for slang kids
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col
            md={{
              offset: 11,
              size: 2,
            }}
          >
            <img src={darrow} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Testimonial;
