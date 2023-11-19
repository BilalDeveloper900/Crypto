import React from "react";
import img from "./Img/bg-logo.webp";
import { Plus } from "react-bootstrap-icons";

function Container5() {
  return (
    <div>
      <div className="container5">
        <div className="head">
          <b>OUR VISION</b>

          <h1>
            Cryptocurrency in <br />
            Every Wallet™
          </h1>
        </div>

        <div>
          <img src={img} alt="" />
        </div>

        <div className="container">
          <div className="row">
            {/* <div className="col-md-1"></div> */}
            <div className="col-md-6 ">
              <h2>Founded in</h2>
              <h1>2016</h1>
            </div>
            <div className="col-md-6">
              <h2>Users</h2>
              <h1>80M</h1>
            </div>
            {/* <div className="col-md-1"></div> */}
          </div>
          <div className="row">
            <div className="col-md-12 about">
              <div className="about1">
                About Us <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container5-1">
        <div className="container">
          <div className="row row-1">
            <div className="col-md-4">
              <h2 className="pt-4">Frequently Asked Questions</h2>
            </div>
            <div className="col-md-8">
              <div className="bar">
                <h2>What is crypto?</h2> <Plus className="plus" />
              </div>
              <hr />
              <div className="bar">
                <h2>What is Bitcoin?</h2> <Plus className="plus" />
              </div>
              <hr />
              <div className="bar">
                <h2>Where to buy crypto?</h2> <Plus className="plus" />
              </div>
              <hr />
              <div className="bar">
                <h2>How to buy crypto?</h2>
                <Plus className="plus" />
              </div>
              <hr />
              <div className="bar">
                <h2>How to buy Bitcoin?</h2> <Plus className="plus" />
              </div>
              <hr />
              <div className="bar">
                <h2>How to trade crypto?</h2> <Plus className="plus" />
              </div>
              <hr />
              <div className="bar">
                <h2>How to earn crypto?</h2> <Plus className="plus" />
              </div>
              <hr />
              <div className="bar">
                <h2>How to earn rewards on crypto?</h2>
                <Plus className="plus" />
              </div>
              <hr />

              <p>
                Have more questions? <span>Contact Us</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
}

export default Container5;
