import React from "react";

function Container3() {
  return (
    <div>
      <div className="container3">
        <div className="card-video">
          <video autoPlay loop muted>
            <source src="card.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="card-text m-auto">
          <p>
            <span>CRYPTO.COM VISA CARD</span>
          </p>

          <h1>
            The only crypto card <br />
            you need
          </h1>

          <p>
            Enjoy up to 5% back on all spending with your sleek, pure metal
            card. <br />
            No annual fees. Top-up with fiat or crypto.
          </p>
        </div>

        <div>
          <span className="btn card-btn">
            Choose Your Card{" "}
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Container3;
