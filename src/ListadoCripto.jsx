import "./ListadoCripto.css"

const ListadoCripto =({id, name, priceUsd})=>{
    
    
    return(
        <div className="Contenedor-Lista">
            <div key={id} className="Cabecera">Nombre: {name}</div>
            <div className="Descripcion">Precio:{parseFloat(priceUsd).toFixed(3)}</div> 
        </div>
    )
}

export default ListadoCripto