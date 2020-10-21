import React from 'react'

const Part = ({ parts }) => {
    return parts.map((el) => <li key={el.name}>{el.name} {el.exercises}</li>)
}

export default Part
