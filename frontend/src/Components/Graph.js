import React from 'react'

export function ResultGraph({graph}) {
    if(graph) {
        const url = "data:image/png;base64," + graph;
        return (
            <img src={url}/>
        )
    } else {
        return null
    }
}
