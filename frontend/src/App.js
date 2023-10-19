import './App.css';
import Navbars from './Components/Navbars';
import Page from './Pages/Page'
import Head from './Components/Head'
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
      <Navbars setPage = {setPage} />
      <Page page = {page} setPage = {setPage}/>
    </div>
  );

  // return (
  //   <React.StrictMode>
  //     <meta charSet="utf-8" />
  //     <meta
  //       name="viewport"
  //       content="width=device-width, initial-scale=1, shrink-to-fit=no"
  //     />
  //     <meta
  //       name="description"
  //       content="Probably the most complete UI kit out there. Multiple functionalities and controls added,  extended color palette and beautiful typography, designed as its own extended version of Bootstrap at  the highest level of quality.                             "
  //     />
  //     <meta name="author" content="Webpixels" />
  //     <title>Boomerang UI Kit - Free Bootstrap Framework by Webpixels</title>
  //     {/* Fonts */}
  //     <link
  //       href="https://fonts.googleapis.com/css?family=Nunito:400,600,700,800|Roboto:400,500,700"
  //       rel="stylesheet"
  //     />
  //     {/* Theme CSS */}
  //     <link type="text/css" href="./assets/css/theme.css" rel="stylesheet" />
  //     {/* Demo CSS - No need to use these in your project */}
  //     <link type="text/css" href="./assets/css/demo.css" rel="stylesheet" />
  //     <nav className="navbar navbar-expand-lg navbar-transparent navbar-dark bg-dark py-4">
  //       <div className="container">
  //         <a className="navbar-brand" href="./">
  //           <strong>Boomerang</strong> UI Kit
  //         </a>
  //         <button
  //           className="navbar-toggler"
  //           type="button"
  //           data-action="offcanvas-open"
  //           data-target="#navbar_main"
  //           aria-controls="navbar_main"
  //           aria-expanded="false"
  //           aria-label="Toggle navigation"
  //         >
  //           <span className="navbar-toggler-icon" />
  //         </button>
  //         <div className="navbar-collapse offcanvas-collapse" id="navbar_main">
  //           <ul className="navbar-nav ml-auto align-items-lg-center">
  //             <h6 className="dropdown-header font-weight-600 d-lg-none px-0">
  //               Menu
  //             </h6>
  //             <li className="nav-item active">
  //               <a className="nav-link" href="./index.html">
  //                 Overview
  //               </a>
  //             </li>
  //             <li className="nav-item dropdown">
  //               <a
  //                 className="nav-link dropdown-toggle"
  //                 href="#"
  //                 id="navbar_main_dropdown_1"
  //                 role="button"
  //                 data-toggle="dropdown"
  //                 aria-haspopup="true"
  //                 aria-expanded="false"
  //               >
  //                 Pages
  //               </a>
  //               <div
  //                 className="dropdown-menu"
  //                 aria-labelledby="navbar_1_dropdown_1"
  //               >
  //                 <a className="dropdown-item" href="./pages/homepage.html">
  //                   Homepage
  //                 </a>
  //                 <a className="dropdown-item" href="./pages/about.html">
  //                   About us
  //                 </a>
  //                 <a className="dropdown-item" href="./pages/sign-in.html">
  //                   Sign in
  //                 </a>
  //                 <a className="dropdown-item" href="./pages/contact.html">
  //                   Contact
  //                 </a>
  //               </div>
  //             </li>
  //             <li className="nav-item">
  //               <a className="nav-link" href="./docs/introduction.html">
  //                 Docs
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a
  //                 href="https://github.com/webpixels/boomerang-ui-kit/archive/master.zip"
  //                 target="_blank"
  //                 className="nav-link d-lg-none"
  //               >
  //                 Download Free
  //               </a>
  //               <a
  //                 href="https://github.com/webpixels/boomerang-ui-kit/archive/master.zip"
  //                 target="_blank"
  //                 className="btn btn-sm bg-white d-none d-lg-inline-flex"
  //               >
  //                 Download Free
  //               </a>
  //             </li>
  //             <div className="dropdown-divider d-lg-none my-4" />
  //             <h6 className="dropdown-header font-weight-600 d-lg-none px-0">
  //               Social Media
  //             </h6>
  //             <li className="nav-item">
  //               <a
  //                 className="nav-link nav-link-icon"
  //                 href="https://instagram.com/webpixelsofficial/"
  //                 target="_blank"
  //               >
  //                 <i className="fab fa-instagram" />
  //                 <span className="ml-2 d-lg-none">Instagram</span>
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a
  //                 className="nav-link nav-link-icon"
  //                 href="https://web.facebook.com/webpixels"
  //                 target="_blank"
  //               >
  //                 <i className="fab fa-facebook" />
  //                 <span className="ml-2 d-lg-none">Facebook</span>
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a
  //                 className="nav-link nav-link-icon"
  //                 href="https://dribbble.com/webpixels"
  //                 target="_blank"
  //               >
  //                 <i className="fab fa-dribbble" />
  //                 <span className="ml-2 d-lg-none">Dribbble</span>
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a
  //                 className="nav-link nav-link-icon"
  //                 href="https://github.com/webpixels"
  //                 target="_blank"
  //               >
  //                 <i className="fab fa-github" />
  //                 <span className="ml-2 d-lg-none">Github</span>
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //     <main className="main">
  //       <section
  //         className="spotlight parallax bg-cover bg-size--cover"
  //         data-spotlight="fullscreen"
  //         style={{ backgroundImage: 'url("assets/images/backgrounds/img-1.jpg")' }}
  //       >
  //         <span className="mask bg-primary alpha-7" />
  //         <div className="spotlight-holder py-lg pt-lg-xl">
  //           <div className="container d-flex align-items-center no-padding">
  //             <div className="col">
  //               <div className="row cols-xs-space align-items-center text-center text-md-left justify-content-center">
  //                 <div className="col-7">
  //                   <div className="text-center mt-5">
  //                     <img
  //                       src="assets/images/brand/icon.png"
  //                       style={{ width: 200 }}
  //                       className="img-fluid animated"
  //                       data-animation-in="jackInTheBox"
  //                       data-animation-delay={1000}
  //                     />
  //                     <h2
  //                       className="heading display-4 font-weight-400 text-white mt-5 animated"
  //                       data-animation-in="fadeInUp"
  //                       data-animation-delay={2000}
  //                     >
  //                       <span className="font-weight-700">Boomerang</span> UI Kit
  //                     </h2>
  //                     <p
  //                       className="lead text-white mt-3 lh-180 c-white animated"
  //                       data-animation-in="fadeInUp"
  //                       data-animation-delay={2500}
  //                     >
  //                       Free HTML UI Kit based on the well known Bootstrap 4
  //                       Framework brought to you by{" "}
  //                       <strong className="text-white">Webpixels</strong>
  //                     </p>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //       <section className="slice slice-lg">
  //         <div className="container">
  //           <div className="row justify-content-center">
  //             <div className="col-lg-10">
  //               {/* Typography */}
  //               <div className="row align-items-center mb-5">
  //                 <div className="col-8">
  //                   <h2 className="heading h3 mb-0">Typography</h2>
  //                 </div>
  //                 <div className="col-4 text-right">
  //                   <a
  //                     href="docs/typography.html"
  //                     className="btn btn-sm btn-primary"
  //                   >
  //                     Open in Docs
  //                   </a>
  //                 </div>
  //               </div>
  //               <div className="row typeface-palette cols-xs-space cols-sm-space cols-md-space">
  //                 <div className="col-sm-4">
  //                   <a>
  //                     <div className="typeface-entry">
  //                       <span className="badge badge-md typeface-badge badge-pill bg-primary text-white">
  //                         Regular
  //                       </span>
  //                       <h3 className="heading display-3 font-weight-400 text-dark">
  //                         Aa
  //                       </h3>
  //                       <p>Mist enveloped the ship three hours out from port.</p>
  //                     </div>
  //                   </a>
  //                 </div>
  //                 <div className="col-sm-4">
  //                   <a>
  //                     <div className="typeface-entry">
  //                       <span className="badge badge-md typeface-badge badge-pill bg-primary text-white">
  //                         Semi-bold
  //                       </span>
  //                       <h3 className="heading display-3 font-weight-600 text-dark">
  //                         Aa
  //                       </h3>
  //                       <p>A shining crescent far beneath the flying.</p>
  //                     </div>
  //                   </a>
  //                 </div>
  //                 <div className="col-sm-4">
  //                   <a data-value="'Quicksand', sans-serif">
  //                     <div className="typeface-entry">
  //                       <span className="badge badge-md typeface-badge badge-pill bg-primary text-white">
  //                         Bold
  //                       </span>
  //                       <h3 className="heading display-3 font-weight-700 text-dark">
  //                         Aa
  //                       </h3>
  //                       <p>A shining crescent far beneath the flying.</p>
  //                     </div>
  //                   </a>
  //                 </div>
  //               </div>
  //               {/* Color palette */}
  //               <div className="row align-items-center mb-4 mt-lg">
  //                 <div className="col-8">
  //                   <h2 className="heading h3 mb-0">Color palette</h2>
  //                 </div>
  //                 <div className="col-4 text-right">
  //                   <a href="docs/colors.html" className="btn btn-sm btn-primary">
  //                     Open in Docs
  //                   </a>
  //                 </div>
  //               </div>
  //               <p>
  //                 Boomerang has extended the color palette that Bootstrap offers by
  //                 default. Instead of two primary colors, you get now three. These
  //                 can be easily customized using the included Sass files.
  //               </p>
  //               <div className="row-wrapper">
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Primary colors
  //                 </h3>
  //                 <div className="row color-palette cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-4">
  //                     <a href="#" data-toggle="tooltip" title="Primary">
  //                       <div className="color-entry bg-primary">
  //                         <span className="color-code z-depth-2 font-weight-bold text-uppercase rounded">
  //                           #288cff
  //                         </span>
  //                       </div>
  //                     </a>
  //                   </div>
  //                   <div className="col-4">
  //                     <a href="#" data-toggle="tooltip" title="Secondary">
  //                       <div className="color-entry bg-secondary">
  //                         <span className="color-code z-depth-2 font-weight-bold text-uppercase rounded">
  //                           #e8f2ff
  //                         </span>
  //                       </div>
  //                     </a>
  //                   </div>
  //                   <div className="col-4">
  //                     <a href="#" data-toggle="tooltip" title="Tertiary">
  //                       <div className="color-entry bg-tertiary">
  //                         <span className="color-code z-depth-2 font-weight-bold text-uppercase rounded">
  //                           #192b3f
  //                         </span>
  //                       </div>
  //                     </a>
  //                   </div>
  //                 </div>
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Other colors
  //                 </h3>
  //                 <div className="row color-palette cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-4">
  //                     <a href="#" data-toggle="tooltip" title="Warning">
  //                       <div className="color-entry bg-warning">
  //                         <span className="color-code z-depth-2 font-weight-bold text-uppercase rounded">
  //                           #ff3b00
  //                         </span>
  //                       </div>
  //                     </a>
  //                   </div>
  //                   <div className="col-4">
  //                     <a href="#" data-toggle="tooltip" title="Danger">
  //                       <div className="color-entry bg-danger">
  //                         <span className="color-code z-depth-2 font-weight-bold text-uppercase rounded">
  //                           #ff0033
  //                         </span>
  //                       </div>
  //                     </a>
  //                   </div>
  //                   <div className="col-4">
  //                     <a href="#" data-toggle="tooltip" title="Success">
  //                       <div className="color-entry bg-success">
  //                         <span className="color-code z-depth-2 font-weight-bold text-uppercase rounded">
  //                           #43c115
  //                         </span>
  //                       </div>
  //                     </a>
  //                   </div>
  //                 </div>
  //                 <div className="row color-palette cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-4">
  //                     <a href="#" data-toggle="tooltip" title="Warning">
  //                       <div className="color-entry bg-info">
  //                         <span className="color-code z-depth-2 font-weight-bold text-uppercase rounded">
  //                           #73e9ef
  //                         </span>
  //                       </div>
  //                     </a>
  //                   </div>
  //                   <div className="col-4">
  //                     <a href="#" data-toggle="tooltip" title="Danger">
  //                       <div className="color-entry bg-dark">
  //                         <span className="color-code z-depth-2 font-weight-bold text-uppercase rounded">
  //                           #3f87f5
  //                         </span>
  //                       </div>
  //                     </a>
  //                   </div>
  //                   <div className="col-4">
  //                     <a href="#" data-toggle="tooltip" title="Success">
  //                       <div className="color-entry bg-light">
  //                         <span className="color-code z-depth-2 font-weight-bold text-uppercase rounded">
  //                           #3f87f5
  //                         </span>
  //                       </div>
  //                     </a>
  //                   </div>
  //                 </div>
  //               </div>
  //               {/* Form elements */}
  //               <div className="row align-items-center mb-4 mt-lg">
  //                 <div className="col-8">
  //                   <h2 className="heading h3 mb-0">Form elements</h2>
  //                 </div>
  //                 <div className="col-4 text-right">
  //                   <a href="docs/forms.html" className="btn btn-sm btn-primary">
  //                     Open in Docs
  //                   </a>
  //                 </div>
  //               </div>
  //               <p className="mb-5">
  //                 We have extended the form functionalities by including more
  //                 options and plugins such as: selectpickers, input masks, sliders,
  //                 tags input, toggle switches, custom checkboxes and radio buttons.
  //                 It is, by far, the most complete free UI Kit version ever offered.
  //                 Curious about how the PRO version will be like? Stay tuned!
  //               </p>
  //               <div className="row-wrapper">
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3 col-md-6">
  //                     <div className="form-group">
  //                       <input
  //                         type="text"
  //                         className="form-control"
  //                         placeholder="Default"
  //                       />
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <div className="form-group">
  //                       <input
  //                         type="text"
  //                         className="form-control is-valid"
  //                         placeholder="Is valid"
  //                       />
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <div className="form-group">
  //                       <input
  //                         type="text"
  //                         className="form-control is-invalid"
  //                         placeholder="Is invalid"
  //                       />
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <div className="form-group">
  //                       <input
  //                         type="text"
  //                         className="form-control"
  //                         placeholder="Disabled"
  //                         disabled=""
  //                       />
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3 col-md-6">
  //                     <div className="form-group">
  //                       <div className="input-group input-group-transparent mb-4">
  //                         <div className="input-group-prepend">
  //                           <span className="input-group-text">
  //                             <i className="fas fa-search" />
  //                           </span>
  //                         </div>
  //                         <input
  //                           type="text"
  //                           className="form-control"
  //                           placeholder="Search"
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <div className="form-group">
  //                       <div className="input-group input-group-transparent mb-4">
  //                         <div className="input-group-prepend">
  //                           <span className="input-group-text">
  //                             <i className="fas fa-user" />
  //                           </span>
  //                         </div>
  //                         <input
  //                           type="text"
  //                           className="form-control"
  //                           placeholder="Username"
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <div className="form-group">
  //                       <div className="input-group input-group-transparent mb-4">
  //                         <input
  //                           type="text"
  //                           className="form-control"
  //                           placeholder="Birthday"
  //                         />
  //                         <div className="input-group-append">
  //                           <span className="input-group-text">
  //                             <i className="fas fa-calendar" />
  //                           </span>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <div className="form-group">
  //                       <div className="input-group input-group-transparent mb-4">
  //                         <input
  //                           type="text"
  //                           className="form-control"
  //                           placeholder="Credit card"
  //                         />
  //                         <div className="input-group-append">
  //                           <span className="input-group-text">
  //                             <i className="fas fa-credit-card" />
  //                           </span>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Selectpickers
  //                 </h3>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3 col-md-6">
  //                     <select className="selectpicker" title="Simple select">
  //                       <option>Alerts</option>
  //                       <option>Badges</option>
  //                       <option>Buttons</option>
  //                       <option>Cards</option>
  //                       <option>Forms</option>
  //                       <option>Modals</option>
  //                     </select>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <select className="selectpicker" title="Option groups">
  //                       <optgroup label="Components">
  //                         <option>Alerts</option>
  //                         <option>Badges</option>
  //                         <option>Buttons</option>
  //                         <option>Cards</option>
  //                       </optgroup>
  //                       <optgroup label="Utilities">
  //                         <option>Borders</option>
  //                         <option>Colors</option>
  //                         <option>Typography</option>
  //                       </optgroup>
  //                     </select>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <select
  //                       className="selectpicker"
  //                       multiple=""
  //                       title="Multiple select"
  //                     >
  //                       <option>Alerts</option>
  //                       <option>Badges</option>
  //                       <option>Buttons</option>
  //                       <option>Cards</option>
  //                       <option>Forms</option>
  //                       <option>Modals</option>
  //                       <option>Borders</option>
  //                       <option>Colors</option>
  //                       <option>Typography</option>
  //                     </select>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <select
  //                       className="selectpicker"
  //                       multiple=""
  //                       data-selected-text-format="count"
  //                       title="Selected text format"
  //                     >
  //                       <option>Alerts</option>
  //                       <option>Badges</option>
  //                       <option>Buttons</option>
  //                       <option>Cards</option>
  //                       <option>Forms</option>
  //                       <option>Modals</option>
  //                       <option>Borders</option>
  //                       <option>Colors</option>
  //                       <option>Typography</option>
  //                     </select>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3 col-md-6">
  //                     <select
  //                       className="selectpicker"
  //                       data-live-search="true"
  //                       data-live-search-placeholder="Search ..."
  //                       title="Live search"
  //                     >
  //                       <option>Alerts</option>
  //                       <option>Badges</option>
  //                       <option>Buttons</option>
  //                       <option>Cards</option>
  //                       <option>Forms</option>
  //                       <option>Modals</option>
  //                       <option>Borders</option>
  //                       <option>Colors</option>
  //                       <option>Typography</option>
  //                     </select>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <select
  //                       className="selectpicker"
  //                       data-live-search="true"
  //                       title="Keyword search"
  //                     >
  //                       <option data-tokens="alerts notifications">Alerts</option>
  //                       <option data-tokens="badges labels">Badges</option>
  //                       <option data-tokens="buttons links">Buttons</option>
  //                       <option data-tokens="cards content">Cards</option>
  //                       <option data-tokens="forms input">Forms</option>
  //                       <option data-tokens="typography headings paragraphs">
  //                         Typography
  //                       </option>
  //                     </select>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <select className="selectpicker" title="Icons">
  //                       <option data-icon="fas fa-bell">Alerts</option>
  //                       <option data-icon="fas fa-certificate">Badges</option>
  //                       <option data-icon="fas fa-square">Cards</option>
  //                       <option data-icon="fas fa-wpforms">Forms</option>
  //                       <option data-icon="fas fa-window-maximize">Modals</option>
  //                     </select>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <select className="selectpicker" title="Subtext">
  //                       <option data-subtext="This is a subtext">
  //                         Hot Dog, Fries and a Soda
  //                       </option>
  //                       <option data-subtext="This is a subtext">
  //                         Burger, Shake and a Smile
  //                       </option>
  //                       <option data-subtext="This is a subtext">
  //                         Sugar, Spice and all things nice
  //                       </option>
  //                     </select>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3 col-md-6">
  //                     <select
  //                       className="selectpicker"
  //                       data-style="btn-primary"
  //                       title="Primary color"
  //                     >
  //                       <option>Alerts</option>
  //                       <option>Badges</option>
  //                       <option>Buttons</option>
  //                       <option>Cards</option>
  //                       <option>Forms</option>
  //                     </select>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <select
  //                       className="selectpicker"
  //                       data-style="btn-success"
  //                       title="Success color"
  //                     >
  //                       <option>Alerts</option>
  //                       <option>Badges</option>
  //                       <option>Buttons</option>
  //                       <option>Cards</option>
  //                       <option>Forms</option>
  //                     </select>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <select
  //                       className="selectpicker"
  //                       data-style="btn-danger"
  //                       title="Danger color"
  //                     >
  //                       <option>Alerts</option>
  //                       <option>Badges</option>
  //                       <option>Buttons</option>
  //                       <option>Cards</option>
  //                       <option>Forms</option>
  //                     </select>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <select
  //                       className="selectpicker"
  //                       data-style="btn-warning"
  //                       title="Warning color"
  //                     >
  //                       <option>Alerts</option>
  //                       <option>Badges</option>
  //                       <option>Buttons</option>
  //                       <option>Cards</option>
  //                       <option>Forms</option>
  //                     </select>
  //                   </div>
  //                 </div>
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Tags input
  //                 </h3>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-12">
  //                     <div className="example">
  //                       <input
  //                         type="text"
  //                         className="form-control"
  //                         defaultValue="Amsterdam,Washington,Sydney,Beijing,Cairo"
  //                         data-role="tagsinput"
  //                       />
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-6">
  //                     <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                       Checkboxes
  //                     </h3>
  //                     <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                       <div className="col-md-6">
  //                         <div className="custom-control custom-checkbox mb-3">
  //                           <input
  //                             type="checkbox"
  //                             className="custom-control-input"
  //                             id="customCheck1"
  //                           />
  //                           <label
  //                             className="custom-control-label"
  //                             htmlFor="customCheck1"
  //                           >
  //                             Unchecked
  //                           </label>
  //                         </div>
  //                         <div className="custom-control custom-checkbox mb-3">
  //                           <input
  //                             type="checkbox"
  //                             className="custom-control-input"
  //                             id="customCheck2"
  //                             defaultChecked=""
  //                           />
  //                           <label
  //                             className="custom-control-label"
  //                             htmlFor="customCheck2"
  //                           >
  //                             Checked
  //                           </label>
  //                         </div>
  //                         <div className="custom-control custom-checkbox mb-3">
  //                           <input
  //                             type="checkbox"
  //                             className="custom-control-input"
  //                             id="customCheck3"
  //                             disabled=""
  //                           />
  //                           <label
  //                             className="custom-control-label"
  //                             htmlFor="customCheck3"
  //                           >
  //                             Disabled unchecked
  //                           </label>
  //                         </div>
  //                         <div className="custom-control custom-checkbox mb-3">
  //                           <input
  //                             type="checkbox"
  //                             className="custom-control-input"
  //                             id="customCheck4"
  //                             defaultChecked=""
  //                             disabled=""
  //                           />
  //                           <label
  //                             className="custom-control-label"
  //                             htmlFor="customCheck4"
  //                           >
  //                             Disabled checked
  //                           </label>
  //                         </div>
  //                       </div>
  //                       <div className="col-md-6">
  //                         <div className="custom-control custom-checkbox mb-3">
  //                           <input
  //                             type="checkbox"
  //                             className="custom-control-input is-valid"
  //                             id="customCheck5"
  //                           />
  //                           <label
  //                             className="custom-control-label"
  //                             htmlFor="customCheck5"
  //                           >
  //                             Valid checkbox
  //                           </label>
  //                         </div>
  //                         <div className="custom-control custom-checkbox mb-3">
  //                           <input
  //                             type="checkbox"
  //                             className="custom-control-input is-invalid"
  //                             id="customCheck6"
  //                           />
  //                           <label
  //                             className="custom-control-label"
  //                             htmlFor="customCheck6"
  //                           >
  //                             Invalid checkbox
  //                           </label>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-6">
  //                     <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                       Radios
  //                     </h3>
  //                     <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                       <div className="col-md-6">
  //                         <div className="custom-control custom-radio mb-3">
  //                           <input
  //                             type="radio"
  //                             name="custom-radio-1"
  //                             className="custom-control-input"
  //                             id="customRadio1"
  //                           />
  //                           <label
  //                             className="custom-control-label"
  //                             htmlFor="customRadio1"
  //                           >
  //                             Unchecked
  //                           </label>
  //                         </div>
  //                         <div className="custom-control custom-radio mb-3">
  //                           <input
  //                             type="radio"
  //                             name="custom-radio-1"
  //                             className="custom-control-input"
  //                             id="customRadio2"
  //                             defaultChecked=""
  //                           />
  //                           <label
  //                             className="custom-control-label"
  //                             htmlFor="customRadio2"
  //                           >
  //                             Checked
  //                           </label>
  //                         </div>
  //                         <div className="custom-control custom-radio mb-3">
  //                           <input
  //                             type="radio"
  //                             name="custom-radio-1"
  //                             className="custom-control-input"
  //                             id="customRadio3"
  //                             disabled=""
  //                           />
  //                           <label
  //                             className="custom-control-label"
  //                             htmlFor="customRadio3"
  //                           >
  //                             Disabled unchecked
  //                           </label>
  //                         </div>
  //                         <div className="custom-control custom-radio mb-3">
  //                           <input
  //                             type="radio"
  //                             name="custom-radio-1"
  //                             className="custom-control-input"
  //                             id="customRadio4"
  //                             defaultChecked=""
  //                             disabled=""
  //                           />
  //                           <label
  //                             className="custom-control-label"
  //                             htmlFor="customRadio4"
  //                           >
  //                             Disabled checkbox
  //                           </label>
  //                         </div>
  //                       </div>
  //                       <div className="col-md-6">
  //                         <div className="custom-control custom-radio mb-3">
  //                           <input
  //                             type="radio"
  //                             name="custom-radio-1"
  //                             className="custom-control-input is-valid"
  //                             id="customRadio5"
  //                           />
  //                           <label
  //                             className="custom-control-label"
  //                             htmlFor="customRadio5"
  //                           >
  //                             Valid radio
  //                           </label>
  //                         </div>
  //                         <div className="custom-control custom-radio mb-3">
  //                           <input
  //                             type="radio"
  //                             name="custom-radio-1"
  //                             className="custom-control-input is-invalid"
  //                             id="customRadio6"
  //                             defaultChecked=""
  //                           />
  //                           <label
  //                             className="custom-control-label"
  //                             htmlFor="customRadio6"
  //                           >
  //                             Invalid radio
  //                           </label>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Switches
  //                 </h3>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3 col-md-6">
  //                     <label className="d-block">Untoggled switch</label>
  //                     <label className="toggle-switch">
  //                       <input type="checkbox" />
  //                       <span className="toggle-switch-slider" />
  //                     </label>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <label className="d-block">Toggled switch</label>
  //                     <label className="toggle-switch">
  //                       <input type="checkbox" defaultChecked="" />
  //                       <span className="toggle-switch-slider" />
  //                     </label>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <label className="d-block">Disabled switch</label>
  //                     <label className="toggle-switch">
  //                       <input type="checkbox" disabled="" />
  //                       <span className="toggle-switch-slider" />
  //                     </label>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <label className="d-block">Disabled switch</label>
  //                     <label className="toggle-switch">
  //                       <input type="checkbox" disabled="" defaultChecked="" />
  //                       <span className="toggle-switch-slider" />
  //                     </label>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3 col-md-6">
  //                     <label className="d-block">Untoggled switch</label>
  //                     <label className="toggle-switch">
  //                       <input type="checkbox" />
  //                       <span className="toggle-switch-slider rounded-circle" />
  //                     </label>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <label className="d-block">Toggled switch</label>
  //                     <label className="toggle-switch">
  //                       <input type="checkbox" defaultChecked="" />
  //                       <span className="toggle-switch-slider rounded-circle" />
  //                     </label>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <label className="d-block">Disabled switch</label>
  //                     <label className="toggle-switch">
  //                       <input type="checkbox" disabled="" />
  //                       <span className="toggle-switch-slider rounded-circle" />
  //                     </label>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <label className="d-block">Disabled switch</label>
  //                     <label className="toggle-switch">
  //                       <input type="checkbox" disabled="" defaultChecked="" />
  //                       <span className="toggle-switch-slider rounded-circle" />
  //                     </label>
  //                   </div>
  //                 </div>
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Sliders
  //                 </h3>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-6">
  //                     {/* Default input slider */}
  //                     <div className="input-slider-container">
  //                       <div
  //                         id="input-slider"
  //                         className="input-slider"
  //                         data-range-value-min={100}
  //                         data-range-value-max={500}
  //                       />
  //                       {/* Input slider values */}
  //                       <div className="row mt-3">
  //                         <div className="col-6">
  //                           <span
  //                             id="input-slider-value"
  //                             className="range-slider-value"
  //                             data-range-value-low={100}
  //                           />
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-6">
  //                     <div className="range-slider-wrapper">
  //                       {/* Range slider container */}
  //                       <div
  //                         id="input-slider-range"
  //                         data-range-value-min={100}
  //                         data-range-value-max={500}
  //                       />
  //                       {/* Range slider values */}
  //                       <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                         <div className="col-6">
  //                           <span
  //                             className="range-slider-value value-low"
  //                             data-range-value-low={200}
  //                             id="input-slider-range-value-low"
  //                           />
  //                         </div>
  //                         <div className="col-6 text-right">
  //                           <span
  //                             className="range-slider-value value-high"
  //                             data-range-value-high={400}
  //                             id="input-slider-range-value-high"
  //                           />
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               {/* Buttons */}
  //               <div className="row align-items-center mb-4 mt-lg">
  //                 <div className="col-8">
  //                   <h2 className="heading h3 mb-0">Buttons</h2>
  //                 </div>
  //                 <div className="col-4 text-right">
  //                   <a href="docs/buttons.html" className="btn btn-sm btn-primary">
  //                     Open in Docs
  //                   </a>
  //                 </div>
  //               </div>
  //               <p className="mb-5">
  //                 Beautiful buttons with plenty of options and styles, including the
  //                 animated and social versions.
  //               </p>
  //               <div className="row-wrapper">
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3 col-md-6">
  //                     <h3 className="heading h6 text-uppercase text-primary mb-4">
  //                       Primary
  //                     </h3>
  //                     <button type="button" className="btn btn-block btn-primary">
  //                       Default
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-primary active"
  //                     >
  //                       Active
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-primary"
  //                       disabled=""
  //                     >
  //                       Disabled
  //                     </button>
  //                     <button type="button" className="btn btn-block btn-primary">
  //                       <i className="fas fa-circle-notch fa-spin" />
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-outline-primary mt-5"
  //                     >
  //                       Outline
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-outline-primary active"
  //                     >
  //                       Outline Active
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-outline-primary"
  //                       disabled=""
  //                     >
  //                       Outline Disabled
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <h3 className="heading h6 text-uppercase text-primary mb-4">
  //                       Secondary
  //                     </h3>
  //                     <button type="button" className="btn btn-block btn-secondary">
  //                       Default
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-secondary active"
  //                     >
  //                       Active
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-secondary"
  //                       disabled=""
  //                     >
  //                       Disabled
  //                     </button>
  //                     <button type="button" className="btn btn-block btn-secondary">
  //                       <i className="fas fa-circle-notch fa-spin" />
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-outline-secondary mt-5"
  //                     >
  //                       Outline
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-outline-secondary active"
  //                     >
  //                       Outline Active
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-outline-secondary"
  //                       disabled=""
  //                     >
  //                       Outline Disabled
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <h3 className="heading h6 text-uppercase text-primary mb-4">
  //                       Tertiary
  //                     </h3>
  //                     <button type="button" className="btn btn-block btn-tertiary">
  //                       Default
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-tertiary active"
  //                     >
  //                       Active
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-tertiary"
  //                       disabled=""
  //                     >
  //                       Disabled
  //                     </button>
  //                     <button type="button" className="btn btn-block btn-tertiary">
  //                       <i className="fas fa-circle-notch fa-spin" />
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-outline-tertiary mt-5"
  //                     >
  //                       Outline
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-outline-tertiary active"
  //                     >
  //                       Outline Active
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-outline-tertiary"
  //                       disabled=""
  //                     >
  //                       Outline Disabled
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <h3 className="heading h6 text-uppercase text-primary mb-4">
  //                       Danger
  //                     </h3>
  //                     <button type="button" className="btn btn-block btn-danger">
  //                       Default
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-danger active"
  //                     >
  //                       Active
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-danger"
  //                       disabled=""
  //                     >
  //                       Disabled
  //                     </button>
  //                     <button type="button" className="btn btn-block btn-danger">
  //                       <i className="fas fa-circle-notch fa-spin" />
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-outline-danger mt-5"
  //                     >
  //                       Outline
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-outline-danger active"
  //                     >
  //                       Outline Active
  //                     </button>
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-outline-danger"
  //                       disabled=""
  //                     >
  //                       Outline Disabled
  //                     </button>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-12">
  //                     <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                       Animated
  //                     </h3>
  //                     <div className="btn-container">
  //                       <button
  //                         type="button"
  //                         className="btn btn-primary btn-animated btn-animated-x"
  //                       >
  //                         <span className="btn-inner--visible">Play music</span>
  //                         <span className="btn-inner--hidden">
  //                           <i className="fas fa-play" />
  //                         </span>
  //                       </button>
  //                       <button
  //                         type="button"
  //                         className="btn btn-secondary btn-animated btn-animated-y"
  //                       >
  //                         <span className="btn-inner--hidden">Buy</span>
  //                         <span className="btn-inner--visible">
  //                           <i className="fas fa-shopping-cart" />
  //                         </span>
  //                       </button>
  //                       <button
  //                         type="button"
  //                         className="btn btn-primary btn-animated btn-animated-x"
  //                       >
  //                         <span className="btn-inner--visible">Next step</span>
  //                         <span className="btn-inner--hidden">
  //                           <i className="fas fa-arrow-right" />
  //                         </span>
  //                       </button>
  //                       <button
  //                         type="button"
  //                         className="btn btn-dark btn-animated btn-animated-y"
  //                       >
  //                         <span className="btn-inner--visible">
  //                           <i className="fas fa-play" />
  //                         </span>
  //                         <span className="btn-inner--hidden">
  //                           <i className="fas fa-pause" />
  //                         </span>
  //                       </button>
  //                     </div>
  //                     <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                       <div className="col-lg-6">
  //                         <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                           Only icons
  //                         </h3>
  //                         <div className="btn-container">
  //                           <button
  //                             type="button"
  //                             className="btn btn-primary btn-icon-only"
  //                           >
  //                             <span className="btn-inner--icon">
  //                               <i className="fas fa-user" />
  //                             </span>
  //                           </button>
  //                           <button
  //                             type="button"
  //                             className="btn btn-secondary btn-icon-only"
  //                           >
  //                             <span className="btn-inner--icon">
  //                               <i className="fas fa-arrow-left" />
  //                             </span>
  //                           </button>
  //                           <button
  //                             type="button"
  //                             className="btn btn-danger btn-icon-only"
  //                           >
  //                             <span className="btn-inner--icon">
  //                               <i className="fas fa-trash-alt" />
  //                             </span>
  //                           </button>
  //                         </div>
  //                       </div>
  //                       <div className="col-lg-6">
  //                         <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                           Rounded circle
  //                         </h3>
  //                         <div className="btn-container">
  //                           <button
  //                             type="button"
  //                             className="btn btn-primary btn-icon-only rounded-circle"
  //                           >
  //                             <span className="btn-inner--icon">
  //                               <i className="fas fa-user" />
  //                             </span>
  //                           </button>
  //                           <button
  //                             type="button"
  //                             className="btn btn-secondary btn-icon-only rounded-circle"
  //                           >
  //                             <span className="btn-inner--icon">
  //                               <i className="fas fa-arrow-left" />
  //                             </span>
  //                           </button>
  //                           <button
  //                             type="button"
  //                             className="btn btn-danger btn-icon-only rounded-circle"
  //                           >
  //                             <span className="btn-inner--icon">
  //                               <i className="fas fa-trash-alt" />
  //                             </span>
  //                           </button>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Social buttons
  //                 </h3>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-facebook btn-icon-label"
  //                     >
  //                       <span className="btn-inner--icon">
  //                         <i className="fab fa-facebook" />
  //                       </span>
  //                       <span className="btn-inner--text">Facebook</span>
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-twitter btn-icon-label"
  //                     >
  //                       <span className="btn-inner--icon">
  //                         <i className="fab fa-twitter" />
  //                       </span>
  //                       <span className="btn-inner--text">Twitter</span>
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-google-plus btn-icon-label"
  //                     >
  //                       <span className="btn-inner--icon">
  //                         <i className="fab fa-google-plus-g" />
  //                       </span>
  //                       <span className="btn-inner--text">Google +</span>
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-instagram btn-icon-label"
  //                     >
  //                       <span className="btn-inner--icon">
  //                         <i className="fab fa-instagram" />
  //                       </span>
  //                       <span className="btn-inner--text">Instagram</span>
  //                     </button>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-pinterest btn-icon-label"
  //                     >
  //                       <span className="btn-inner--icon">
  //                         <i className="fab fa-pinterest" />
  //                       </span>
  //                       <span className="btn-inner--text">Pinterest</span>
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-youtube btn-icon-label"
  //                     >
  //                       <span className="btn-inner--icon">
  //                         <i className="fab fa-youtube" />
  //                       </span>
  //                       <span className="btn-inner--text">Youtube</span>
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-slack btn-icon-label"
  //                     >
  //                       <span className="btn-inner--icon">
  //                         <i className="fab fa-slack" />
  //                       </span>
  //                       <span className="btn-inner--text">Slack</span>
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-dribbble btn-icon-label"
  //                     >
  //                       <span className="btn-inner--icon">
  //                         <i className="fab fa-dribbble" />
  //                       </span>
  //                       <span className="btn-inner--text">Dribbble</span>
  //                     </button>
  //                   </div>
  //                 </div>
  //               </div>
  //               {/* Dropdown */}
  //               <div className="row align-items-center mb-4 mt-lg">
  //                 <div className="col-8">
  //                   <h2 className="heading h3 mb-0">Dropdown</h2>
  //                 </div>
  //                 <div className="col-4 text-right">
  //                   <a
  //                     href="docs/dropdowns.html"
  //                     className="btn btn-sm btn-primary"
  //                   >
  //                     Open in Docs
  //                   </a>
  //                 </div>
  //               </div>
  //               <p className="mb-5">
  //                 Can this UI kit get any better? We guess so. Check out these cool
  //                 dropdowns where we have included some pre-build styles for{" "}
  //                 <strong>user account settings</strong> and{" "}
  //                 <strong>notifications</strong>.
  //               </p>
  //               <div className="row-wrapper">
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3 col-md-6">
  //                     <div className="dropdown">
  //                       <button
  //                         className="btn btn-primary dropdown-toggle"
  //                         type="button"
  //                         id="dropdownMenuButton"
  //                         data-toggle="dropdown"
  //                         aria-haspopup="true"
  //                         aria-expanded="false"
  //                       >
  //                         Dropdown button
  //                       </button>
  //                       <div
  //                         className="dropdown-menu"
  //                         aria-labelledby="dropdownMenuButton"
  //                       >
  //                         <a className="dropdown-item" href="#">
  //                           Action
  //                         </a>
  //                         <a className="dropdown-item" href="#">
  //                           Another action
  //                         </a>
  //                         <a className="dropdown-item" href="#">
  //                           Something else here
  //                         </a>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <div className="dropdown">
  //                       <button
  //                         className="btn btn-secondary dropdown-toggle"
  //                         type="button"
  //                         id="dropdownMenuButton"
  //                         data-toggle="dropdown"
  //                         aria-haspopup="true"
  //                         aria-expanded="false"
  //                       >
  //                         User account
  //                       </button>
  //                       <div className="dropdown-menu">
  //                         <h6 className="dropdown-header">User menu</h6>
  //                         <a className="dropdown-item" href="#">
  //                           <span className="float-right badge badge-primary">
  //                             4
  //                           </span>
  //                           <i className="fas fa-envelope text-primary" />
  //                           Messages
  //                         </a>
  //                         <a className="dropdown-item" href="#">
  //                           <i className="fas fa-cog text-primary" />
  //                           Settings
  //                         </a>
  //                         <div className="dropdown-divider" role="presentation" />
  //                         <a className="dropdown-item" href="#">
  //                           <i className="fas fa-sign-out-alt text-primary" />
  //                           Sign out
  //                         </a>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <div className="dropdown">
  //                       <button
  //                         className="btn btn-secondary dropdown-toggle"
  //                         type="button"
  //                         id="dropdownMenuButton"
  //                         data-toggle="dropdown"
  //                         aria-haspopup="true"
  //                         aria-expanded="false"
  //                       >
  //                         Notifications
  //                       </button>
  //                       <div className="dropdown-menu dropdown-menu-xl py-0">
  //                         <div className="py-3 px-3">
  //                           <h5 className="heading h6 mb-0">Notifications</h5>
  //                         </div>
  //                         <div className="list-group">
  //                           <a
  //                             href="#"
  //                             className="list-group-item list-group-item-action d-flex align-items-center"
  //                           >
  //                             <div className="list-group-img">
  //                               <span className="avatar bg-purple">JD</span>
  //                             </div>
  //                             <div className="list-group-content">
  //                               <div className="list-group-heading">
  //                                 Johnyy Depp <small>10:05 PM</small>
  //                               </div>
  //                               <p className="text-sm">
  //                                 Lorem ipsum dolor sit amet consectetur adipiscing
  //                                 eiusmod tempor
  //                               </p>
  //                             </div>
  //                           </a>
  //                           <a
  //                             href="#"
  //                             className="list-group-item list-group-item-action d-flex align-items-center"
  //                           >
  //                             <div className="list-group-img">
  //                               <span className="avatar bg-pink">TC</span>
  //                             </div>
  //                             <div className="list-group-content">
  //                               <div className="list-group-heading">
  //                                 Tom Cruise <small>10:05 PM</small>
  //                               </div>
  //                               <p className="text-sm">
  //                                 Lorem ipsum dolor sit amet consectetur adipiscing
  //                                 eiusmod tempor
  //                               </p>
  //                             </div>
  //                           </a>
  //                           <a
  //                             href="#"
  //                             className="list-group-item list-group-item-action d-flex align-items-center"
  //                           >
  //                             <div className="list-group-img">
  //                               <span className="avatar bg-blue">WS</span>
  //                             </div>
  //                             <div className="list-group-content">
  //                               <div className="list-group-heading">
  //                                 Will Smith <small>10:05 PM</small>
  //                               </div>
  //                               <p className="text-sm">
  //                                 Lorem ipsum dolor sit amet consectetur adipiscing
  //                                 eiusmod tempor
  //                               </p>
  //                             </div>
  //                           </a>
  //                         </div>
  //                         <div className="py-3 text-center">
  //                           <a href="#" className="link link-sm link--style-3">
  //                             View all notifications
  //                           </a>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               {/* Modals */}
  //               <div className="row align-items-center mb-4 mt-lg">
  //                 <div className="col-8">
  //                   <h2 className="heading h3 mb-0">Modals</h2>
  //                 </div>
  //                 <div className="col-4 text-right">
  //                   <a href="docs/modal.html" className="btn btn-sm btn-primary">
  //                     Open in Docs
  //                   </a>
  //                 </div>
  //               </div>
  //               <p className="mb-5">
  //                 We love colorful modals. That's why you get now more styles with
  //                 eye catching colors that you will simply love.
  //               </p>
  //               <div className="row-wrapper">
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3 col-md-6">
  //                     {/* Button trigger modal */}
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-light"
  //                       data-toggle="modal"
  //                       data-target="#modal_1"
  //                     >
  //                       Default modal
  //                     </button>
  //                     {/* Modal */}
  //                     <div
  //                       className="modal modal-fluid fade"
  //                       id="modal_1"
  //                       tabIndex={-1}
  //                       role="dialog"
  //                       aria-labelledby="modal_1"
  //                       aria-hidden="true"
  //                     >
  //                       <div className="modal-dialog modal-lg" role="document">
  //                         <div className="modal-content">
  //                           <div className="modal-body">
  //                             <div className="row justify-content-center">
  //                               <div className="col-lg-8 text-center py-4">
  //                                 <h4 className="heading h3">
  //                                   Unleash your creativity!
  //                                 </h4>
  //                                 <p className="lead text-muted">
  //                                   You can easy create stackable modal boxes. For
  //                                   example, your inline content or Ajax response
  //                                   can contain a gallery:
  //                                 </p>
  //                                 <div className="py-md">
  //                                   <img
  //                                     src="./assets/images/prv/splash.png"
  //                                     className="img-fluid img-center"
  //                                   />
  //                                 </div>
  //                                 <button
  //                                   type="button"
  //                                   className="btn btn-primary"
  //                                   data-dismiss="modal"
  //                                 >
  //                                   Let's do this!
  //                                 </button>
  //                               </div>
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     {/* Button trigger modal */}
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-danger"
  //                       data-toggle="modal"
  //                       data-target="#modal_5"
  //                     >
  //                       Danger modal
  //                     </button>
  //                     {/* Modal */}
  //                     <div
  //                       className="modal modal-danger fade"
  //                       id="modal_5"
  //                       tabIndex={-1}
  //                       role="dialog"
  //                       aria-labelledby="modal_5"
  //                       aria-hidden="true"
  //                     >
  //                       <div className="modal-dialog" role="document">
  //                         <div className="modal-content">
  //                           <div className="modal-header">
  //                             <h5 className="modal-title" id="modal_title_6">
  //                               This is way to dangerous
  //                             </h5>
  //                             <button
  //                               type="button"
  //                               className="close"
  //                               data-dismiss="modal"
  //                               aria-label="Close"
  //                             >
  //                               <span aria-hidden="true">×</span>
  //                             </button>
  //                           </div>
  //                           <div className="modal-body">
  //                             <div className="py-3 text-center">
  //                               <i className="fas fa-exclamation-circle fa-4x" />
  //                               <h4 className="heading mt-4">
  //                                 Should we stop now?
  //                               </h4>
  //                               <p>
  //                                 You can easy create stackable modal boxes. For
  //                                 example, your inline content or Ajax response can
  //                                 contain a gallery:
  //                               </p>
  //                             </div>
  //                           </div>
  //                           <div className="modal-footer">
  //                             <button
  //                               type="button"
  //                               className="btn btn-sm btn-secondary"
  //                               data-dismiss="modal"
  //                             >
  //                               Probably not
  //                             </button>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               {/* Popovers and tooltips */}
  //               <div className="row align-items-center mb-4 mt-lg">
  //                 <div className="col-8">
  //                   <h2 className="heading h3 mb-0">Popovers &amp; Tooltips</h2>
  //                 </div>
  //                 <div className="col-4 text-right">
  //                   <a href="docs/tooltips.html" className="btn btn-sm btn-primary">
  //                     Open in Docs
  //                   </a>
  //                 </div>
  //               </div>
  //               <div className="row-wrapper">
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Tooltips
  //                 </h3>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-secondary"
  //                       data-toggle="tooltip"
  //                       data-placement="top"
  //                       title="Tooltip on top"
  //                     >
  //                       Tooltip on top
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-secondary"
  //                       data-toggle="tooltip"
  //                       data-placement="right"
  //                       title="Tooltip on right"
  //                     >
  //                       Tooltip on right
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-secondary"
  //                       data-toggle="tooltip"
  //                       data-placement="bottom"
  //                       title="Tooltip on bottom"
  //                     >
  //                       Tooltip on bottom
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-secondary"
  //                       data-toggle="tooltip"
  //                       data-placement="left"
  //                       title="Tooltip on left"
  //                     >
  //                       Tooltip on left
  //                     </button>
  //                   </div>
  //                 </div>
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Popovers
  //                 </h3>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-secondary"
  //                       data-container="body"
  //                       data-title="Please, help!"
  //                       data-toggle="popover"
  //                       data-placement="top"
  //                       data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
  //                     >
  //                       Popover on top
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-secondary"
  //                       data-container="body"
  //                       data-toggle="popover"
  //                       data-color="primary"
  //                       data-placement="right"
  //                       data-title="Please, help!"
  //                       data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
  //                     >
  //                       Popover on right
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-secondary"
  //                       data-container="body"
  //                       data-toggle="popover"
  //                       data-color="secondary"
  //                       data-placement="bottom"
  //                       data-title="Please, help!"
  //                       data-content="Vivamus
  //                 sagittis lacus vel augue laoreet rutrum faucibus."
  //                     >
  //                       Popover on bottom
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-secondary"
  //                       data-container="body"
  //                       data-toggle="popover"
  //                       data-color="tertiary"
  //                       data-placement="left"
  //                       data-title="Please, help!"
  //                       data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
  //                     >
  //                       Popover on left
  //                     </button>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-danger"
  //                       data-container="body"
  //                       data-toggle="popover"
  //                       data-color="danger"
  //                       data-placement="top"
  //                       data-title="Please, help!"
  //                       data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
  //                     >
  //                       Danger popover
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-warning"
  //                       data-container="body"
  //                       data-toggle="popover"
  //                       data-color="warning"
  //                       data-placement="right"
  //                       data-title="Please, help!"
  //                       data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
  //                     >
  //                       Warning popover
  //                     </button>
  //                   </div>
  //                   <div className="col-lg-3 col-md-6">
  //                     <button
  //                       type="button"
  //                       className="btn btn-block btn-success"
  //                       data-container="body"
  //                       data-toggle="popover"
  //                       data-color="success"
  //                       data-placement="left"
  //                       data-title="Please, help!"
  //                       data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
  //                     >
  //                       Success popover
  //                     </button>
  //                   </div>
  //                 </div>
  //               </div>
  //               {/* Avatars */}
  //               <div className="row align-items-center mb-4 mt-lg">
  //                 <div className="col-8">
  //                   <h2 className="heading h3 mb-0">Avatars</h2>
  //                 </div>
  //                 <div className="col-4 text-right">
  //                   <a href="docs/avatars.html" className="btn btn-sm btn-primary">
  //                     Open in Docs
  //                   </a>
  //                 </div>
  //               </div>
  //               <p className="mb-5">
  //                 Multiple style and sizes for avatars inspired by the Material
  //                 Design.
  //               </p>
  //               <div className="row-wrapper">
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Large
  //                 </h3>
  //                 <span className="clearfix" />
  //                 <span className="avatar avatar-lg bg-blue mr-3">WS</span>
  //                 <span className="avatar avatar-lg bg-twitter mr-3">
  //                   <i className="fab fa-twitter" />
  //                 </span>
  //                 <span className="avatar avatar-lg bg-red mr-3">
  //                   <i className="fas fa-heart" />
  //                 </span>
  //                 <span className="avatar avatar-lg mr-3">A</span>
  //                 <img
  //                   src="assets/images/prv/thumb-1.jpg"
  //                   className="avatar avatar-lg mr-3"
  //                 />
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Medium
  //                 </h3>
  //                 <span className="clearfix" />
  //                 <span className="avatar bg-blue mr-3">WS</span>
  //                 <span className="avatar bg-twitter mr-3">
  //                   <i className="fab fa-twitter" />
  //                 </span>
  //                 <span className="avatar bg-red mr-3">
  //                   <i className="fas fa-heart" />
  //                 </span>
  //                 <span className="avatar mr-3">A</span>
  //                 <img
  //                   src="assets/images/prv/thumb-1.jpg"
  //                   className="avatar mr-3"
  //                 />
  //                 <span className="clearfix" />
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Small
  //                 </h3>
  //                 <span className="avatar avatar-sm bg-blue mr-3">WS</span>
  //                 <span className="avatar avatar-sm bg-twitter mr-3">
  //                   <i className="fab fa-twitter" />
  //                 </span>
  //                 <span className="avatar avatar-sm bg-red mr-3">
  //                   <i className="fas fa-heart" />
  //                 </span>
  //                 <span className="avatar avatar-sm mr-3">A</span>
  //                 <img
  //                   src="assets/images/prv/thumb-1.jpg"
  //                   className="avatar avatar-sm"
  //                 />
  //               </div>
  //               {/* Navbar */}
  //               <div className="row align-items-center mb-4 mt-lg">
  //                 <div className="col-8">
  //                   <h2 className="heading h3 mb-0">Navbar</h2>
  //                 </div>
  //                 <div className="col-4 text-right">
  //                   <a href="docs/navbar.html" className="btn btn-sm btn-primary">
  //                     Open in Docs
  //                   </a>
  //                 </div>
  //               </div>
  //               <p className="mb-5">
  //                 Navigation made simple with multiple color variations that can be
  //                 changed with the pre-defined modifier classes. The PRO version
  //                 will come with even more options and layout styles. Stay tuned!
  //               </p>
  //               <div className="mb-5">
  //                 <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
  //                   <a className="navbar-brand" href="#">
  //                     Boomerang
  //                   </a>
  //                   <button
  //                     className="navbar-toggler"
  //                     type="button"
  //                     data-toggle="collapse"
  //                     data-target="#navbar_example_1"
  //                     aria-controls="navbar_example_1"
  //                     aria-expanded="false"
  //                     aria-label="Toggle navigation"
  //                   >
  //                     <span className="navbar-toggler-icon" />
  //                   </button>
  //                   <div className="collapse navbar-collapse" id="navbar_example_1">
  //                     <ul className="navbar-nav mr-auto">
  //                       <li className="nav-item active">
  //                         <a className="nav-link" href="#">
  //                           Home <span className="sr-only">(current)</span>
  //                         </a>
  //                       </li>
  //                       <li className="nav-item">
  //                         <a className="nav-link" href="#">
  //                           Link
  //                         </a>
  //                       </li>
  //                       <li className="nav-item dropdown">
  //                         <a
  //                           className="nav-link dropdown-toggle"
  //                           href="#"
  //                           id="navbar_1_dropdown_1"
  //                           role="button"
  //                           data-toggle="dropdown"
  //                           aria-haspopup="true"
  //                           aria-expanded="false"
  //                         >
  //                           Dropdown
  //                         </a>
  //                         <div
  //                           className="dropdown-menu"
  //                           aria-labelledby="navbar_1_dropdown_1"
  //                         >
  //                           <a className="dropdown-item" href="#">
  //                             Action
  //                           </a>
  //                           <a className="dropdown-item" href="#">
  //                             Another action
  //                           </a>
  //                           <div className="dropdown-divider" />
  //                           <a className="dropdown-item" href="#">
  //                             Something else here
  //                           </a>
  //                         </div>
  //                       </li>
  //                       <li className="nav-item">
  //                         <a className="nav-link disabled" href="#">
  //                           Disabled
  //                         </a>
  //                       </li>
  //                     </ul>
  //                     <ul className="navbar-nav ml-auto">
  //                       <li className="nav-item">
  //                         <a className="nav-link nav-link-icon" href="#">
  //                           <i className="fas fa-cogs" />
  //                         </a>
  //                       </li>
  //                       <li className="nav-item dropdown">
  //                         <a
  //                           className="nav-link nav-link-icon"
  //                           href="#"
  //                           id="navbar_1_dropdown_2"
  //                           role="button"
  //                           data-toggle="dropdown"
  //                           aria-haspopup="true"
  //                           aria-expanded="false"
  //                         >
  //                           <i className="fas fa-bell" />
  //                         </a>
  //                         <div className="dropdown-menu dropdown-menu-right dropdown-menu-xl py-0">
  //                           <div className="py-3 px-3">
  //                             <h5 className="heading h6 mb-0">Notifications</h5>
  //                           </div>
  //                           <div className="list-group">
  //                             <a
  //                               href="#"
  //                               className="list-group-item list-group-item-action d-flex align-items-center"
  //                             >
  //                               <div className="list-group-img">
  //                                 <span className="avatar bg-purple">JD</span>
  //                               </div>
  //                               <div className="list-group-content">
  //                                 <div className="list-group-heading">
  //                                   Johnyy Depp <small>10:05 PM</small>
  //                                 </div>
  //                                 <p className="text-sm">
  //                                   Lorem ipsum dolor sit amet consectetur
  //                                   adipiscing eiusmod tempor
  //                                 </p>
  //                               </div>
  //                             </a>
  //                             <a
  //                               href="#"
  //                               className="list-group-item list-group-item-action d-flex align-items-center"
  //                             >
  //                               <div className="list-group-img">
  //                                 <span className="avatar bg-pink">TC</span>
  //                               </div>
  //                               <div className="list-group-content">
  //                                 <div className="list-group-heading">
  //                                   Tom Cruise <small>10:05 PM</small>
  //                                 </div>
  //                                 <p className="text-sm">
  //                                   Lorem ipsum dolor sit amet consectetur
  //                                   adipiscing eiusmod tempor
  //                                 </p>
  //                               </div>
  //                             </a>
  //                             <a
  //                               href="#"
  //                               className="list-group-item list-group-item-action d-flex align-items-center"
  //                             >
  //                               <div className="list-group-img">
  //                                 <span className="avatar bg-blue">WS</span>
  //                               </div>
  //                               <div className="list-group-content">
  //                                 <div className="list-group-heading">
  //                                   Will Smith <small>10:05 PM</small>
  //                                 </div>
  //                                 <p className="text-sm">
  //                                   Lorem ipsum dolor sit amet consectetur
  //                                   adipiscing eiusmod tempor
  //                                 </p>
  //                               </div>
  //                             </a>
  //                           </div>
  //                           <div className="py-3 text-center">
  //                             <a href="#" className="link link-sm link--style-3">
  //                               View all notifications
  //                             </a>
  //                           </div>
  //                         </div>
  //                       </li>
  //                       <li className="nav-item dropdown">
  //                         <a
  //                           className="nav-link nav-link-icon"
  //                           href="#"
  //                           id="navbar_1_dropdown_3"
  //                           role="button"
  //                           data-toggle="dropdown"
  //                           aria-haspopup="true"
  //                           aria-expanded="false"
  //                         >
  //                           <i className="fas fa-user" />
  //                         </a>
  //                         <div className="dropdown-menu dropdown-menu-right">
  //                           <h6 className="dropdown-header">User menu</h6>
  //                           <a className="dropdown-item" href="#">
  //                             <span className="float-right badge badge-primary">
  //                               4
  //                             </span>
  //                             <i className="fas fa-envelope text-primary" />
  //                             Messages
  //                           </a>
  //                           <a className="dropdown-item" href="#">
  //                             <i className="fas fa-cog text-primary" />
  //                             Settings
  //                           </a>
  //                           <div className="dropdown-divider" role="presentation" />
  //                           <a className="dropdown-item" href="#">
  //                             <i className="fas fa-sign-out-alt text-primary" />
  //                             Sign out
  //                           </a>
  //                         </div>
  //                       </li>
  //                     </ul>
  //                   </div>
  //                 </nav>
  //               </div>
  //               <div className="mb-5">
  //                 <nav className="navbar navbar-expand-lg navbar-light bg-secondary rounded">
  //                   <a className="navbar-brand" href="#">
  //                     Boomerang
  //                   </a>
  //                   <button
  //                     className="navbar-toggler"
  //                     type="button"
  //                     data-toggle="collapse"
  //                     data-target="#navbar_example_2"
  //                     aria-controls="navbar_example_2"
  //                     aria-expanded="false"
  //                     aria-label="Toggle navigation"
  //                   >
  //                     <span className="navbar-toggler-icon" />
  //                   </button>
  //                   <div className="collapse navbar-collapse" id="navbar_example_2">
  //                     <ul className="navbar-nav mr-auto">
  //                       <li className="nav-item active">
  //                         <a className="nav-link" href="#">
  //                           Home <span className="sr-only">(current)</span>
  //                         </a>
  //                       </li>
  //                       <li className="nav-item">
  //                         <a className="nav-link" href="#">
  //                           Link
  //                         </a>
  //                       </li>
  //                       <li className="nav-item dropdown">
  //                         <a
  //                           className="nav-link dropdown-toggle"
  //                           href="#"
  //                           id="navbar_1_dropdown_1"
  //                           role="button"
  //                           data-toggle="dropdown"
  //                           aria-haspopup="true"
  //                           aria-expanded="false"
  //                         >
  //                           Dropdown
  //                         </a>
  //                         <div
  //                           className="dropdown-menu"
  //                           aria-labelledby="navbar_1_dropdown_1"
  //                         >
  //                           <a className="dropdown-item" href="#">
  //                             Action
  //                           </a>
  //                           <a className="dropdown-item" href="#">
  //                             Another action
  //                           </a>
  //                           <div className="dropdown-divider" />
  //                           <a className="dropdown-item" href="#">
  //                             Something else here
  //                           </a>
  //                         </div>
  //                       </li>
  //                       <li className="nav-item">
  //                         <a className="nav-link disabled" href="#">
  //                           Disabled
  //                         </a>
  //                       </li>
  //                     </ul>
  //                     <ul className="navbar-nav ml-auto">
  //                       <li className="nav-item">
  //                         <a className="nav-link nav-link-icon" href="#">
  //                           <i className="fas fa-cogs" />
  //                         </a>
  //                       </li>
  //                       <li className="nav-item dropdown">
  //                         <a
  //                           className="nav-link nav-link-icon"
  //                           href="#"
  //                           id="navbar_2_dropdown_2"
  //                           role="button"
  //                           data-toggle="dropdown"
  //                           aria-haspopup="true"
  //                           aria-expanded="false"
  //                         >
  //                           <i className="fas fa-bell" />
  //                         </a>
  //                         <div className="dropdown-menu dropdown-menu-right dropdown-menu-xl py-0">
  //                           <div className="py-3 px-3">
  //                             <h5 className="heading h6 mb-0">Notifications</h5>
  //                           </div>
  //                           <div className="list-group">
  //                             <a
  //                               href="#"
  //                               className="list-group-item list-group-item-action d-flex align-items-center"
  //                             >
  //                               <div className="list-group-img">
  //                                 <span className="avatar bg-purple">JD</span>
  //                               </div>
  //                               <div className="list-group-content">
  //                                 <div className="list-group-heading">
  //                                   Johnyy Depp <small>10:05 PM</small>
  //                                 </div>
  //                                 <p className="text-sm">
  //                                   Lorem ipsum dolor sit amet consectetur
  //                                   adipiscing eiusmod tempor
  //                                 </p>
  //                               </div>
  //                             </a>
  //                             <a
  //                               href="#"
  //                               className="list-group-item list-group-item-action d-flex align-items-center"
  //                             >
  //                               <div className="list-group-img">
  //                                 <span className="avatar bg-pink">TC</span>
  //                               </div>
  //                               <div className="list-group-content">
  //                                 <div className="list-group-heading">
  //                                   Tom Cruise <small>10:05 PM</small>
  //                                 </div>
  //                                 <p className="text-sm">
  //                                   Lorem ipsum dolor sit amet consectetur
  //                                   adipiscing eiusmod tempor
  //                                 </p>
  //                               </div>
  //                             </a>
  //                             <a
  //                               href="#"
  //                               className="list-group-item list-group-item-action d-flex align-items-center"
  //                             >
  //                               <div className="list-group-img">
  //                                 <span className="avatar bg-blue">WS</span>
  //                               </div>
  //                               <div className="list-group-content">
  //                                 <div className="list-group-heading">
  //                                   Will Smith <small>10:05 PM</small>
  //                                 </div>
  //                                 <p className="text-sm">
  //                                   Lorem ipsum dolor sit amet consectetur
  //                                   adipiscing eiusmod tempor
  //                                 </p>
  //                               </div>
  //                             </a>
  //                           </div>
  //                           <div className="py-3 text-center">
  //                             <a href="#" className="link link-sm link--style-3">
  //                               View all notifications
  //                             </a>
  //                           </div>
  //                         </div>
  //                       </li>
  //                       <li className="nav-item dropdown">
  //                         <a
  //                           className="nav-link nav-link-icon"
  //                           href="#"
  //                           id="navbar_2_dropdown_3"
  //                           role="button"
  //                           data-toggle="dropdown"
  //                           aria-haspopup="true"
  //                           aria-expanded="false"
  //                         >
  //                           <i className="fas fa-user" />
  //                         </a>
  //                         <div className="dropdown-menu dropdown-menu-right">
  //                           <h6 className="dropdown-header">User menu</h6>
  //                           <a className="dropdown-item" href="#">
  //                             <span className="float-right badge badge-primary">
  //                               4
  //                             </span>
  //                             <i className="fas fa-envelope text-primary" />
  //                             Messages
  //                           </a>
  //                           <a className="dropdown-item" href="#">
  //                             <i className="fas fa-cog text-primary" />
  //                             Settings
  //                           </a>
  //                           <div className="dropdown-divider" role="presentation" />
  //                           <a className="dropdown-item" href="#">
  //                             <i className="fas fa-sign-out-alt text-primary" />
  //                             Sign out
  //                           </a>
  //                         </div>
  //                       </li>
  //                     </ul>
  //                   </div>
  //                 </nav>
  //               </div>
  //               <div className="">
  //                 <nav className="navbar navbar-expand-lg navbar-dark bg-tertiary rounded">
  //                   <a className="navbar-brand" href="#">
  //                     Boomerang
  //                   </a>
  //                   <button
  //                     className="navbar-toggler"
  //                     type="button"
  //                     data-toggle="collapse"
  //                     data-target="#navbar_3"
  //                     aria-controls="navbar_3"
  //                     aria-expanded="false"
  //                     aria-label="Toggle navigation"
  //                   >
  //                     <span className="navbar-toggler-icon" />
  //                   </button>
  //                   <div className="collapse navbar-collapse" id="navbar_3">
  //                     <ul className="navbar-nav mr-auto">
  //                       <li className="nav-item active">
  //                         <a className="nav-link" href="#">
  //                           Home <span className="sr-only">(current)</span>
  //                         </a>
  //                       </li>
  //                       <li className="nav-item">
  //                         <a className="nav-link" href="#">
  //                           Link
  //                         </a>
  //                       </li>
  //                       <li className="nav-item dropdown">
  //                         <a
  //                           className="nav-link dropdown-toggle"
  //                           href="#"
  //                           id="navbar_3_dropdown_1"
  //                           role="button"
  //                           data-toggle="dropdown"
  //                           aria-haspopup="true"
  //                           aria-expanded="false"
  //                         >
  //                           Dropdown
  //                         </a>
  //                         <div
  //                           className="dropdown-menu"
  //                           aria-labelledby="navbarDropdown"
  //                         >
  //                           <a className="dropdown-item" href="#">
  //                             Action
  //                           </a>
  //                           <a className="dropdown-item" href="#">
  //                             Another action
  //                           </a>
  //                           <div className="dropdown-divider" />
  //                           <a className="dropdown-item" href="#">
  //                             Something else here
  //                           </a>
  //                         </div>
  //                       </li>
  //                       <li className="nav-item">
  //                         <a className="nav-link disabled" href="#">
  //                           Disabled
  //                         </a>
  //                       </li>
  //                     </ul>
  //                     <form className="form-inline my-2 my-lg-0">
  //                       <input
  //                         className="form-control form-control-sm mr-sm-2"
  //                         type="search"
  //                         placeholder="Search"
  //                         aria-label="Search"
  //                       />
  //                       <button
  //                         className="btn btn-sm btn-primary my-2 my-sm-0"
  //                         type="submit"
  //                       >
  //                         Search
  //                       </button>
  //                     </form>
  //                   </div>
  //                 </nav>
  //               </div>
  //               {/* Tabs */}
  //               <div className="row align-items-center mb-4 mt-lg">
  //                 <div className="col-8">
  //                   <h2 className="heading h3 mb-0">Tabs</h2>
  //                 </div>
  //                 <div className="col-4 text-right">
  //                   <a href="docs/navs.html" className="btn btn-sm btn-primary">
  //                     Open in Docs
  //                   </a>
  //                 </div>
  //               </div>
  //               <p className="mb-5">
  //                 Customize with ease the tab's navigation with any of the icons
  //                 offered by Font Awesome. Check out the dedicated section to see
  //                 all examples.
  //               </p>
  //               <div className="row-wrapper">
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-6">
  //                     <ul
  //                       className="nav nav-pills nav-fill flex-column flex-sm-row"
  //                       id="myTab"
  //                       role="tablist"
  //                     >
  //                       <li className="nav-item">
  //                         <a
  //                           className="nav-link mb-sm-3 active"
  //                           id="home-tab"
  //                           data-toggle="tab"
  //                           href="#home"
  //                           role="tab"
  //                           aria-controls="home"
  //                           aria-selected="true"
  //                         >
  //                           UI/UX Design
  //                         </a>
  //                       </li>
  //                       <li className="nav-item">
  //                         <a
  //                           className="nav-link mb-sm-3"
  //                           id="profile-tab"
  //                           data-toggle="tab"
  //                           href="#profile"
  //                           role="tab"
  //                           aria-controls="profile"
  //                           aria-selected="false"
  //                         >
  //                           Programming
  //                         </a>
  //                       </li>
  //                       <li className="nav-item">
  //                         <a
  //                           className="nav-link mb-sm-3"
  //                           id="contact-tab"
  //                           data-toggle="tab"
  //                           href="#contact"
  //                           role="tab"
  //                           aria-controls="contact"
  //                           aria-selected="false"
  //                         >
  //                           Web Development
  //                         </a>
  //                       </li>
  //                     </ul>
  //                     <div className="tab-content" id="myTabContent">
  //                       <div
  //                         className="tab-pane fade show active"
  //                         id="home"
  //                         role="tabpanel"
  //                         aria-labelledby="home-tab"
  //                       >
  //                         <p>
  //                           Raw denim you probably haven't heard of them jean shorts
  //                           Austin. Nesciunt tofu stumptown aliqua, retro synth
  //                           master cleanse. Mustache cliche tempor, williamsburg
  //                           carles vegan helvetica. Reprehenderit butcher retro
  //                           keffiyeh dreamcatcher synth.
  //                         </p>
  //                         <p>
  //                           Cosby sweater eu banh mi, qui irure terry richardson ex
  //                           squid. Aliquip placeat salvia cillum iphone. Seitan
  //                           aliquip quis cardigan american apparel, butcher
  //                           voluptate nisi qui.
  //                         </p>
  //                       </div>
  //                       <div
  //                         className="tab-pane fade"
  //                         id="profile"
  //                         role="tabpanel"
  //                         aria-labelledby="profile-tab"
  //                       >
  //                         <p>
  //                           Cosby sweater eu banh mi, qui irure terry richardson ex
  //                           squid. Aliquip placeat salvia cillum iphone. Seitan
  //                           aliquip quis cardigan american apparel, butcher
  //                           voluptate nisi qui.
  //                         </p>
  //                       </div>
  //                       <div
  //                         className="tab-pane fade"
  //                         id="contact"
  //                         role="tabpanel"
  //                         aria-labelledby="contact-tab"
  //                       >
  //                         <p>
  //                           Raw denim you probably haven't heard of them jean shorts
  //                           Austin. Nesciunt tofu stumptown aliqua, retro synth
  //                           master cleanse. Mustache cliche tempor, williamsburg
  //                           carles vegan helvetica. Reprehenderit butcher retro
  //                           keffiyeh dreamcatcher synth.
  //                         </p>
  //                         <p>
  //                           Cosby sweater eu banh mi, qui irure terry richardson ex
  //                           squid. Aliquip placeat salvia cillum iphone. Seitan
  //                           aliquip quis cardigan american apparel, butcher
  //                           voluptate nisi qui.
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-6">
  //                     <ul
  //                       className="nav nav-pills nav-fill mb-3"
  //                       id="tabs_2"
  //                       role="tablist"
  //                     >
  //                       <li className="nav-item">
  //                         <a
  //                           className="nav-link active"
  //                           id="home-tab"
  //                           data-toggle="tab"
  //                           href="#tabs_2_1"
  //                           role="tab"
  //                           aria-controls="home"
  //                           aria-selected="true"
  //                         >
  //                           <span className="nav-link-icon d-block">
  //                             <i className="fab fa-connectdevelop fa-2x" />
  //                           </span>
  //                           <span className="d-none d-sm-block mt-3">
  //                             UI/UX Design
  //                           </span>
  //                         </a>
  //                       </li>
  //                       <li className="nav-item">
  //                         <a
  //                           className="nav-link"
  //                           id="profile-tab"
  //                           data-toggle="tab"
  //                           href="#tabs_2_2"
  //                           role="tab"
  //                           aria-controls="profile"
  //                           aria-selected="false"
  //                         >
  //                           <span className="nav-link-icon d-block">
  //                             <i className="fas fa-code fa-2x" />
  //                           </span>
  //                           <span className="d-none d-sm-block mt-3">
  //                             Programming
  //                           </span>
  //                         </a>
  //                       </li>
  //                       <li className="nav-item">
  //                         <a
  //                           className="nav-link"
  //                           id="contact-tab"
  //                           data-toggle="tab"
  //                           href="#tabs_2_3"
  //                           role="tab"
  //                           aria-controls="contact"
  //                           aria-selected="false"
  //                         >
  //                           <span className="nav-link-icon d-block">
  //                             <i className="fab fa-node-js fa-2x" />
  //                           </span>
  //                           <span className="d-none d-sm-block mt-3">
  //                             Web Development
  //                           </span>
  //                         </a>
  //                       </li>
  //                     </ul>
  //                     <div className="tab-content" id="myTabContent">
  //                       <div
  //                         className="tab-pane fade show active"
  //                         id="tabs_2_1"
  //                         role="tabpanel"
  //                         aria-labelledby="home-tab"
  //                       >
  //                         <p>
  //                           Raw denim you probably haven't heard of them jean shorts
  //                           Austin. Nesciunt tofu stumptown aliqua, retro synth
  //                           master cleanse. Mustache cliche tempor, williamsburg
  //                           carles vegan helvetica. Reprehenderit butcher retro
  //                           keffiyeh dreamcatcher synth.
  //                         </p>
  //                         <p>
  //                           Cosby sweater eu banh mi, qui irure terry richardson ex
  //                           squid. Aliquip placeat salvia cillum iphone. Seitan
  //                           aliquip quis cardigan american apparel, butcher
  //                           voluptate nisi qui.
  //                         </p>
  //                       </div>
  //                       <div
  //                         className="tab-pane fade"
  //                         id="tabs_2_2"
  //                         role="tabpanel"
  //                         aria-labelledby="profile-tab"
  //                       >
  //                         <p>
  //                           Cosby sweater eu banh mi, qui irure terry richardson ex
  //                           squid. Aliquip placeat salvia cillum iphone. Seitan
  //                           aliquip quis cardigan american apparel, butcher
  //                           voluptate nisi qui.
  //                         </p>
  //                       </div>
  //                       <div
  //                         className="tab-pane fade"
  //                         id="tabs_2_3"
  //                         role="tabpanel"
  //                         aria-labelledby="contact-tab"
  //                       >
  //                         <p>
  //                           Raw denim you probably haven't heard of them jean shorts
  //                           Austin. Nesciunt tofu stumptown aliqua, retro synth
  //                           master cleanse. Mustache cliche tempor, williamsburg
  //                           carles vegan helvetica. Reprehenderit butcher retro
  //                           keffiyeh dreamcatcher synth.
  //                         </p>
  //                         <p>
  //                           Cosby sweater eu banh mi, qui irure terry richardson ex
  //                           squid. Aliquip placeat salvia cillum iphone. Seitan
  //                           aliquip quis cardigan american apparel, butcher
  //                           voluptate nisi qui.
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               {/* Other elements */}
  //               <h2 className="heading h3 mb-3" style={{ marginTop: "7rem" }}>
  //                 Other elements
  //               </h2>
  //               <p className="mb-5">
  //                 Check out these customized UI components with extended
  //                 functionalities and styles. From progress bars, basges, alerts,
  //                 badges you get everything you need in beautiful free pack.{" "}
  //                 <a href="docs/introduction.html">Learn more in the Docs</a>
  //               </p>
  //               <div className="row-wrapper">
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Progress
  //                 </h3>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-6">
  //                     {/* Default */}
  //                     <div className="progress-wrapper mt-0 mb-5">
  //                       <div className="progress bg-primary">
  //                         <div
  //                           className="progress-bar bg-base-1"
  //                           role="progressbar"
  //                           style={{ width: "20%" }}
  //                           aria-valuenow={20}
  //                           aria-valuemin={0}
  //                           aria-valuemax={100}
  //                         >
  //                           20%
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-6">
  //                     {/* Default */}
  //                     <div className="progress-wrapper mt-0 mb-5">
  //                       <div className="progress bg-secondary">
  //                         <div
  //                           className="progress-bar bg-base-1"
  //                           role="progressbar"
  //                           style={{ width: "20%" }}
  //                           aria-valuenow={20}
  //                           aria-valuemin={0}
  //                           aria-valuemax={100}
  //                         >
  //                           20%
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-6">
  //                     {/* Outer label and percentage */}
  //                     <div className="progress-wrapper">
  //                       <h4 className="progress-label text-uppercase">Style 2</h4>
  //                       <h4 className="progress-percentage text-uppercase">40%</h4>
  //                       <div className="progress" style={{ height: 5 }}>
  //                         <div
  //                           className="progress-bar bg-purple"
  //                           role="progressbar"
  //                           aria-valuenow={40}
  //                           aria-valuemin={0}
  //                           aria-valuemax={100}
  //                           style={{ width: "40%" }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-6">
  //                     {/* Outer label and percentage */}
  //                     <div className="progress-wrapper">
  //                       <h4 className="progress-label text-uppercase">Style 2</h4>
  //                       <h4 className="progress-percentage text-uppercase">40%</h4>
  //                       <div className="progress" style={{ height: 5 }}>
  //                         <div
  //                           className="progress-bar bg-cyan"
  //                           role="progressbar"
  //                           aria-valuenow={40}
  //                           aria-valuemin={0}
  //                           aria-valuemax={100}
  //                           style={{ width: "40%" }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-6">
  //                     {/* Label as tooltip */}
  //                     <div className="progress-wrapper">
  //                       <h4
  //                         className="progress-tooltip text-uppercase"
  //                         style={{ left: "60%" }}
  //                       >
  //                         Identity
  //                       </h4>
  //                       <div className="progress" style={{ height: 3 }}>
  //                         <div
  //                           className="progress-bar bg-dark"
  //                           role="progressbar"
  //                           aria-valuenow={40}
  //                           aria-valuemin={0}
  //                           aria-valuemax={100}
  //                           style={{ width: "60%" }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-6">
  //                     {/* Label as tooltip */}
  //                     <div className="progress-wrapper">
  //                       <h4
  //                         className="progress-tooltip text-uppercase"
  //                         style={{ left: "60%" }}
  //                       >
  //                         Identity
  //                       </h4>
  //                       <div className="progress" style={{ height: 3 }}>
  //                         <div
  //                           className="progress-bar bg-red"
  //                           role="progressbar"
  //                           aria-valuenow={40}
  //                           aria-valuemin={0}
  //                           aria-valuemax={100}
  //                           style={{ width: "60%" }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Badges
  //                 </h3>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-6">
  //                     <div className="mb-4">
  //                       <span className="badge badge-pill badge-primary text-uppercase">
  //                         Primary
  //                       </span>
  //                       <span className="badge badge-pill badge-secondary text-uppercase">
  //                         Secondary
  //                       </span>
  //                       <span className="badge badge-pill badge-success text-uppercase">
  //                         Success
  //                       </span>
  //                       <span className="badge badge-pill badge-danger text-uppercase">
  //                         Danger
  //                       </span>
  //                       <span className="badge badge-pill badge-warning text-uppercase">
  //                         Warning
  //                       </span>
  //                       <span className="badge badge-pill badge-info text-uppercase">
  //                         Info
  //                       </span>
  //                     </div>
  //                     <div className="mb-4">
  //                       <span className="badge badge-md badge-pill badge-primary text-uppercase">
  //                         Primary
  //                       </span>
  //                       <span className="badge badge-md badge-pill badge-secondary text-uppercase">
  //                         Secondary
  //                       </span>
  //                       <span className="badge badge-md badge-pill badge-success text-uppercase">
  //                         Success
  //                       </span>
  //                       <span className="badge badge-md badge-pill badge-danger text-uppercase">
  //                         Danger
  //                       </span>
  //                       <span className="badge badge-md badge-pill badge-warning text-uppercase">
  //                         Warning
  //                       </span>
  //                       <span className="badge badge-md badge-pill badge-info text-uppercase">
  //                         Info
  //                       </span>
  //                     </div>
  //                     <div className="">
  //                       <span className="badge badge-lg badge-pill badge-primary text-uppercase">
  //                         Primary
  //                       </span>
  //                       <span className="badge badge-lg badge-pill badge-secondary text-uppercase">
  //                         Secondary
  //                       </span>
  //                       <span className="badge badge-lg badge-pill badge-success text-uppercase">
  //                         Success
  //                       </span>
  //                       <span className="badge badge-lg badge-pill badge-danger text-uppercase">
  //                         Danger
  //                       </span>
  //                       <span className="badge badge-lg badge-pill badge-warning text-uppercase">
  //                         Warning
  //                       </span>
  //                       <span className="badge badge-lg badge-pill badge-info text-uppercase">
  //                         Info
  //                       </span>
  //                     </div>
  //                   </div>
  //                   <div className="col-lg-6">
  //                     <div className="">
  //                       <button type="button" className="btn btn-primary">
  //                         Notifications{" "}
  //                         <span className="badge badge-light ml-2">4</span>
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Pagination
  //                 </h3>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-6">
  //                     {/* Pagination with text */}
  //                     <nav aria-label="Page navigation example">
  //                       <ul className="pagination">
  //                         <li className="page-item">
  //                           <a className="page-link" href="#">
  //                             Previous
  //                           </a>
  //                         </li>
  //                         <li className="page-item">
  //                           <a className="page-link" href="#">
  //                             1
  //                           </a>
  //                         </li>
  //                         <li className="page-item active">
  //                           <a className="page-link" href="#">
  //                             2
  //                           </a>
  //                         </li>
  //                         <li className="page-item">
  //                           <a className="page-link" href="#">
  //                             3
  //                           </a>
  //                         </li>
  //                         <li className="page-item">
  //                           <a className="page-link" href="#">
  //                             4
  //                           </a>
  //                         </li>
  //                         <li className="page-item">
  //                           <a className="page-link" href="#">
  //                             5
  //                           </a>
  //                         </li>
  //                         <li className="page-item">
  //                           <a className="page-link" href="#">
  //                             6
  //                           </a>
  //                         </li>
  //                         <li className="page-item">
  //                           <a className="page-link" href="#">
  //                             Next
  //                           </a>
  //                         </li>
  //                       </ul>
  //                     </nav>
  //                   </div>
  //                   <div className="col-lg-6">
  //                     {/* Pagination with icons */}
  //                     <nav aria-label="Page navigation example">
  //                       <ul className="pagination pagination-lg">
  //                         <li className="page-item">
  //                           <a className="page-link" href="#">
  //                             <i className="fas fa-angle-left" />
  //                           </a>
  //                         </li>
  //                         <li className="page-item">
  //                           <a className="page-link" href="#">
  //                             1
  //                           </a>
  //                         </li>
  //                         <li className="page-item active">
  //                           <a className="page-link" href="#">
  //                             2
  //                           </a>
  //                         </li>
  //                         <li className="page-item">
  //                           <a className="page-link" href="#">
  //                             3
  //                           </a>
  //                         </li>
  //                         <li className="page-item">
  //                           <a className="page-link" href="#">
  //                             <i className="fas fa-angle-right" />
  //                           </a>
  //                         </li>
  //                       </ul>
  //                     </nav>
  //                   </div>
  //                 </div>
  //                 <h3 className="heading h6 text-uppercase text-primary mt-5 mb-4">
  //                   Alerts
  //                 </h3>
  //                 <div
  //                   className="alert alert-primary alert-dismissible fade show"
  //                   role="alert"
  //                 >
  //                   <strong>Holy guacamole!</strong> You should check in on some of
  //                   those fields below.
  //                   <button type="button" className="undo" aria-label="Undo">
  //                     Undo
  //                   </button>
  //                   <button
  //                     type="button"
  //                     className="close"
  //                     data-dismiss="alert"
  //                     aria-label="Close"
  //                   >
  //                     <span aria-hidden="true">×</span>
  //                   </button>
  //                 </div>
  //                 <div
  //                   className="alert alert-danger alert-dismissible fade show"
  //                   role="alert"
  //                 >
  //                   <strong>Holy guacamole!</strong> You should check in on some of
  //                   those fields below.
  //                   <button type="button" className="undo" aria-label="Undo">
  //                     Undo
  //                   </button>
  //                   <button
  //                     type="button"
  //                     className="close"
  //                     data-dismiss="alert"
  //                     aria-label="Close"
  //                   >
  //                     <span aria-hidden="true">×</span>
  //                   </button>
  //                 </div>
  //                 <div
  //                   className="alert alert-warning alert-dismissible fade show"
  //                   role="alert"
  //                 >
  //                   <strong>Holy guacamole!</strong> You should check in on some of
  //                   those fields below.
  //                   <button type="button" className="undo" aria-label="Undo">
  //                     Undo
  //                   </button>
  //                   <button
  //                     type="button"
  //                     className="close"
  //                     data-dismiss="alert"
  //                     aria-label="Close"
  //                   >
  //                     <span aria-hidden="true">×</span>
  //                   </button>
  //                 </div>
  //                 <div
  //                   className="alert alert-info alert-dismissible fade show"
  //                   role="alert"
  //                 >
  //                   <strong>Holy guacamole!</strong> You should check in on some of
  //                   those fields below.
  //                   <button type="button" className="undo" aria-label="Undo">
  //                     Undo
  //                   </button>
  //                   <button
  //                     type="button"
  //                     className="close"
  //                     data-dismiss="alert"
  //                     aria-label="Close"
  //                   >
  //                     <span aria-hidden="true">×</span>
  //                   </button>
  //                 </div>
  //                 <div
  //                   className="alert alert-success alert-dismissible fade show"
  //                   role="alert"
  //                 >
  //                   <strong>Holy guacamole!</strong> You should check in on some of
  //                   those fields below.
  //                   <button type="button" className="undo" aria-label="Undo">
  //                     Undo
  //                   </button>
  //                   <button
  //                     type="button"
  //                     className="close"
  //                     data-dismiss="alert"
  //                     aria-label="Close"
  //                   >
  //                     <span aria-hidden="true">×</span>
  //                   </button>
  //                 </div>
  //                 <div
  //                   className="alert alert-dark alert-dismissible fade show"
  //                   role="alert"
  //                 >
  //                   <strong>Holy guacamole!</strong> You should check in on some of
  //                   those fields below.
  //                   <button type="button" className="undo" aria-label="Undo">
  //                     Undo
  //                   </button>
  //                   <button
  //                     type="button"
  //                     className="close"
  //                     data-dismiss="alert"
  //                     aria-label="Close"
  //                   >
  //                     <span aria-hidden="true">×</span>
  //                   </button>
  //                 </div>
  //               </div>
  //               {/* Typography */}
  //               <div className="row align-items-center mb-4 mt-lg">
  //                 <div className="col-8">
  //                   <h2 className="heading h3 mb-0">Typography</h2>
  //                 </div>
  //                 <div className="col-4 text-right">
  //                   <a
  //                     href="docs/typography.html"
  //                     className="btn btn-sm btn-primary"
  //                   >
  //                     Open in Docs
  //                   </a>
  //                 </div>
  //               </div>
  //               <p className="mb-5">
  //                 Useful modifier classes and options were added to make typography
  //                 look beautiful. We chose the <strong>Nunito</strong> typeface for
  //                 this UI Kit. Easy to read, it looks great in every scenario with a
  //                 little bit of roundness to make it even more gorgeous.
  //               </p>
  //               <div className="row-wrapper">
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3">
  //                     <h3 className="heading h6 text-uppercase text-primary">
  //                       Headings
  //                     </h3>
  //                   </div>
  //                   <div className="col-lg-9">
  //                     <h1 className="heading heading-1 mb-4">
  //                       h1. Boomerang heading
  //                     </h1>
  //                     <h2 className="heading heading-2 mb-4">
  //                       h2. Boomerang heading
  //                     </h2>
  //                     <h3 className="heading heading-3 mb-4">
  //                       h3. Boomerang heading
  //                     </h3>
  //                     <h4 className="heading heading-4 mb-4">
  //                       h4. Boomerang heading
  //                     </h4>
  //                     <h5 className="heading heading-5 mb-4">
  //                       h5. Boomerang heading
  //                     </h5>
  //                     <h6 className="heading heading-6">h6. Boomerang heading</h6>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3">
  //                     <h3 className="heading h6 text-uppercase text-primary">
  //                       Paragraph
  //                     </h3>
  //                   </div>
  //                   <div className="col-lg-9">
  //                     <p>
  //                       Cum sociis natoque penatibus et magnis dis parturient
  //                       montes, nascetur ridiculus mus. Donec ullamcorper nulla non
  //                       metus auctor fringilla. Duis mollis, est non commodo luctus,
  //                       nisi erat porttitor ligula, eget lacinia odio sem nec elit.
  //                     </p>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3">
  //                     <h3 className="heading h6 text-uppercase text-primary">
  //                       Lead text
  //                     </h3>
  //                   </div>
  //                   <div className="col-lg-9">
  //                     <p className="lead">
  //                       Cum sociis natoque penatibus et magnis dis parturient
  //                       montes, nascetur ridiculus mus. Donec ullamcorper nulla non
  //                       metus auctor fringilla. Duis mollis, est non commodo luctus,
  //                       nisi erat porttitor ligula, eget lacinia odio sem nec elit.
  //                     </p>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col-lg-3">
  //                     <h3 className="heading h6 text-uppercase text-primary">
  //                       Quote
  //                     </h3>
  //                   </div>
  //                   <div className="col-lg-9">
  //                     <blockquote className="blockquote">
  //                       <p className="mb-0">
  //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //                         Integer posuere erat a ante.
  //                       </p>
  //                       <footer className="blockquote-footer">
  //                         Someone famous in{" "}
  //                         <cite title="Source Title">Source Title</cite>
  //                       </footer>
  //                     </blockquote>
  //                   </div>
  //                 </div>
  //               </div>
  //               {/* Icons */}
  //               <div className="row align-items-center mb-4 mt-lg">
  //                 <div className="col-8">
  //                   <h2 className="heading h3 mb-0">Icons</h2>
  //                 </div>
  //                 <div className="col-4 text-right">
  //                   <a
  //                     href="https://fontawesome.com/icons"
  //                     target="_blank"
  //                     className="btn btn-sm btn-primary"
  //                   >
  //                     See all icons
  //                   </a>
  //                 </div>
  //               </div>
  //               <p className="mb-5">
  //                 For this UI kit we are using the latest library of Font Awesome 5
  //                 which comes with plenty of icons and styles: solid, regular and
  //                 light. There is a FREE version and a PRO one. Each user who wants
  //                 to benefit of all its features should get a license.
  //               </p>
  //               <div className="row-wrapper">
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col lg-1">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-address-book"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col lg-1">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-adjust" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col lg-1">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-archive" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col lg-1">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-balance-scale"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col lg-1">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-bed" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col lg-1">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-bell" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col lg-1">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-bicycle" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col lg-1 d-sm-none">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-bicycle" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col lg-1 d-sm-none d-md-none">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-bicycle" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col lg-1 d-sm-none d-md-none">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-bicycle" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col lg-1 d-sm-none d-md-none">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-bicycle" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col lg-1 d-sm-none d-md-none">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-bicycle" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-angle-double-up"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-angle-double-down"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-angle-double-right"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-angle-double-left"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-angle-up" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-angle-right"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-angle-down"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-bullhorn" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-bullseye" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-calendar" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-camera-retro"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-chart-bar"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-check-circle"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-clock" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-cloud-download-alt"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fab fa-cloudscale"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fab fa-cloudsmith"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-code" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-cogs" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-comment-alt"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-compass" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className="row cols-xs-space cols-sm-space cols-md-space">
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-credit-card"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-envelope-open"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-frown" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-hand-peace"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i
  //                           className="fas fa-handshake"
  //                           style={{ fontSize: 24 }}
  //                         />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-heart" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="col">
  //                     <div className="text-center">
  //                       <div className="px-2 py-3">
  //                         <i className="fas fa-jenkins" style={{ fontSize: 24 }} />
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="text-center mt-5">
  //                 <a
  //                   href="https://fontawesome.com/icons"
  //                   target="_blank"
  //                   className="btn btn-primary"
  //                 >
  //                   See all icons
  //                 </a>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //       <section
  //         className="slice slice-lg bg-tertiary bg-cover bg-size--contain"
  //         style={{
  //           backgroundImage: 'url("assets/images/backgrounds/img-1.png")',
  //           backgroundPosition: "center 10%"
  //         }}
  //       >
  //         <span className="mask bg-primary alpha-7" />
  //         <div className="container text-center">
  //           <div className="row cols-xs-space cols-sm-space cols-md-space">
  //             <div className="col-12">
  //               <h2 className="heading text-white h1 strong-600">
  //                 Complete features at your hand
  //               </h2>
  //               <div className="row justify-content-center mt-4">
  //                 <div className="col-lg-8">
  //                   <p className="lead text-white">
  //                     Boomerang is a great free UI package based on Bootstrap 4 that
  //                     includes the most important components and features so you can
  //                     jumpstart the hard work and get right to the website creation
  //                     fast and easy.
  //                   </p>
  //                   <div className="btn-container mt-5">
  //                     <a
  //                       href="https://github.com/webpixels/boomerang-ui-kit/archive/master.zip"
  //                       className="btn btn-lg bg-white px-4"
  //                     >
  //                       Download Free
  //                     </a>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //       <section className="slice-lg">
  //         <div className="container">
  //           <h2 className="heading h3 strong-600 text-center mb-5">
  //             What you get in the FREE version
  //           </h2>
  //           <div className="row-wrapper">
  //             <div className="row cols-xs-space cols-sm-space cols-md-space">
  //               <div className="col-md-6">
  //                 <div className="card bg-primary">
  //                   <div className="card-body py-5">
  //                     <div className="d-flex align-items-start">
  //                       <div className="icon icon-lg">
  //                         <i className="fab fa-twitter text-white" />
  //                       </div>
  //                       <div className="icon-text">
  //                         <h3 className="heading text-white h4">
  //                           Latest Bootstrap framework <small>(v4.0.0)</small>
  //                         </h3>
  //                         <p className="text-white mb-0">
  //                           Build responsive, mobile-first projects on the web with
  //                           the world's most popular front-end component library.
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="col-md-6">
  //                 <div className="card">
  //                   <div className="card-body py-5">
  //                     <div className="d-flex align-items-start">
  //                       <div className="icon icon-lg">
  //                         <i className="fab fa-sass" />
  //                       </div>
  //                       <div className="icon-text">
  //                         <h3 className="heading h4">
  //                           Built with Sass <small>(included)</small>
  //                         </h3>
  //                         <p className="mb-0">
  //                           Change one variable and the theme adapts. And there are
  //                           tones: colors, fonts, sizes are just a few things you
  //                           can change with Sass.
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="row cols-xs-space cols-sm-space cols-md-space">
  //               <div className="col-md-6">
  //                 <div className="card bg-primary">
  //                   <div className="card-body py-5">
  //                     <div className="d-flex align-items-start">
  //                       <div className="icon icon-lg">
  //                         <i className="fas fa-th-large text-white" />
  //                       </div>
  //                       <div className="icon-text">
  //                         <h3 className="heading text-white h4">
  //                           50 customized components
  //                         </h3>
  //                         <p className="text-white mb-0">
  //                           We took the most used Bootstrap components and add them
  //                           a little Boomerang touch with modular elements that
  //                           makes them reusable and easy to work with.
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="col-md-6">
  //                 <div className="card">
  //                   <div className="card-body py-5">
  //                     <div className="d-flex align-items-start">
  //                       <div className="icon icon-lg">
  //                         <i className="fas fa-tint" />
  //                       </div>
  //                       <div className="icon-text">
  //                         <h3 className="heading h4">Extended color palette</h3>
  //                         <p className="mb-0">
  //                           Boomerang has extended the color palette that Bootstrap
  //                           offers by default. Instead of two primary colors, you
  //                           get now three. These can be easily customized using the
  //                           included Sass files.
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="row cols-xs-space cols-sm-space cols-md-space">
  //               <div className="col-md-6">
  //                 <div className="card bg-primary">
  //                   <div className="card-body py-5">
  //                     <div className="d-flex align-items-start">
  //                       <div className="icon icon-lg">
  //                         <i className="fas fa-code text-white" />
  //                       </div>
  //                       <div className="icon-text">
  //                         <h3 className="heading text-white h4">
  //                           Five integrated plugins
  //                         </h3>
  //                         <p className="text-white mb-0">
  //                           Get even more functionality with the ready to use
  //                           plugins we have integrated in this theme for you.
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="col-md-6">
  //                 <div className="card">
  //                   <div className="card-body py-5">
  //                     <div className="d-flex align-items-start">
  //                       <div className="icon icon-lg">
  //                         <i className="fas fa-font" />
  //                       </div>
  //                       <div className="icon-text">
  //                         <h3 className="heading h4">Font Awesome 5</h3>
  //                         <p className="mb-0">
  //                           1000 Free icons + 1500 Pro icons make FontAwesome one of
  //                           the most popular vector icons on the web.
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="row cols-xs-space cols-sm-space cols-md-space">
  //               <div className="col-md-6">
  //                 <div className="card bg-primary">
  //                   <div className="card-body py-5">
  //                     <div className="d-flex align-items-start">
  //                       <div className="icon icon-lg">
  //                         <i className="fas fa-file-alt text-white" />
  //                       </div>
  //                       <div className="icon-text">
  //                         <h3 className="heading text-white h4">
  //                           Five example pages
  //                         </h3>
  //                         <p className="text-white mb-0">
  //                           We took a step further and created a set of 5 pages that
  //                           makes it the ideal point to start building websites of
  //                           any kind.
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="col-md-6">
  //                 <div className="card">
  //                   <div className="card-body py-5">
  //                     <div className="d-flex align-items-start">
  //                       <div className="icon icon-lg">
  //                         <i className="fas fa-question-circle" />
  //                       </div>
  //                       <div className="icon-text">
  //                         <h3 className="heading h4">Free support on Github</h3>
  //                         <p className="mb-0">
  //                           You get a professional theme and a promise that we will
  //                           respond to each issue you are having with our theme on
  //                           Github.
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //       <section className="slice pt-0 sct-color-1">
  //         <div className="container">
  //           <div className="row justify-content-center align-items-center">
  //             <div className="col-lg-8 text-center">
  //               <h3 className="heading h3 font-weight-400">
  //                 I am ready to start a new project with{" "}
  //                 <span className="font-weight-700">Boomerang</span> UI Kit.
  //               </h3>
  //               <div className="mt-5">
  //                 <a
  //                   href="https://github.com/webpixels/boomerang-ui-kit/archive/master.zip"
  //                   className="btn btn-lg btn-primary px-4"
  //                 >
  //                   Download free
  //                 </a>
  //                 <a
  //                   href="https://github.com/webpixels/boomerang-ui-kit/issues"
  //                   target="_blank"
  //                   className="btn btn-link"
  //                 >
  //                   Have an issue?
  //                 </a>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     </main>
  //     <footer className="pt-5 pb-3 footer  footer-dark bg-tertiary">
  //       <div className="container">
  //         <div className="row">
  //           <div className="col-12 col-md-4">
  //             <div className="pr-lg-5">
  //               <h1 className="heading h6 text-uppercase font-weight-700 mb-3">
  //                 <strong>Boomerang</strong> UI Kit
  //               </h1>
  //               <p>
  //                 Boomerang is a high quality UI Kit built on top of the well known
  //                 Bootstrap 4 Framework. This theme was designed as its own extended
  //                 version of Bootstrap with multiple functionalities and controls
  //                 added, extended color palette and beautiful typography.
  //               </p>
  //             </div>
  //           </div>
  //           <div className="col-6 col-md">
  //             <h5 className="heading h6 text-uppercase font-weight-700 mb-3">
  //               Features
  //             </h5>
  //             <ul className="list-unstyled text-small">
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Cool stuff
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Random feature
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Team feature
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Stuff for developers
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Another one
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Last time
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //           <div className="col-6 col-md">
  //             <h5 className="heading h6 text-uppercase font-weight-700 mb-3">
  //               Solutions
  //             </h5>
  //             <ul className="list-unstyled text-small">
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Resource
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Resource name
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Another resource
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Final resource
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //           <div className="col-6 col-md">
  //             <h5 className="heading h6 text-uppercase font-weight-700 mb-3">
  //               Resources
  //             </h5>
  //             <ul className="list-unstyled text-small">
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Business
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Education
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Government
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Gaming
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //           <div className="col-6 col-md">
  //             <h5 className="heading h6 text-uppercase font-weight-700 mb-3">
  //               About
  //             </h5>
  //             <ul className="list-unstyled text-small">
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Team
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Locations
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Privacy
  //                 </a>
  //               </li>
  //               <li>
  //                 <a className="text-muted" href="#">
  //                   Terms
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //         <hr />
  //         <div className="d-flex align-items-center">
  //           <span className="">
  //             © 2018{" "}
  //             <a
  //               href="https://webpixels.io/"
  //               className="footer-link"
  //               target="_blank"
  //             >
  //               Webpixels
  //             </a>
  //             . All rights reserved.
  //           </span>
  //           <ul className="nav ml-lg-auto">
  //             <li className="nav-item">
  //               <a
  //                 className="nav-link active"
  //                 href="https://instagram.com/webpixelsofficial"
  //                 target="_blank"
  //               >
  //                 <i className="fab fa-instagram" />
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a
  //                 className="nav-link"
  //                 href="https://facebook.com/webpixels"
  //                 target="_blank"
  //               >
  //                 <i className="fab fa-facebook" />
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a
  //                 className="nav-link"
  //                 href="https://github.com/webpixels"
  //                 target="_blank"
  //               >
  //                 <i className="fab fa-github" />
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a
  //                 className="nav-link"
  //                 href="https://dribbble.com/webpixels"
  //                 target="_blank"
  //               >
  //                 <i className="fab fa-dribbble" />
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </footer>
  //     {/* Core */}
  //     {/* FontAwesome 5 */}
  //     {/* Page plugins */}
  //     {/* Theme JS */}
  //   </React.StrictMode>
  // )
}

export default App;
