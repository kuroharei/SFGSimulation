import './App.css';
import Navbars from './Components/Navbars';
import Page from './Pages/Page'
import { useState } from 'react';

function App() {

  const [page, setPage] = useState("Homepage")
  return (
    <div className="App">
      <Navbars setPage = {setPage} />
      <Page page = {page} setPage = {setPage}/>
    </div>
  );
}

export default App;
