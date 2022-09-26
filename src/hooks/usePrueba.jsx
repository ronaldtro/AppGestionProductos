import {useContext} from 'react'
import pruebaContext from '../context/pruebaProvider'

const usePrueba = () => {
    return useContext(pruebaContext)
}

export default usePrueba