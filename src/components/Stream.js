import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import ping from "../img/PngItem_3375242 1.png";
import apple from "../img/image 124.png";
import spotify from "../img/image 127.png";
import over from "../img/image 129.png";
import "./Stream.css";

function Stream() {
  return (
    <div className="my-5">
      <h2>
        Stream from your <br />
        favourite apps
      </h2>
        <div className="mt-5 pt-5">
        <img src={ping} className="imge mx-3" alt="frame" />
        <img src={apple} className="imge mx-3" alt="frame" />
        <img src={ping} className="imge mx-3" alt="frame" />
        <img src={apple} className="imge mx-3" alt="frame" />
        <img src={spotify} className="imge mx-3" alt="frame" />
        <img src={over} className="imge mx-3" alt="frame" />
        </div>
    </div>
  );
}
export default Stream;
