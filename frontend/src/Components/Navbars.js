import React from "react";

const Navbars = ({
    setPage
}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#" onClick={() => setPage("Homepage")}>
                    Homepage <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >
                    People
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">
                        Principle Investigator
                    </a>
                    <a className="dropdown-item" href="#">
                        Group Members
                    </a>
                    <a className="dropdown-item" href="#">
                        Alumni
                    </a>
                    {/* <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">
                        Something else here
                    </a> */}
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Research
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Album
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Publications
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    News
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => setPage("Simulation")}>
                    Simulation
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Contact
                    </a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link disabled" href="#">
                    Disabled
                    </a>
                </li> */}
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                    Search
                </button>
                </form>
            </div>
        </nav>
    )
}

export default Navbars;