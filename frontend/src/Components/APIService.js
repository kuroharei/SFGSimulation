export class APIService {
    static Calculate(data) {
        return fetch('http://127.0.0.1:5000/calculation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        })
            .then(resp => resp.json())
    }
}

export default APIService
