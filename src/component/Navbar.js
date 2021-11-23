import React from 'react'

function Navbar() {
    return (
        <>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-4">
                    <h5 className="text-white h4">Home</h5>
                    <span className="text-muted">You can add other navigation links here</span>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h1 className="text-secondary" style={{letterSpacing: "7px", marginRight:"41rem"}}>MINT NFT</h1>
                </div>
            </nav>
        </>
    )
}   

export default Navbar;
