import React from "react";
import logo from "./Img/logo.png";
import Code from "./Img/qrCode.webp";

import {
  Twitter,
  Facebook,
  Github,
  Instagram,
  Telegram,
  Linkedin,
  Discord,
  QrCode,
} from "react-bootstrap-icons";

function Last() {
  return (
    <div>
      <div className="container6">
        <div className="container">
          <div className="row row-1">
            <div className="col-md-12 first">
              <img src={logo} alt="" className="logo" />
              <hr className="hr1" />
              <div className="icon-border">
                <Twitter className="last-icon" />
              </div>{" "}
              <div className="icon-border">
                <Facebook className="last-icon" />
              </div>{" "}
              <div className="icon-border">
                <Instagram className="last-icon" />
              </div>{" "}
              <div className="icon-border">
                <Github className="last-icon" />
              </div>{" "}
              <div className="icon-border">
                <Telegram className="last-icon" />
              </div>{" "}
              <div className="icon-border">
                <Linkedin className="last-icon" />
              </div>{" "}
              <div className="icon-border">
                <Discord className="last-icon" />
              </div>{" "}
            </div>
          </div>

          <div className="row row-2">
            <div className="col-md-2">
              <h5>APP</h5>
              <h5>VISA CARD</h5>
              <h5>EXCHANGE</h5>
              <h5>DEFI WALLET</h5>
              <h5>NFT</h5>
            </div>
            <div className="col-md-2">
              <b>Features</b>
              <p>Buy and Sell</p>
              <p>Crypto Earn</p>
              <p>On-chain Staking</p>
              <p>Crypto.com Pay</p>
              <p>Pay for Business</p>
              <p>Margin Trading</p>
              <p>Derivatives Trading</p>
              <p>Supercharger</p>
              <p>Trading Arena</p>
            </div>
            <div className="col-md-2">
              <b>Learn</b>
              <p>University</p>
              <p>Research & Analysis</p>
              <p>Bitcoin</p>
              <p>What is Ethereum?</p>
              <p>What is Blockchain?</p>
              <p>How to buy Bitcoin?</p>
              <p>How to buy Ethereum?</p>
              <p>How to buy Crypto?</p>
              <p>What is Crypto?</p>
              <p>What is DeFi?</p>
            </div>
            <div className="col-md-2">
              <b>Prices</b>
              <p>Crypto Prices</p>
              <p>Bitcoin Price</p>
              <p>Ethereum Price</p>
              <p>Site Widgets</p>
              <b>News</b>
              <p>What's Trending</p>
              <p>Market Updates</p>
              <p>Product News</p>
              <p>Company News</p>
              <p>Events</p>
            </div>
            <div className="col-md-2">
              <b>Company</b>
              <p>About Us</p>
              <p>Partners</p>
              <p>Security</p>
              <p>Proof of Reserves</p>
              <p>Climate</p>
              <p>Capital</p>
              <p>Affiliate</p>
              <p>Careers</p>
              <p>Support</p>
            </div>
            <div className="col-md-2 code">
              <h4>
                Get started <br /> with crypto
              </h4>
              <div className="img-border">
                <img src={Code} alt="" />
                <p>
                  Scan to <br /> Download
                </p>
              </div>
            </div>
          </div>

          <hr className="white" />

          <div className="row">
            <div className="col-md-12 lest">
              <p>Copyright © 2018 - 2023 Crypto.com. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Last;
