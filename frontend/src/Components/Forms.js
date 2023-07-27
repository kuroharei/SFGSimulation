
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
  return (
    <form>
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
      >
        <option id="C3v-select" value="C3v" data-content="C<sub>3v</sub>" />
        <option id="C2v-select" value="C2v" data-content="C<sub>2v</sub>" />
        <option id="Cinfv-select" value="Cinfv" data-content="C<sub>∞v</sub>" />
      </select>
    </form>
  )
}

export function LightForm() {
  return (
    <form>
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
      />
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
      />
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
      />
      <input
        type="text"
        id="betavisValue"
        className="form-control"
      />
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
      />
      <input
        type="text"
        id="betairValue"
        className="form-control"
      />
      <label htmlFor="betasfgValue">
        β<sub>SFG</sub>(°) :
      </label>
      <input
        readOnly
        type='text'
        id="betasfgValue"
        className="form-control"
      />
    </form>
  )
}