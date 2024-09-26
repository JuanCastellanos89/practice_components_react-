

export const MyFirstComponent = () => {
    const name  = "Ines maria Oliveros";
    const github_profile = "https://github.com/inesmariao";
    const student = {
        name: "juan",
        last_name: "castellanos",
        mobile: "80000000",
        linkedin_profile: "www.linkedin.com"
    };
    console.log(student);
    return (
    <>
    <div>MyFirstComponent</div>
    <div className="container mt-4">
        <h1>Temas de React</h1>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados Hooks</li>
            <li>Props</li>
        </ul>
    </div>
    <div className="container py-2">
        <h1>Datos del Docente</h1>
        <p>nombre: <strong>{ name }</strong></p>
        <p>Github: { github_profile }</p>
    </div>
    <div className="container py-2">
        <h1>Datos Del Estudiante</h1>
        <p>Nombre: <strong>{ student.name} </strong></p>
        <p>Apellido: { student.last_name } </p>
        <p>Celular: { student.mobile } </p>
        <p>Linkedin: <a href={ student.linkedin_profile }>{ student.linkedin_profile }</a> </p>
    </div>
    <div className="container mt-2 pt-2">
        <h1>Objeto Completo</h1>
        <pre>{JSON.stringify(student)} </pre>
    </div>
    </>
  )
}
