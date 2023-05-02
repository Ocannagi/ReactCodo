export default function Usuarios(props) {
  return (
    <div>
        {/*<h3 style={{backgroundColor : '#6ab150'}}>Nombre: {props.nombre}</h3>
        <p>Edad: {props.edad}</p>*/}

        <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
            <h3 className="card-title">{props.nombre}</h3>
            <h6 className="card-subtitle mb-2 text-muted">Encargado</h6>
            <p className="card-text">{props.edad}</p>
        </div>
        </div>
  
      </div>
  )
}