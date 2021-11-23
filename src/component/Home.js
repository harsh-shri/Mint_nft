import React from "react";

function Home() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center  home-container">
        <label className="switch mb-1">
          <input type="checkbox" defaultChecked />
          <span className="slider round "></span>
        </label>
        <h4 className="text-white ms-4">
          ADD COLLABORATORS / CO-CONTRIBUTORS{" "}
          <span className="home-heading_span">i</span>
        </h4>
      </div>
      <div className="container mt-5">
        <div className="row mb-4">
          <div className="col">
          <div className="d-flex flex-column ">
              <h6 className="text-white fw-bold heading mb-3">NAME OF THE CREATOR</h6>
              <div className="name-input">
                  <span className="text-white fw-bold me-4">1</span>
                  <input type="text" name="name" id="name1" className="mb-3 input py-2 ps-3 text-white" placeholder="START WITH @"/>
              </div>
              <div className="name-input">
                  <span className="text-white fw-bold me-4">2</span>
                  <input type="text" name="name" id="name2" className="mb-3 input py-2 ps-3 text-white" placeholder="START WITH @"/>
              </div>
          </div>
          </div>
          <div className="col">
          <div className="d-flex flex-column align-items-center ">
              <h6 className="text-white fw-bold mb-3" style={{paddingRight:"9rem"}}>ROLE</h6>
              <div>
              <input type="text" name="role" id="role1" className="mb-3 input py-2 ps-3 text-white" placeholder="SPECIFY A ROLE"/>
              </div>
              <div>
              <input type="text" name="role" id="role2" className="mb-3 input py-2 ps-3 text-white" placeholder="SPECIFY A ROLE"/>
              </div>
          </div>
          </div>
          <div className="col">
          <div className="d-flex flex-column ">
              <h6 className="text-white fw-bold mb-3 ">ROYALTY SPLIT %</h6>
              <div>
              <input type="text" name="royalty" id="royalty1" className="mb-3 input py-2 ps-3 text-white" placeholder="ENTER A %"/>
              </div>
              <div>
              <input type="text" name="royalty" id="royalty2" className="mb-3 input py-2 ps-3 text-white" placeholder="ENTER A %"/>
              </div>
          </div>
          </div>
        </div>
        <div className="add-more py-2 px-2 pe-4 ms-4 d-inline-block" style={{letterSpacing:"2px"}}>
            <span className="pe-2">+</span>
            ADD MORE COLLABORATORS
        </div>
      </div>
    </>
  );
}

export default Home;
