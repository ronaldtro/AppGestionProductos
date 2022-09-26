import { useState, useEffect, createContext } from "react";


const pruebaContext = createContext()

export const PruebaProvider = ({children}) => {

    const saludo = 'saludo'

    //Ejemplo obtener datos de la Api desde el context
    /*
    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias')
        setCategorias(data)  
    } 
    */

    return(
        <pruebaContext.Provider value={{saludo}}>
            {children}
        </pruebaContext.Provider>
    )
}

export default pruebaContext