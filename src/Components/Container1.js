import React from "react";
import p1 from "./Img/p1.webp";
import { QrCode } from "react-bootstrap-icons";

export default function Container1() {
  return (
    <>
      <div className="first css-12b7qxg ">
        <div className="dark">
          <video className="videoTag" autoPlay loop muted>
            <source src="video1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="second">
          <h1>
            The World’s Leading <br />
            Cryptocurrency Platform
          </h1>
          <h3>Buy Bitcoin, Ethereum, and all your favourite crypto</h3>

          <div className="second-check">
            <b>
              <i class="fa fa-check-circle" aria-hidden="true"></i>
              Trusted by more than <span>80M users</span> world-wide
              <br />
            </b>
            <b>
              <i class="fa fa-check-circle" aria-hidden="true"></i>
              Leader in <span>regulatory compliance</span> and
              <span>security certifications</span>
              <br />
            </b>
            <b>
              <i class="fa fa-check-circle" aria-hidden="true"></i>
              The industry’s most comprehensive <span>insurance coverage</span>
              and <span>verified proof of reserves</span>
              <br />
            </b>
          </div>

          <div>
            <span className="btn download-app">
              Download App <QrCode className="download-app-qr" />
            </span>
          </div>
        </div>
      </div>

      <div className="third" align="center">
        <img src={p1} alt="" />
      </div>
    </>
  );
}
