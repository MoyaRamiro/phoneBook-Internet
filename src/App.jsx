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
      <Part name={part1} exercisesTotal={exercises1}/>
      <Part name={part2} exercisesTotal={exercises2}/>
      <Part name={part3} exercisesTotal={exercises3}/>
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

const Part = (props) => {

  

  return (
    <>
      <p>EJERCICIO:</p>
      <p>{props.name}</p>

      <p>Cantidad de ejercicios: {props.exercisesTotal}</p>
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