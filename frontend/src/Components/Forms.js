import { ConfigurationCanvas } from './Canvas'

export function MolecularForm({
  symmetry,
  FWHM,
  setSymmetry,
  setFWHM,
  R,
  tau,
  rC2v,
  rCinfv,
  setR,
  settau,
  setrC2v,
  setrCinfv
}) {
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
          value={FWHM}
          onChange={e => setFWHM(Number(e.target.value))}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="symmetry">
          Symmetry
        </label>
        <small id="symmetryHelp" className="form-text text-muted">
          (Symmetry of molecule)
        </small>
        <select
          name="symmetry"
          className="form-control selectpicker"
          id="symmetry-controller"
          value={symmetry}
          onChange={e => setSymmetry(e.target.value)}
        >
          <option id="C3v" value="C3v" data-content="C<sub>3v</sub>" />
          <option id="C2v" value="C2v" data-content="C<sub>2v</sub>" />
          <option id="Cinfv" value="Cinfv" data-content="C<sub>∞v</sub>" />
        </select>
      </div>
      <SymmetryForm
        symmetry={symmetry}
        R={R}
        tau={tau}
        rC2v={rC2v}
        rCinfv={rCinfv}
        setR={setR}
        settau={settau}
        setrC2v={setrC2v}
        setrCinfv={setrCinfv}
      />
    </form>
  )
}


export function MediumForm({
  n1sfg,
  n1vis,
  n1ir,
  n2sfg,
  n2vis,
  n2ir,
  setn1sfg,
  setn1vis,
  setn1ir,
  setn2sfg,
  setn2vis,
  setn2ir
}) {

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="n1sfg">
          n<sub>ⅠSFG</sub> :
        </label>
        <small id="n1sfgHelp" className="form-text text-muted">
          (Refractive index of SFG light in medium Ⅰ)
        </small>
        <input
          type="text"
          name="n1sfg"
          className="form-control"
          id="n1sfg"
          value={n1sfg}
          onChange={e => setn1sfg(Number(e.target.value))}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="n1vis">
          n<sub>ⅠVIS</sub> :
        </label>
        <small id="n1visHelp" className="form-text text-muted">
          (Refractive index of visible light in medium Ⅰ)
        </small>
        <input
          type="text"
          name="n1vis"
          className="form-control"
          id="n1vis"
          value={n1vis}
          onChange={e => setn1vis(Number(e.target.value))}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="n1ir">
          n<sub>ⅠIR</sub> :
        </label>
        <small id="n1irHelp" className="form-text text-muted">
          (Refractive index of IR light in medium Ⅰ)
        </small>
        <input
          type="text"
          name="n1ir"
          className="form-control"
          id="n1ir"
          value={n1ir}
          onChange={e => setn1ir(Number(e.target.value))}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="n2sfg">
          n<sub>ⅡSFG</sub> :
        </label>
        <small id="n2sfgHelp" className="form-text text-muted">
          (Refractive index of SFG light in medium Ⅱ)
        </small>
        <input
          type="text"
          name="n2sfg"
          className="form-control"
          id="n2sfg"
          value={n2sfg}
          onChange={e => setn2sfg(Number(e.target.value))}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="n2vis">
          n<sub>ⅡVIS</sub> :
        </label>
        <small id="n2visHelp" className="form-text text-muted">
          (Refractive index of visible light in medium Ⅱ)
        </small>
        <input
          type="text"
          name="n2vis"
          className="form-control"
          id="n2vis"
          value={n2vis}
          onChange={e => setn2vis(Number(e.target.value))}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="n2ir">
          n<sub>ⅡIR</sub> :
        </label>
        <small id="n2irHelp" className="form-text text-muted">
          (Refractive index of IR light in medium Ⅱ)
        </small>
        <input
          type="text"
          name="n2ir"
          className="form-control"
          id="n2ir"
          value={n2ir}
          onChange={e => setn2ir(Number(e.target.value))}
        />
      </div>
    </form>
  )
}


export function LightForm({
  betavis,
  betair,
  lamdavis,
  lamdair,
  setBetavis,
  setBetair,
  setLamdavis,
  setLamdair
}) {

  function calcBetasfg(beta1, beta2, lamda1, lamda2) {
    var lamda = lamda1 * lamda2 / (lamda1 + lamda2);
    return Number((Math.asin(lamda * (Math.sin(beta1 * Math.PI / 180) / lamda1 + Math.sin(beta2 * Math.PI / 180) / lamda2)) * 180 / Math.PI).toFixed(1))
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
          onChange={e => setBetavis(Number(e.target.value))}
        />
        <input
          type="text"
          id="betavisValue"
          className="form-control"
          value={betavis}
          onChange={e => setBetavis(Number(e.target.value))}
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
          onChange={e => setBetair(Number(e.target.value))}
        />
        <input
          type="text"
          id="betairValue"
          className="form-control"
          value={betair}
          onChange={e => setBetair(Number(e.target.value))}
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
        betasfg={calcBetasfg(betavis, betair, lamdavis, lamdair)}
      />
    </form>
  )
}

const SymmetryForm = ({
  symmetry,
  R,
  tau,
  rC2v,
  rCinfv,
  setR,
  settau,
  setrC2v,
  setrCinfv
}) => {

  if (symmetry === "C3v") {
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
          value={R}
          onChange={e => setR(Number(e.target.value))}
        />
      </div>
    )
  } else if (symmetry === "C2v") {
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
            value={tau}
            onChange={e => settau(Number(e.target.value))}
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
            value={rC2v}
            onChange={e => setrC2v(Number(e.target.value))}
          />
        </div>
      </div>
    )
  } else if (symmetry === "Cinfv") {
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
          value={rCinfv}
          onChange={e => setrCinfv(Number(e.target.value))}
        />
      </div>
    )
  }
}
