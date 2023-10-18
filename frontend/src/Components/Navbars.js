import React, { useEffect, useState } from "react";

// const handleScroll = (e) => {
//     document.getElementById('nav').toggleAttribute('scrolled', current.scrollTop() > document.getElementById('nav').height());
// }

const Navbars = ({
    setPage
}) => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = (e) => {
            const $nav = document.getElementById('top-nav');
            setScrolled(window.scrollY > $nav.clientHeight)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    const navbarClass = scrolled ? "navbar navbar-expand-lg bg-body-tertiary fixed-top" : "navbar navbar-expand-lg bg-transparent fixed-top"
    return (
        <nav className={navbarClass} id="top-nav">
        <div className="container-fluid">
            <a className="navbar-brand" href="#" onClick={() => setPage("Homepage")}>
                HFW GROUP
            </a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={() => setPage("Homepage")}>
                    Homepage
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setPage("Research")}>
                    Research
                </a>
                </li>
                <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    People
                </a>
                <ul className="dropdown-menu">
                    <li>
                    <a className="dropdown-item" href="#"  onClick={() => setPage("PI")}>
                        Principle Investigator
                    </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#" onClick={() => setPage("GroupMembers")}>
                        Group Members
                    </a>
                    </li>
                    <li>
                    <a className="dropdown-item" href="#" onClick={() => setPage("Alumni") }>
                        Alumni
                    </a>
                    </li>
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setPage("Album")}>
                    Album
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setPage("Publications")}>
                    Publications
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setPage("News")}>
                    News
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setPage("Simulation")}>
                    Simulation
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setPage("Contact")}>
                    Contact
                </a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                    Search
                </button>
            </form>
            </div>
        </div>
        </nav>
    )
}

export default Navbars;