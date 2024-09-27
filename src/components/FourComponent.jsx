

export const FourComponent = () => {

  const handleClicked = (e, name) =>{
    alert("has hecho click en el boton..." + name)
  }
  const handleDoubleClicked = () => {
    alert("Has hecho doble click")
  }
  const handleMouseEnter = (e) =>{
    alert("Haz entrado a la caja !!!")
  }
  const handleMouseLeave = (e) =>{
    alert("Haz salido de la caja")
  }

  const handleMouse = (e) =>{
    alert(`has ${action} la caja`)
  }
  const handleInsideInput = (e) =>{
    console.log("Estas dentro del input, escribe tu nombre!!")
  }
  const handleOutSideInput = (e) =>{
    console.log("Estas fuera del input. Adios...")
  }

  return (
    <div>
      <h1>FourComponent</h1>
      {/* Evento Click */}
      <button id="UNO" className="btn btn-danger"
      onClick={ () =>{
        alert("Hola, soy un evento click!!!");
      }}
      >Haz clic!!!</button>
      <div>
      <button className="btn btn-success"
        onClick={e => handleClicked(e, "Juan")}>
        !!Aqui tambien haz click!!
      </button>
      </div>
      <div>
        <button className="btn btn-info"
          onDoubleClick={ handleDoubleClicked }>
          Haz doble click
        </button>
      </div>
      <div id="box1" onMouseEnter={ e => handleMouseEnter(e, "entrando a")}
        onMouseLeave={e => handleMouseLeave(e, "a salido de...")}>
        <p>Pasa el mouse por encima !!!</p>
      </div>
      <div id="box2" className="mt-4"
        onMouseEnter={e => handleMouse(e, "entrado a")}
        onMouseLeave={e => handleMouse(e, "salido de")}
        >
      </div>
      <div className="mt-4">
        <input type="text"
        onFocus={e => handleInsideInput(e)}
        onBlur={e => handleOutSideInput(e)}
        />
      </div>
    </div>
  )
}
