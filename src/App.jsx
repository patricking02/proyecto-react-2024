import { useEffect, useState } from "react"
import axios from "axios"
import ListadoCripto from "./listadoCripto"
import "./ListadoCripto.css"
import "./App.css"

function App() {
  
  const API_URL=import.meta.env.VITE_API_URL
  const [criptos, setCriptos]=useState()

  useEffect(()=>{
    axios.get(`${API_URL}assets`)
      .then((data)=>{
        console.log("Respuesta de la API:", data);
        setCriptos(data.data.data)
      })
      .catch(()=>{
        console.error("La petición falló")
      })
  },[])

  if(!criptos) return <span>Cargando...</span>

  return (
    <>  
      <h1>Lista de Criptomonedas</h1>
        <div className="Contenedor-main">
          {criptos.map(({id, name, priceUsd})=>(
              <ListadoCripto id={id} name={name} priceUsd={priceUsd}/>
          ))}
        </div>
    </>
  )
}

export default App
