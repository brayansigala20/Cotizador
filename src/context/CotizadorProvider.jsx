import { createContext, useState } from "react";
import { diferenciaModelo, porcentajeMarca, formatearDinero } from "../helpers";

const CotizadorContext = createContext()

const CotizadorProvider = ({children})=>{

    const [datos, setDatos] = useState({
        marca: '',
        modelo: '',
        planes: ''
    })
    const [err , setErr] = useState('')
    const [Resultado, setResultado]= useState('')
    const [carga , setCarga]= useState(false) 

    const handleChange =(e)=>{
        
       setDatos({ ...datos,
         [e.target.name]:  e.target.value,
         [e.target.name]: e.target.value,
         [e.target.name]: e.target.value
         })


    }


    const cotizarDatos = ()=>{
       // base 
        let resultado = 2000

       // diferencia de modelos 
        const diferencia  = diferenciaModelo(datos.modelo)
       // restar 3% cada modelo 
        resultado -= ((diferencia * 3) * resultado ) / 100
      

       // europeo 30%       
       // americano 15%
       // asiatico 5%
         resultado *= porcentajeMarca(datos.marca)
        
       // basico 20%
       // completo 50%
        if(datos.planes === '1' ){
           resultado *= 1.20
        }else resultado *= 1.50
    
       resultado = formatearDinero(resultado)


       
    }
    return(
        <CotizadorContext.Provider
            value={{
             handleChange,
             setDatos,
             datos,
             err,
             setErr,
             cotizarDatos,
             Resultado,
             

            }}
        >
             {children}
        </CotizadorContext.Provider>
    )

}

 export{
    CotizadorProvider
 }
 export default CotizadorContext