import { useRef, useState } from "react";
import Canvas, { ConfigurationCanvas } from './Canvas'

export function MediumForm() {
  return (
  <form>
    <div className="mb-3">
      <label htmlFor="n1sfg">
        n<sub>ⅠSFG</sub> :
      </label>
      <small id="n1sfgHelp" className="form-text text-white-50">
        (Refractive index of SFG light in medium Ⅰ)
      </small>
      <input
        type="text"
        name="n1sfg"
        className="form-control"
        id="n1sfg"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="n1vis">
        n<sub>ⅠVIS</sub> :
      </label>
      <small id="n1visHelp" className="form-text text-white-50">
        (Refractive index of visible light in medium Ⅰ)
      </small>
      <input
        type="text"
        name="n1vis"
        className="form-control"
        id="n1vis"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="n1ir">
        n<sub>ⅠIR</sub> :
      </label>
      <small id="n1irHelp" className="form-text text-white-50">
        (Refractive index of IR light in medium Ⅰ)
      </small>
      <input
        type="text"
        name="n1ir"
        className="form-control"
        id="n1ir"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="n2sfg">
        n<sub>ⅡSFG</sub> :
      </label>
      <small id="n2sfgHelp" className="form-text text-white-50">
        (Refractive index of SFG light in medium Ⅱ)
      </small>
      <input
        type="text"
        name="n2sfg"
        className="form-control"
        id="n2sfg"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="n2vis">
        n<sub>ⅡVIS</sub> :
      </label>
      <small id="n2visHelp" className="form-text text-white-50">
        (Refractive index of visible light in medium Ⅱ)
      </small>
      <input
        type="text"
        name="n2vis"
        className="form-control"
        id="n2vis"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="n2ir">
        n<sub>ⅡIR</sub> :
      </label>
      <small id="n2irHelp" className="form-text text-white-50">
        (Refractive index of IR light in medium Ⅱ)
      </small>
      <input
        type="text"
        name="n2ir"
        className="form-control"
        id="n2ir"
      />
    </div>
  </form>
  )
}

export function MolecularForm() {
  const [symmetry, setSymmetry] = useState('C3v');

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="FWHM">Δθ(°) :</label>
        <small id="FWHMHelp" className="form-text text-muted">
          (Distribution width of orientational angle θ)
        </small>
        <input
          type="text"
          name="FWHM"
          className="form-control"
          id="FWHM"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="symmetry">
          Symmetry
        </label>
        <small id="symmetryHelp" className="form-text text-white-50">
          (Symmetry of molecule)
        </small>
        <select
          name="symmetry"
          className="form-control selectpicker"
          id="symmetry-controller"
          value={symmetry}
          onChange={e => setSymmetry(e.target.value)}
        >
          <option id="C3v-select" value="C3v" selected data-content="C<sub>3v</sub>" />
          <option id="C2v-select" value="C2v" data-content="C<sub>2v</sub>" />
          <option id="Cinfv-select" value="Cinfv" data-content="C<sub>∞v</sub>" />
        </select>
      </div>
      <SymmetryForm symmetry={symmetry}/>
    </form>
  )
}

export function LightForm() {
  const [betavis, setBetavis] = useState(60);
  const [betair, setBetair] = useState(55);
  const [lamdavis, setLamdavis] = useState(532);
  const [lamdair, setLamdair] = useState(3378);

  function calcBetasfg(beta1, beta2, lamda1, lamda2) {
    var lamda = lamda1 * lamda2 / (lamda1 + lamda2);
    return (Math.asin(lamda * (Math.sin(beta1 * Math.PI / 180) / lamda1 + Math.sin(beta2 * Math.PI / 180) / lamda2)) * 180 / Math.PI).toFixed(1)
  }

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="lamdavis">
          λ<sub>VIS</sub>(nm) :
        </label>
        <small id="lamdavisHelp" className="form-text text-muted">
          (Wavelength of visible light)
        </small>
        <input
          type="text"
          name="lamdavis"
          className="form-control"
          id="lamdavis"
          value={lamdavis}
          onChange={e => setLamdavis(Number(e.target.value))}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lamdair">
          λ<sub>IR</sub>(nm) :
        </label>
        <small id="lamdairHelp" className="form-text text-muted">
          (Wavelength of IR light)
        </small>
        <input
          type="text"
          name="lamdair"
          className="form-control"
          id="lamdair"
          value={lamdair}
          onChange={e => setLamdair(Number(e.target.value))}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="betavis">
          β<sub>VIS</sub>(°) :
        </label>
        <small id="betavisHelp" className="form-text text-muted">
          (Incident angle of visible light)
        </small>
        <input
          type="range"
          name="betavis"
          id="betavis"
          className="custom-range"
          min={0}
          max={90}
          step="0.1"
          value={betavis}
          onChange={e => setBetavis(e.target.value)}
        />
        <input
          type="text"
          id="betavisValue"
          className="form-control"
          value={betavis}
          onChange={e => setBetavis(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="betair">
          β<sub>IR</sub>(°) :
        </label>
        <small id="betairHelp" className="form-text text-muted">
          (Incident angle of IR light)
        </small>
        <input
          type="range"
          name="betair"
          id="betair"
          className="custom-range"
          min={0}
          max={90}
          step="0.1"
          value={betair}
          onChange={e => setBetair(e.target.value)}
        />
        <input
          type="text"
          id="betairValue"
          className="form-control"
          value={betair}
          onChange={e => setBetair(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="betasfgValue">
          β<sub>SFG</sub>(°) :
        </label>
        <input
          readOnly
          type='text'
          id="betasfgValue"
          className="form-control"
          value={calcBetasfg(betavis, betair, lamdavis, lamdair)}
        />
      </div>
      <ConfigurationCanvas
        width={300}
        height={300}
        betavis={betavis}
        betair={betair}
        lamdavis={lamdavis}
        lamdair={lamdair}
      />
    </form>
  )
}

const SymmetryForm = ({symmetry}) => {
  if(symmetry === "C3v") {
    return (
      <div id="C3v" className="mb-3">
        <label htmlFor="R">R :</label>
        <small id="RHelp" className="form-text text-muted">
          (Hyperpolarizability ratios)
        </small>
        <input
          type="text"
          name="R"
          className="form-control"
        />
      </div>
    )
  } else if(symmetry === "C2v") {
    return (
      <div id="C2v">
        <div className="mb-3">
          <label htmlFor="tau">τ(°) :</label>
          <small id="tauHelp" className="form-text text-muted">
            (Bond angle)
          </small>
          <input
            type="text"
            name="tau"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="r">r :</label>
          <small id="rC2vHelp" className="form-text text-muted">
            (Single bond polarizability derivative ratio)
          </small>
          <input
            type="text"
            name="rC2v"
            className="form-control"
          />
        </div>
      </div>
    )
  } else if(symmetry === "Cinfv") {
    return (
      <div id="Cinfv" className="mb-3">
        <label htmlFor="r">r :</label>
        <small id="rCinfvHelp" className="form-text text-muted">
          (Single bond polarizability derivative ratio)
        </small>
        <input
          type="text"
          name="rCinfv"
          className="form-control"
        />
      </div>
    )
  }
}