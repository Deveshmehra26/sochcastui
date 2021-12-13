import React from "react";
import "./Testimonial.css";
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
        <h5 className="testimonial">Testimonial</h5>
        <Row md="2">
          <Col className="" md="8">
            <h1>
              Creator-obessed,
              <br />
              community-focused
            </h1>
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
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
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
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
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
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
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
      </Container>
    </div>
  );
}
export default Testimonial;
