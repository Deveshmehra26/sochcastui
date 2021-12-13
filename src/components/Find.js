import React from "react";
import { Row, Col } from "reactstrap";
import "./Find.css";

function Find() {
  return (
    <div className="find my-md-5 mx-md-5 p-5">
      <Row>
        <Col
          md={{
            offset: 1,
            size: 4,
          }}
        >
          <h1>Find Soch across 51 categories</h1>
        </Col>
        <Col
          md={{
            offset: 1,
            size: 4,
          }}
        >
          <p>
            With the content across 51 categories you can find the soch you
            resonate with the most
          </p>
          <div className="exp">Explore All</div>
        </Col>
      </Row>
    </div>
  );
}
export default Find;
