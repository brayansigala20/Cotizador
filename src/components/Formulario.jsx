import { Fragment, useState } from "react"
import { MARCAS,MODELOS,PLAN } from "../constanst"
import useCotizador from "../hooks/useCotizador"
import Error from "./Error"
import Spiner from "./Spiner"

const Formulario = () => {
    const {setDatos,handleChange, datos,err,setErr, cotizarDatos , Resultado, setCarga, carga} = useCotizador()


    const handleSubmit  =(e)=>{
        e.preventDefault()
         
        if(Object.values(datos).includes('')){
           return setErr('campios incompletos')
        }
        setErr('')

        cotizarDatos()
        
    }
       

  return (
    <>

    <form
    onSubmit={handleSubmit}
    >
        {err && <Error/>}
        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase">
                marca
            </label>
            <select 
            name="marca" 
            className="w-full p-3 bg-white border-gray-200"
            value={datos.marca}
            onChange={e => handleChange(e)}
            >
                <option value="">--Selecionar marca--</option>
                {MARCAS.map(marca => (
                    <option
                    key={marca.id}
                    value={marca.id}>
                        {marca.nombre}
                    </option>
                )
                )}
            </select>

        </div>

        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase">
                modelo
            </label>
            <select 
            name="modelo" 
            className="w-full p-3 bg-white border-gray-200"
            onChange={e => handleChange(e)}
            value={datos.modelo}
            >
                <option value="">--Selecionar modelo--</option>
                {MODELOS.map(modelo => (
                    <option
                    key={modelo}                    
                    value={modelo}>
                        {modelo}
                    </option>
                )
                )}
            </select>

        </div>

        <div className="my-5">
            <label className="block mb-3 font-bold text-gray-400 uppercase">
                plan
            </label>
            <div className="flex gap-3 items-center">
                {PLAN.map(planes=>(
                    <Fragment
                    key={planes.id}>
                        
                            <label>
                                {planes.nombre}
                            </label>
                            <input 
                            onChange={e => handleChange(e)}
                            type="radio" 
                            name='planes' 
                            value={planes.id}  />
                    </Fragment>
                ))}
            </div>

        </div>
        <input 
         name="plan"
         type="submit"
         className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors
          text-white cursor-pointer uppercase font-bold" 
          value='cotizar'/>
               {carga ? <Spiner/> : Resultado}
               
    </form>


    </>
  )
}

export default Formulario