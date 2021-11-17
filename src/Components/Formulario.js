import React,{useState} from 'react'
import './Estilos_formulario/estilos_form.css'
export const Formulario = (props) => {

    const initialStateDatos ={
        Nombre:'',
        Apellido:'',
        fecha_nacimiento:'',
        correo:'',
        desple:'',
        documento:'',
        nombre_formacion:'',
        trimestre:'',
        fecha_ingreso:'',
        hora_ingreso:'',

    }

    const [datos,setDatos] = useState(initialStateDatos);
    
    const handleInputChange = event =>{
        const {name,value}= event.target;
        setDatos({...datos,[name]:value})
        
    };
       
    const enviarDatos = event =>{
        event.preventDefault();
        console.log(datos)
        props.addoredit(datos);
        setDatos({...initialStateDatos})
   }
    
    return (
       <div className="todo">
            <form className="row" onSubmit={enviarDatos}>
                <div className="titulo"> <h1 className="titulo"> Formulario de Alumnos facheros</h1>
                </div>

                    <div className="cajas">
                        <label>
                         Nombre
                            <input
                                placeholder ="enter your name"
                                type="text"
                                name="Nombre"
                                onChange={handleInputChange}
                                value={datos.Nombre}
                            >  
                            </input>
                        </label>
                    </div>

                    <div className="cajas">
                        <label>
                         Apellido. 
                            <input
                                placeholder ="enter your lastname"
                                type="text"
                                name="Apellido"
                                onChange={handleInputChange}
                                value={datos.Apellido}
                             >         
                            </input>
                        </label>
                    </div>

                    <div className="cajas">
                        <label>
                         Fecha de Nacimiento
                            <input
                                placeholder ="Ingrese la fecha de nacimiento"
                                type="date"
                                name="fecha_nacimiento"
                                onChange={handleInputChange}
                                value={datos.fecha_nacimiento}
                            >                                 
                            </input>
                        </label>
                    </div>

                    <div className="cajas">
                        <label>
                         Correo electronico
                            <input 
                                placeholder ="enter your email"
                                type="email"
                                name="correo"
                                onChange={ handleInputChange}
                                value={datos.correo}
                            > 
                            </input>
                        </label>
                    </div>

                    <div className="cajas">
                        <label>
                         Tipo de documento
                            <select className="desplegable"
                             name="desple"
                             >
                                <option value="cc">Cedula </option>
                                <option value="ti">Tarjeta identidad</option>
                                <option value="cc_e">Cedula extranjeria</option>
                                <option value="pst">Pasaporte</option>
                                <option value ="rg">Registro civil </option>
                            </select>
                        </label>
                        <label>
                         Numero de Documento
                            <input
                                id="input_desplegable"
                                placeholder ="enter your document type"
                                type="number"
                                name="documento"
                                onChange={handleInputChange }
                                value={datos.documento}

                            >
                            </input>
                        </label>       
                    </div>

                    <div className="cajas">
                        <label>
                         Nombre de la formacion
                            <input
                                placeholder ="enter the name of course"
                                type="text"
                                name="nombre_formacion"
                                onChange={handleInputChange }
                                value={datos.nombre_formacion}
                            >
                            </input>
                        </label>
                    </div>

                    <div className="cajas">
                        <label>
                         Trimestre actual
                            <input
                                placeholder ="enter the quarter you are in"
                                type="number"
                                name="trimestre"
                                onChange={handleInputChange }
                                value={datos.trimestre}
                            >
                            </input>
                        </label>
                    </div>

                    
                    <div className="cajas">
                        <label>
                         Fecha de ingreso
                            <input
                                placeholder ="Enter the date of entry"
                                type="date"
                                name="fecha_ingreso"
                                onChange={handleInputChange }
                                value={datos.fecha_ingreso}
                            >
                            </input>
                        </label>
                    </div>

                    
                    <div className="cajas">
                        <label>
                         Hora de ingreso
                            <input
                                placeholder ="Enter the time of entry"
                                type="time"
                                name="hora_ingreso"
                                onChange={handleInputChange }
                                value={datos.hora_ingreso}
                            >
                            </input>
                        </label>
                    </div>

                    
                    <div className="Aliner_boton1">
                        <button className=" botonhp" type ="submit"><h4>Enviar</h4></button>
                    </div>
            </form>
        </div>

            
        
    )
}

export default Formulario;