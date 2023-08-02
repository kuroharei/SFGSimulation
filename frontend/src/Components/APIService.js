import React from 'react'

export class APIService {
    static Calculate(body) {
        return  fetch('http://127.0.0.1:5000/calculation', {
                    'method': 'POST',
                    headers: {
                        'Content-Type': 'applications/json'
                    },
                    body: JSON.stringify(body)
                })
                .then(resp => resp.json())
    }
}

export default APIService
