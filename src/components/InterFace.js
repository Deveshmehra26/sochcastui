import React from "react";
import { Row, Col } from "reactstrap";
import "./Inter.css";
import hum from "../img/[removal.ai]_tmp-61920efd6e5ee.png";
import frame from "../img/Frame 4079.svg";
import frame1 from "../img/Frame 4080.svg";
import rectangle from "../img/Rectangle 431.svg";
import circle from "../img/Ellipse 164-1.svg";
import circle1 from "../img/Ellipse 2.svg";
import circle2 from "../img/Ellipse 3.svg";
import circle3 from "../img/Ellipse 164.svg";

function InterFace() {
  return (
    <div className="interbox">
      <Row md="2" sm="2" xs="1" className="px-5">
        <Col className="">
          <img src={hum} className="hum" alt="human" />
          <img src={frame} className="frame" alt="frame" />
          <div className="">
            <img src={frame1} className="frame1" alt="frame" />
          </div>
          <img src={rectangle} className="rect" />
          {/* <img src={circle} className="rect" />
          <img src={circle1} className="rect" />
          <img src={circle2} className="rect" />
          <img src={circle3} className="rect" /> */}
        </Col>
        <Col className="">
          <h1 className="mt-5 pt-5 text-white">
            Apni Soch Duniya Ko
            <br /> Suniao aur Suno
            <br /> Duniya Ki Soch
          </h1>
          <p className="mt-4 text-white">
            Explore and sharean extensive collective of high quality <br />
            audio from artist and creators around the world.
          </p>
          <Row md="2" className="mt-4">
            <Col>
              <button className="creating ">Start Creating</button>
            </Col>
            <Col>
              <button className="listen">Start Listen</button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default InterFace;
