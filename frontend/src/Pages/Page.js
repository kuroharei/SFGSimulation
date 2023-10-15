import React from 'react'
import Simulation from './Simulation';
import Homepage from './Homepage'


export default function Page({page}) {
    if (page === "Homepage") {
        return (
          <React.StrictMode>
              <Homepage />
          </React.StrictMode>
        )
    } else if (page === "Simulation") {
        return (
            <React.StrictMode>
                <Simulation></Simulation>
            </React.StrictMode>
        )
    }
}
