import React from 'react'
import { MediumForm, MolecularForm, LightForm } from './Forms'


function Simulation() {
    return (
        <div className='container-md'>
            <h1 className='text-center text-white'>Title</h1>
            <div className='row mb-3 justify-content-center'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-header'>
                            introduction
                        </div>
                        <div className='card-body'>
                            texttext
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-md-center'>
                <div className='card-deck'>
                    <div className='col-md card'>
                        <div className='text-center card-header text-dark'>Molecular parameters</div>
                        <div className='card-body'>
                            <MolecularForm />
                        </div>
                    </div>
                    <div className='col-md card'>
                        <div className='text-center card-header text-dark'>Medium parameters</div>
                        <div className='card-body'>
                            <MediumForm />
                        </div>
                    </div>
                    <div className='col-md card'>
                        <div className='text-center card-header text-dark'>Light parameters</div>
                        <div className='card-body'>
                            <LightForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Simulation
