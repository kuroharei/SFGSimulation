import React, { useEffect, useState} from 'react'
import { MediumForm, MolecularForm, LightForm } from './Forms'
import APIService from './APIService';


function Simulation() {

    const [symmetry, setSymmetry] = useState('C3v');
    const [FWHM, setFWHM] = useState(10);
    const [R, setR] = useState(3.4);
    const [tau, settau] = useState(109.5);
    const [rC2v, setrC2v] = useState(0.27);
    const [rCinfv, setrCinfv] = useState(0.27);
    const [n1sfg, setn1sfg] = useState(1);
    const [n1vis, setn1vis] = useState(1);
    const [n1ir, setn1ir] = useState(1);
    const [n2sfg, setn2sfg] = useState(1.36);
    const [n2vis, setn2vis] = useState(1.36);
    const [n2ir, setn2ir] = useState(1.36);
    const [betavis, setBetavis] = useState(60);
    const [betair, setBetair] = useState(55);
    const [lamdavis, setLamdavis] = useState(532);
    const [lamdair, setLamdair] = useState(3378);

    const calculate = () => {
        APIService.Calculate({
            symmetry,
            FWHM,
            R,
            tau,
            rC2v,
            rCinfv,
            n1sfg,
            n1vis,
            n1ir,
            n2sfg,
            n2vis,
            n2ir,
            betavis,
            betair,
            lamdavis,
            lamdair
        })
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
    }

    // useEffect(() => {
    //     fetch('http://127.0.0.1:5000/calculation', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'applications/json'
    //         }
    //     })
    //     .then(resp => resp.json())
    //     .then(resp => console.log(resp))
    //     .catch(error => console.log(error))
    // }, [])

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
            <div className='row mb-3 justify-content-md-center'>
                <div className='card-deck'>
                    <div className='col-md card'>
                        <div className='text-center card-header text-dark'>Molecular parameters</div>
                        <div className='card-body'>
                            <MolecularForm
                                symmetry={symmetry}
                                FWHM={FWHM}
                                setSymmetry={setSymmetry}
                                setFWHM={setFWHM}
                                R={R}
                                tau={tau}
                                rC2v={rC2v}
                                rCinfv={rCinfv}
                                setR={setR}
                                settau={settau}
                                setrC2v={setrC2v}
                                setrCinfv={setrCinfv}
                            />
                        </div>
                    </div>
                    <div className='col-md card'>
                        <div className='text-center card-header text-dark'>Medium parameters</div>
                        <div className='card-body'>
                            <MediumForm
                                n1sfg = {n1sfg}
                                n1vis = {n1vis}
                                n1ir = {n1ir}
                                n2sfg = {n2sfg}
                                n2vis = {n2vis}
                                n2ir = {n2ir}
                                setn1sfg = {setn1sfg}
                                setn1vis = {setn1vis}
                                setn1ir = {setn1ir}
                                setn2sfg = {setn2sfg}
                                setn2vis = {setn2vis}
                                setn2ir = {setn2ir}
                            />
                        </div>
                    </div>
                    <div className='col-md card'>
                        <div className='text-center card-header text-dark'>Light parameters</div>
                        <div className='card-body'>
                            <LightForm
                                betavis={betavis}
                                betair={betair}
                                lamdavis={lamdavis}
                                lamdair={lamdair}
                                setBetavis={setBetavis}
                                setBetair={setBetair}
                                setLamdavis={setLamdavis}
                                setLamdair={setLamdair}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mb-3 justify-content-center'>
                <button className='btn btn-outline-light btn-lg' type='submit' onClick={calculate}>Calculate</button>
            </div>
        </div>
    )
}

export default Simulation
