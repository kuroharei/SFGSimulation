import React from 'react'
import HeadBackground from '../assets/images/HeadBackground.jpg'


function Head() {
  return (
    <div style={{minHeight: `100vh`, backgroundImage: `url(${HeadBackground})`, backgroundSize: `100% 100%`}}>
        {/* <div style={{minHeight: `100vh`, backgroundColor: `rgba(40, 140, 255, 0.3)`}}> */}
            <div className='container-md text-white justify-content-center position-absolute top-50 start-50 translate-middle'>
                <div className='row'>
                    <div className='col-lg-12 justify-content-center'>
                        <div className='row'>
                            <h1 className="display-5 text-center text-monospace fw-bolder">Ultrafast Laser Spectroscopy and Surface/Interface Physical Chemistry Laboratory</h1>
                        </div>
                        <hr className="my-4"/>
                        <div className='row'>
                            <p className="lead text-center text-monospace fw-bolder">School of Science, Westlake University</p>
                        </div>
                        {/* <hr className="my-4"/>
                        <div className='row col-6 offset-3'>
                            <p className='text-center'>Our research group intends to carry out long-term research on modern physical chemistry and chemical physics related to surface/interface and condensed phase ultrafast and nonlinear spectra and dynamics.</p>
                        </div> */}
                    </div>
                </div>
                <div className='text-center'>
                    <a className="btn btn-info btn-lg" href="#" role="button">Learn more</a>
                </div>
            </div>
        {/* </div> */}
    </div>
  )
}

export default Head