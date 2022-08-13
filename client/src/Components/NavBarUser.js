import React from "react";

function NavBarUser() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/"><i style={{color:"#ffffff"}} className="fas fa-home"></i>&nbsp;Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/addnews"><i style={{color:"#ffffff"}} className="fas fa-plus"></i>&nbsp;Add News</a>
                            </li>

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownSearch" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i style={{color:"#ffffff"}} className="fas fa-search"></i>&nbsp;தேடுக</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownSearch">
                                    <li><a className="dropdown-item" href="">கேள்வி</a></li>
                                    <li><a className="dropdown-item" href="">தலைப்பு</a></li>
                                    <li><a className="dropdown-item" href="">எழுத்தாளர்</a></li>
                                </ul>
                            </li> */}

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAddNew" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i style={{color:"#ffffff"}} className="far fa-plus-square"></i>&nbsp;சேர்க்க</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownAddNew">
                                    <li><a className="dropdown-item" href="">புதிய கேள்வி</a></li>
                                    <li><a className="dropdown-item" href="">புதிய தலைப்பு</a></li>
                                </ul>
                            </li> */}

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAboutYou" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i style={{color:"#ffffff"}} className="far fa-user-circle"></i>&nbsp;நீங்கள்</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownAboutYou">
                                    <li><a className="dropdown-item" href="">உமது சுயவிபரம்</a></li>
                                    <li><a className="dropdown-item" href="">உமது கேள்விகள்</a></li>
                                    <li><a className="dropdown-item" href="">உமது பதில்கள்</a></li>
                                </ul>
                            </li> */}

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownFavorite" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i style={{color:"#ffffff"}} className="far fa-heart"></i>&nbsp;பிடித்தவை</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownFavorite">
                                    <li><a className="dropdown-item" href="">பிடித்த கேள்விகள்</a></li>
                                    <li><a className="dropdown-item" href="">பிடித்த பதில்கள்</a></li>
                                    <li><a className="dropdown-item" href="">பிடித்த நபர்கள்</a></li>
                                    <li><a className="dropdown-item" href="">பிடித்த தலைப்புகள்</a></li>
                                </ul>
                            </li> */}

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownFavorite" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i style={{color:"#ffffff"}} className="far fa-bell"></i>&nbsp;<span className="unseenNotifications" style={{color:"red"}}></span>&nbsp;அறிவிப்புகள்</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownFavorite">
                                    <li><a className="dropdown-item" href=""><span className="unseenNotifications" style={{color:"red"}}></span>&nbsp;உங்களுக்கானவை</a></li>
                                    <li><a className="dropdown-item" href="">அமைப்புகள்</a></li>
                                </ul>
                            </li> */}

                            {/* <li className="nav-item nav-link active text-danger">
                                <i style={{color:"red"}} className="fas fa-power-off"></i>&nbsp;வெளியேற
                            </li> */}

                            {/* <li className="nav-item" style={{color:"red", fontWeight:"bold"}}>
                                <a className="nav-link" target="_blank" href="https://play.google.com/store/apps/details?id=app.tamilcoders.ca">எங்கள் Android செயலி</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
export default NavBarUser