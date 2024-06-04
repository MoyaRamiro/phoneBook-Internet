const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total total={total} />
    </div>
  )
}

const Header = (props) => {

  return (
    <>
      <p>Pertenece al curso: {props.course}</p>
    </>
  )
}

const Content = (props) => {

  

  return (
    <>
      <p>EJERCICIOS:</p>
      <p>{props.part1}</p>

      <p>Cantidad de ejercicios: {props.exercises1}</p>

      {props.part2}

      <p>Cantidad de ejercicios: {props.exercises2}</p>

      {props.part3}

      <p>Cantidad de ejercicios: {props.exercises3}</p>

    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>CANTIDAD TOTAL DE EJERCICIOS: {props.total}</p>
    </>
  )
  
}

export default App