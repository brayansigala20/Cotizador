
//funciones 

export const diferenciaModelo =(modelo)=>{
     return new Date().getFullYear() - modelo 
}

export const porcentajeMarca =(marca)=>{
    let incremento ;

      switch (marca) {
        case "1" :
            incremento = 1.3;
            break;
        case "2":
            incremento = 1.15;
            break;
        case "3":
            incremento = 1.05;
            break;    
      
        default:
            break;
      }
     return incremento
}

export const formatearDinero = (resultado)=>{
    return resultado.toLocaleString('en-US',{
        style: 'currency',
        currency: 'USD'
        
    });
}