export const MARCAS =[
    {id: 1, nombre: 'Europeo'},
    {id: 2, nombre: 'Americano'},
    {id: 3, nombre: 'Asiatico'}
]

const YearMax = new Date().getFullYear();
export const MODELOS = Array.from( 
    new Array(20),
 (valor,index) => YearMax - index)


 export const PLAN =[
    {id:1, nombre: 'Basico'},
    {id:2, nombre: 'Completo'}
]