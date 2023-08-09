import React from 'react'

export function ResultTable({param}) {
    if (param) {
        return (
            <table className="table table-bordered text-white text-center">
                <thead>
                    <tr>
                        <th scope="col" rowSpan={2}>
                            #
                        </th>
                        {Object.keys(param).map((sym) => {
                            return (
                                <th scope='col' colSpan={Object.keys(param[sym]).length}>
                                    {sym}
                                </th>
                            )
                        })}
                    </tr>
                    <tr>
                        {Object.keys(param).map((sym) => {
                            return (
                                <React.StrictMode>
                                    {Object.keys(param[sym]).map((pol) => {
                                        return (
                                            <th scope='col'>
                                                {pol}
                                            </th>
                                        )
                                    })}
                                </React.StrictMode>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>d</th>
                        {Object.keys(param).map((sym) => {
                            return (
                                <React.StrictMode>
                                    {Object.keys(param[sym]).map((pol) => {
                                        if(Math.abs(param[sym][pol]['c']) > 1e9) {
                                            return (
                                                <td>{(param[sym][pol]['d'] * param[sym][pol]['c']).toFixed(2)}<sup>*</sup></td>
                                            )
                                        } else {
                                            return(
                                                <td>{(param[sym][pol]['d']).toFixed(2)}</td>
                                            )
                                        }
                                    })}
                                </React.StrictMode>
                            )
                        })}
                    </tr>
                    <tr>
                        <th scope='row'>c</th>
                        {Object.keys(param).map((sym) => {
                            return (
                                <React.StrictMode>
                                    {Object.keys(param[sym]).map((pol) => {
                                        if(Math.abs(param[sym][pol]['c']) > 1e9) {
                                            return (
                                                <td>&infin;</td>
                                            )
                                        } else {
                                            return(
                                                <td>{(param[sym][pol]['c']).toFixed(2)}</td>
                                            )
                                        }
                                    })}
                                </React.StrictMode>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        )
    } else {
        return null
    }

}
