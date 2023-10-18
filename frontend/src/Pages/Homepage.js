import React from 'react'
import LAB_1 from '../assets/images/LAB-1.jpg'



function Homepage({setPage}) {
  return (
    <React.StrictMode>
      <div className="container-md" id="research" style={{minWidth: `50vw`}}>
        <div className='row justify-content-center' style={{minHeight: `70vh`}}>
          <div className='card' style={{backgroundColor: 'rgba(237, 212, 170, 0.5)'}}>
              <div className='card-header'>
                <h3 className='display-5 text-monospace font-weight-bolder' style={{fontSize: `calc(1em + (1vw + 2.5vh) / 2)`}}>Ultrafast Laser Spectroscopy and Surface/Interface Physical Chemistry Laboratory</h3>
                <p className='display-5 text-monospace' style={{fontSize: `calc((1vw + 2.5vh) / 2)`}}>School of Science, Westlake University</p>
              </div>
              <div className='card-body'>
                <p className='text-justify text-lg-left text-monospace' style={{fontSize: `calc((1vw + 2.5vh) / 2)`, lineHeight: `calc(6vh)`}}>
                  Our research group intends to carry out long-term research on modern physical chemistry and chemical physics related to surface/interface and condensed phase ultrafast and nonlinear spectra and dynamics, including:<br/>
                  <ol>
                    <li>Physical chemistry of surfaces and interfaces; structure, interaction and chemical dynamics</li>
                    <li>Spectroscopy and molecular reaction dynamics: vibration and electronic spectroscopy</li>
                    <li>Linear and nonlinear, spectroscopy and modern spectroscopic analysis methods : Infrared, Raman and sum frequency spectroscopy</li>
                    <li>Chirality and stereochemistry on surfaces and biofilms.</li>
                  </ol>
                </p>
              </div>
          </div>
        </div>
        <div className='row'>
          <div className='btn btn-outline-light btn-lg mt-3' onClick={() => setPage("Research")}>Learn more</div>
        </div>
      </div>
    </React.StrictMode>
  )
}

export default Homepage
