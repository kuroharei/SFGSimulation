import React from 'react'
import LAB_1 from '../images/LAB-1.jpg'

function Homepage({setPage}) {
  return (
    <div className="container-md" style={{minWidth: `50vw`}}>
        <h1 className='text-center text-white shadow-lg mt-3 mb-3' style={{fontSize: `calc(1em + 1.5vw)`}}>Hongfei Wang's Group</h1>
        <div className='row justify-content-center' style={{minHeight: `75vh`}}>
          <div className='card'>
              <div className='card-header'>
                <h3 className='display-5 text-monospace font-weight-bolder' style={{fontSize: `calc(1em + (1vw + 2.5vh) / 2)`}}>Ultrafast Laser Spectroscopy and Surface/Interface Physical Chemistry Laboratory</h3>
                <p className='display-5 text-monospace' style={{fontSize: `calc((1vw + 2.5vh) / 2)`}}>School of Science, Westlake University</p>
              </div>
              <div className='card-body'>
                <p className='text-justify text-lg-left text-monospace' style={{fontSize: `calc((1vw + 2.5vh) / 2)`, lineHeight: `calc(6vh)`}}>
                  Our research group intends to carry out long-term research on modern physical chemistry and chemical physics related to surface/interface and condensed phase ultrafast and nonlinear spectra and dynamics, including:<br/>
                  <ol className='mt-3'>
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
  )
}

export default Homepage
