import React from 'react'
import {MediumForm, MolecularForm, LightForm } from './Forms'


function Simulation() {
  return (
    <div className='container-md'>
      <h1 className='text-center'>Text</h1>
      <div className='row'>
        <div className='col-md'>
          <h3 className='text-center'>Molecular parameters</h3>
          <MolecularForm/>
        </div>
        <div className='col-md'>
          <h3 className='text-center'>Medium parameters</h3>
          <MediumForm/>
        </div>
        <div className='col-md'>
          <h3 className='text-center'>Light parameters</h3>
          <LightForm/>
        </div>
      </div>
    </div>
  )
}

export default Simulation
