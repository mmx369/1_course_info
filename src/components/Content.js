import React from 'react'
import Part from './Part'

const Content = ({ part1, part2, part3, exercises1, exercises2, exercises3 }) => {
    return (
        <div>
            <Part part={part1} exersise={exercises1} />
            <Part part={part2} exersise={exercises2} />
            <Part part={part3} exersise={exercises3} />
        </div>)
}

export default Content