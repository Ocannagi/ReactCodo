export default function Acceder(props) {
        const tieneAcceso = props.tieneAcceso;
        if(tieneAcceso){
            return <AccesoAutorizado nombre= {props.nombre}></AccesoAutorizado>;
        }

        return <AccesoNoAutorizado nombre= {props.nombre}></AccesoNoAutorizado>;
}

function   AccesoAutorizado(props){
    return <h1>Bienvenido, {props.nombre}</h1>
}

function   AccesoNoAutorizado(props){
    return <h1>No estás autorizado, {props.nombre}</h1>
}

