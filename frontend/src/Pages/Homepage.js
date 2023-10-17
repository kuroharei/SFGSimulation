import React from 'react'
import LAB_1 from '../images/LAB-1.jpg'

function Homepage({setPage}) {
  return (
    <div className="container-md">
        {/* <div className='row'>
          <img src={LAB_1} className='img-fluid' alt='...' />
        </div> */}
        <h1 className='text-center text-white mt-3 mb-3'>Hongfei Wang's Group</h1>
        <div className='row justify-content-center'>
          <div className='card'>
              <div className='card-header'>
                <h3 className='display-5'>Ultrafast Laser Spectroscopy and Surface/Interface Physical Chemistry Laboratory</h3>
                <p className='display-5'>School of Science, Westlake University</p>
              </div>
              <div className='card-body'>
                <p className='text-justify text-lg-left'>
                  Our research group intends to carry out long-term research on modern physical chemistry and chemical physics related to surface/interface and condensed phase ultrafast and nonlinear spectra and dynamics, including:<br/>
                  <ol className='mt-3'>
                    <li className='mb-3'>Physical chemistry of surfaces and interfaces; structure, interaction and chemical dynamics</li>
                    <li className='mb-3'>Spectroscopy and molecular reaction dynamics: vibration and electronic spectroscopy</li>
                    <li className='mb-3'>Linear and nonlinear, spectroscopy and modern spectroscopic analysis methods : Infrared, Raman and sum frequency spectroscopy</li>
                    <li className='mb-3'>Chirality and stereochemistry on surfaces and biofilms.</li>
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
