import React from 'react'

function Homepage({setPage}) {
  return (
    <div className='container'>
      <h1 className='text-center text-white mb-5 mt-5'>Hongfei Wang's Group</h1>
      <div className='row mb-3 justify-content-center'>
        <div className='col'>
            <div className='card'>
                <div className='card-header'>
                  <h3 className='display-5'>Ultrafast Laser Spectroscopy and Surface/Interface Physical Chemistry Laboratory</h3>
                  <p className='display-5'>School of Science, Westlake University</p>
                </div>
                <div className='card-body'>
                  <p>
                    Our research group intends to carry out long-term research on modern physical chemistry and chemical physics related to surface/interface and condensed phase ultrafast and nonlinear spectra and dynamics, including:<br/>
                    <br/>
                    <ol>
                      <li>Physical chemistry of surfaces and interfaces; structure, interaction and chemical dynamics</li>
                      <br/>
                      <li>Spectroscopy and molecular reaction dynamics: vibration and electronic spectroscopy</li>
                      <br/>
                      <li>Linear and nonlinear, spectroscopy and modern spectroscopic analysis methods : Infrared, Raman and sum frequency spectroscopy</li>
                      <br/>
                      <li>Chirality and stereochemistry on surfaces and biofilms.</li>
                    </ol>
                  </p>
                </div>
            </div>
        </div>
      </div>
      <div className='btn btn-outline-light btn-lg' onClick={() => setPage("Research")}>Learn more</div>
    </div>
  )
}

export default Homepage
