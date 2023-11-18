import React from "react";
import img1 from "./Img/halfmobile.webp";
import img2 from "./Img/hand1.webp";
import coin from "./Img/coin.webp";
import img3 from "./Img/qr.png";

function Container2() {
  return (
    <div>
      <div className="section-1">
        <b>CRYPTO.COM PRICE</b>
        <h1>
          Buy Bitcoin, Ethereum, and <br /> 250+ cryptocurrencies.
        </h1>
        <span className="btn download-app">
          Check Crypto Prices{" "}
          <i class="fa fa-line-chart" aria-hidden="true"></i>
        </span>
      </div>

      <dir className="section-2">
        <h1>Your crypto journey starts here.</h1>

        <div className="box">
          <div className="box-1">
            <div className="box-1-text">
              <b>
                <span>
                  Buy crypto <br />
                </span>
                Buy BTC, ETH, and other crypto easily via bank transfer.
              </b>
            </div>
            <img src={img2} alt="" />
          </div>

          <div className="box-2">
            <b>
              <span>
                {" "}
                Recurring Buy <br />
              </span>
              Grow your portfolio automatically with daily, weekly, or monthly{" "}
              <br />
              trades.
            </b>

            <img src={img1} alt="" />
          </div>

          <div className="box-3">
            <div className="box-3-text">
              <b>
                <span>
                  Price Alerts <br />
                </span>
                Be notified on BTC, ETH, XRP <br /> prices, and more.
              </b>
            </div>

            <div className="box-3-price mt-3">
              <div className="name">
                <b>Bitcoin</b>
                <p>BTC</p>
              </div>
              <div className="number ms-auto">
                <b>$36,201.70</b>
                <p>
                  <i class="fa fa-caret-down" aria-hidden="true"></i> 3.19%
                </p>
              </div>
            </div>
            <hr />

            <div className="box-3-price">
              <div className="name">
                <b>Ethereum</b>
                <p>ETH</p>
              </div>
              <div className="number ms-auto">
                <b>$1,962.81</b>
                <p>
                  <i class="fa fa-caret-down" aria-hidden="true"></i> 4.05%
                </p>
              </div>
            </div>
            <hr />

            <div className="box-3-price">
              <div className="name">
                <b>Dogecoin</b>
                <p>DOGE</p>
              </div>
              <div className="number ms-auto">
                <b>$0.084398</b>
                <p style={{ color: "#00A68C" }}>
                  <i class="fa fa-caret-up" aria-hidden="true"></i> 5.43%
                </p>
              </div>
            </div>
            <hr />

            <div className="box-3-price">
              <div className="name">
                <b>Polkadot</b>
                <p>DOT</p>
              </div>
              <div className="number ms-auto">
                <b>$5.31</b>
                <p>
                  <i class="fa fa-caret-down" aria-hidden="true"></i> 6.87%
                </p>
              </div>
            </div>
            <hr />

            <div className="box-3-price">
              <div className="name">
                <b>Cronos</b>
                <p>CRO</p>
              </div>
              <div className="number ms-auto">
                <b>$0.095756</b>
                <p>
                  <i class="fa fa-caret-down" aria-hidden="true"></i> 4.39%
                </p>
              </div>
            </div>
          </div>

          <div className="box-4">
            <dir className="box-4-text">
              <b>
                <span>
                  On-chain Staking <br />
                </span>
                Generate passive income by helping to secure blockchains.
              </b>
            </dir>
            <img src={coin} alt="" />
          </div>
        </div>

        <div className="box-5">
          <dir className="left">
            <h5>
              Join our <span>80M+ users</span>
            </h5>
            <h2>Get started today</h2>
          </dir>

          <div className="right ms-auto">
            <h4>
              <span>Scan</span> to download
              <span className="the-app"> the app</span>
            </h4>
          </div>
          <img src={img3} alt="" className="ms-auto" />
        </div>
      </dir>
    </div>
  );
}

export default Container2;
