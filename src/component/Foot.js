import React from "react";
function Foot() {
    let myStyle = {
        letterSpacing:"2px",
    }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="me-4">
          <span className="text-muted me-4" style={myStyle}> DETAILS</span>
          <span className="text-muted fs-3">&#8250;</span>
        </div>
        <div className="me-4">
          <span className="text-muted me-4" style={myStyle}>PRICING</span>
          <span className="text-muted fs-3">&#8250;</span>
        </div>
        <div className="me-4">
          <span className="text-white me-4" style={myStyle}>COLLABORATION</span>
          <span className="text-muted fs-3">&#8250;</span>
        </div>
        <div className="me-4">
          <span className="text-muted me-4" style={myStyle}>MINT NFT</span>
          <span className="text-muted fs-3">&#8250;</span>
        </div>
      </div>
      <div className="d-flex justify-content-center bg-light mx-auto px-1 py-2 next-link mt-5">
            NEXT PAGE 
            <span className="ps-2 fw-bold">&#8250;</span>
      </div>
    </>
  );
}

export default Foot;
