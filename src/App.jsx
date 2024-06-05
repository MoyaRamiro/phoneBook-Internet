const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}


const Header = (props) => {

  console.log(props)
  return (
    <>
      <p>Pertenece al curso: {props.course.name}</p>
    </>
  )
}

const Content = (props) => {

  console.log(props)

  return (
    <>
      {props.course.parts.map(part => (
        <div key={part.name}> 
        <p>EJERCICIO:</p>
        <p>{part.name}</p>
  
        <p>Cantidad de ejercicios: {part.exercises}</p>
        </div>
      ))}

      
    </>
  )
}

const Total = (props) => {
  console.log(props)

  const total = props.course.parts.reduce((sum, part) => sum + part.exercises, 0);


  return (
    <>
      <p>CANTIDAD TOTAL DE EJERCICIOS: {total}</p>
    </>
  )

}

export default App