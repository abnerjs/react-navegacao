import React from 'react'
import { useParams } from 'react-router-dom'

const Param = props => {
    const { id } = useParams()
    
    return (
        <div className='param'>
            <h1>comp param</h1>
            <h3>value: {id}</h3>
        </div>
    )
}

export default Param