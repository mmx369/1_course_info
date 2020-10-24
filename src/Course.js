import React from 'react'
import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"

const Course = ({ course }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header course={course[0].name} />
      <Content parts={course[0].parts} />
      <Total parts={course[0].parts} />
      <Header course={course[1].name} />
      <Content parts={course[1].parts} />
      <Total parts={course[1].parts} />
    </div>
  )
}

export default Course
