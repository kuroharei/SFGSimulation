import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import 'popper/dist/popper.min.js';
// import 'popper/dist/popper.min.js.map';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.min.js.map';
// import 'bootstrap-select/dist/css/bootstrap-select.min.css';
// import 'bootstrap-select/dist/js/bootstrap-select.min.js';
// import 'bootstrap-select/dist/js/bootstrap-select.min.js.map';

// import './assets/vendor/bootstrap/css/bootstrap.min.css'
// import './assets/vendor/jquery/jquery.min.js'
// import './assets/vendor/popper/popper.min.js'
// import './assets/js/bootstrap/bootstrap.min.js'
// import './assets/vendor/fontawesome/js/fontawesome-all.min.js'
// import './assets/vendor/fontawesome/js/fontawesome-all.min.js'
// import './assets/vendor/bootstrap-select/js/bootstrap-select.min.js'
// import './assets/vendor/bootstrap-select/js/bootstrap-select.min.js.map'
// import './assets/vendor/bootstrap-tagsinput/bootstrap-tagsinput.min.js'
// import './assets/vendor/input-mask/input-mask.min.js'
// import './assets/vendor/nouislider/js/nouislider.min.js'
// import './assets/vendor/textarea-autosize/textarea-autosize.min.js'
// import './assets/js/theme.js'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700,800|Roboto:400,500,700" rel="stylesheet" />
    <link type='text/css' href='./assets/vendor/bootstrap/css/bootstrap.min.css' rel='stylesheet' />

    <link type="text/css" href="./assets/css/theme.css" rel="stylesheet" />

    <link type="text/css" href="./assets/css/demo.css" rel="stylesheet" />

    <script src="./assets/vendor/jquery/jquery.min.js"></script>
    <script src="./assets/vendor/popper/popper.min.js"></script>
    <script src="./assets/js/bootstrap/bootstrap.min.js"></script>

    <script src="./assets/vendor/fontawesome/js/fontawesome-all.min.js" defer></script>

    <script src="./assets/vendor/bootstrap-select/js/bootstrap-select.min.js"></script>
    <script src="./assets/vendor/bootstrap-tagsinput/bootstrap-tagsinput.min.js"></script>
    <script src="./assets/vendor/input-mask/input-mask.min.js"></script>
    <script src="./assets/vendor/nouislider/js/nouislider.min.js"></script>
    <script src="./assets/vendor/textarea-autosize/textarea-autosize.min.js"></script>

    <script src="./assets/js/theme.js"></script> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
