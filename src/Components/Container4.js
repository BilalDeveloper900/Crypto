import React from "react";
import img1 from "./Img/p1.webp";
import note1 from "./Img/earn-notif-1.webp";
import note2 from "./Img/earn-notif-2.webp";
import img2 from "./Img/white.webp";

function Container4() {
  return (
    <div>
      <div className="container-fluid container4">
        <div className="row">
          <div className="col-md-6 left">
            <img src={img1} alt="" />

            <div>
              <div className="note1">
                <img src={note1} alt="" />
              </div>
              <div className="note2">
                <img src={note2} alt="" />
              </div>
            </div>
          </div>

          <div className="col-md-6 right">
            <b>CRYPTO EARN</b>

            <h1>
              Get the most out of <br />
              your assets, safely
            </h1>

            <p>
              Choose from 21+ cryptocurrencies including Bitcoin and <br />
              stablecoins.
            </p>

            <div>
              <span className="btn right-btn">
                Choose Your Card{" "}
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container4-1">
        <dir className=" container">
          <div className="row">
            <div className="col-md-7 left-1">
              <div className="text-1">
                <p>CRYPTO.COM DEFI</p>

                <h1>DeFi Made Simple</h1>

                <h4>
                  DeFi Wallet. <span> Your Keys, Your Crypto.</span>
                </h4>

                <h4>
                  DeFi Earn. <span> No lock-up period and stable returns.</span>
                </h4>

                <h4>
                  DeFi Swap.{"  "}
                  <span> Swap DeFi coins and earn Triple Yield.</span>
                </h4>
              </div>
              <div className="left-btn">
                <div className="btn btn-1">Get DeFi Wallet</div>
                <div className="btn btn-2">
                  Explore DeFi Features{" "}
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </div>

            <div className="col-md-5 right-1">
              <img src={img2} alt="" />
            </div>
          </div>
        </dir>
      </div>
    </div>
  );
}

export default Container4;
