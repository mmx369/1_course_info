import React from 'react'

const Part = ({ parts }) => {
    return parts.map((el) => <li key={el.id}>{el.name} {el.exercises}</li>)
}

export default Part
