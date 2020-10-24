import React from 'react'

const Total = ({ parts }) => {
    const total = parts.reduce((sum, el) => { return sum + el.exercises }, 0)
    return <p><strong>Number of exercises {total}</strong></p>
}

export default Total
