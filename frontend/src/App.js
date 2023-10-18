import './App.css';
import Navbars from './Components/Navbars';
import Page from './Pages/Page'
import { useState } from 'react';

const scrollToAnchor = (anchorName, smooth) => {
  if (anchorName) {
    const anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      anchorElement.scrollIntoView({block: 'start', behavior: smooth? 'smooth': 'auto'});
    }
  }
}

function App() {

  const [page, setPage] = useState("Homepage")
  return (
    <div className="App">
      {/* <div style={{minHeight: `100vh`, backgroundColor: `rgba(18, 43, 85, 0.5)`}}> */}
      <div style={{minHeight: `100vh`, backgroundColor: `rgba(18, 43, 85, 0.5)`}}>
        <Navbars setPage = {setPage} />
        <div className="jumbotron bg-transparent text-white justify-content-center">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h1 className="display-4 text-center text-monospace font-weight-bolder" style={{fontSize: `calc(1em + (1.5vw + 2.5vh) / 2)`}}>Hongfei Wang's Group</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"/>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-info btn-lg" href="#" role="button" onClick={() => scrollToAnchor('research', true)}>Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Page page = {page} setPage = {setPage}/>
      {/* </div> */}
    </div>
  );
}

export default App;
