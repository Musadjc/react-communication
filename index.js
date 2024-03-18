const app = document.querySelector('#app')
const root = ReactDOM.createRoot(app)


   const students = [
    {
      name: 'Antonio López',
      grade: 3.0
    },
    {
      name: 'Juan Pérez',
      grade: 6.1
    },
    {
      name: 'Laura García',
      grade: 7.2
    },
    {
      name: 'Pedro Martín',
      grade: 2.0
    },
    {
      name: 'Marta Medina',
      grade: 6.5
    }
  ] 

  const element =
    <>
        <ul>
            {students.map((element, idx) => {
                if(element.grade > 5) return <li key={idx}> {element.name + ' ' + element.grade} </li>
            })}
        </ul>
    </>
root.render(element)


  