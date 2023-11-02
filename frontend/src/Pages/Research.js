import React, { useState } from "react"
import Research1 from "../assets/images/HRSHBC/HRSHBC2.jpg"
import Research2 from "../assets/images/HRSHBC/HRSHBC4.jpg"
import Research3 from "../assets/images/HRSHBC/HRSHBC8.jpg"

const carouselText = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  )
  // if (isDisplayText) {
  //   return (
  //     <div className="card">
  //       <div className="card-body">
  //         <h5 className="card-title">Card title</h5>
  //         <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
  //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //       </div>
  //     </div>
  //   )
  // }
}

function Research() {
  const [isDisplayText, setIsDisplayText] = useState(true)
  return (
    <div className="position-relative" style={{minHeight: `100vh`}}>
      <div className="container-md justify-content-center position-absolute top-50 start-50 translate-middle">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <carouselImg imgSrc={Research1} isDisplayText={isDisplayText} setIsDisplayText={setIsDisplayText}/> */}
              <img src={Research1} className="d-block w-100 btn" alt="..." onClick={() => {setIsDisplayText(true)}}/>
              <div className="carousel-caption d-block">
                <carouselText />
              </div>
              {/* <div className="carousel-caption position-absolute top-50 start-50 translate-middle w-100" style={{backgroundColor: `rgba(255, 255, 255, 0.3)`}}>
                <div className="row h-100 fw-bolder justify-content-center overflow-auto">
                  <p className="text-center w-75 align-middle" style={{fontSize: `calc(0.9vh + 1vw)`}}>
                    We are adcancing nonlinear spectroscopy technology towards improved temporal and spectral resolution, higher sensitivity, more cost-effective solutions, and more accessible techniques.
                    <br/>
                    We have independently designed and built spectroscopy experimental platforms such as SFG, SHG, FSRS, CARS, and SHG imaging, striving to develop more advanced methods to address various challenges.
                  </p>
                </div>
                <div className="row">
                  <p className="display-6 text-center text-monospace fw-bolder mt-3" style={{fontSize: `calc(1vh + 1.5vw)`}}>
                    Developping Advanced <br/>
                    Spectroscopy Tools and Methods
                  </p>
                </div>
              </div> */}
            </div>
            <div className="carousel-item">
              <img src={Research2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Research3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Research
