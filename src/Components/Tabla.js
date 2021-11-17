import React from 'react'
import Formulario from './Formulario';

import {db} from '.Firebase'
const Tabla = () => {

    const addtaks = () =>{
        console.log('newtask')
    }

    return (
        <div>
            <Formulario addoredit={addtaks}/>
        </div>
    )
}

export default Tabla;