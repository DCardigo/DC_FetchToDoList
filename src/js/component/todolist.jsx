
import React, {useState, useEffect} from "react";


const Todo = () => {

        
    // ESTADOS

    const [tarea,setTarea] = useState("");
    const [lista,setLista] = useState([]);
    const [usuario,setUsuario] = useState("Dcardigo");



        // FETCH

        // COMPROBAR LISTA

        function estadoLista() {
                fetch(`https://assets.breatheco.de/apis/fake/todos/user/${usuario}`,{
                method:'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data))
            .catch((error)=>console.log(error))

         };

        // NUEVO USUARIO
       
        function crearUsuario() {
                fetch(`https://assets.breatheco.de/apis/fake/todos/user/${usuario}`,{
                method:'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify([])

            })
            .then((response)=>{
                console.log(response.ok);

                if (response.ok === false){
                    setUsuario("Este usuario ya existe")
                }
               return response.json()
               
            })
            .then((data)=>console.log(data))
            .catch((error)=>console.log(error))

        };

        // ELIMINAR TAREAS

        const eliminarTareas = () => {
            // ;
            fetch(`https://assets.breatheco.de/apis/fake/todos/user/${usuario}`,{
                method:'DELETE',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify()
            })

            .then((response)=>{
                if (response.ok === true){
                    crearUsuario()
                    setLista([])
                }
                
                return response.json()
        })
            .then((data)=>console.log(data))
            .catch((error)=>console.log(error))
        };

        //  // ACTUALIZAR LISTA

        function  actualizarLista() {

                    fetch(`https://assets.breatheco.de/apis/fake/todos/user/${usuario}`,{
                    method:'PUT',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(lista)
                })

                .then((response)=>response.json())
                .then((data)=>console.log(data))
                .catch((error)=>console.log(error))
        };

        // FETCH


        // FUNCIÓN KEYDOWN

        const handleKey= (e) => {
            if (e.key === 'Enter' && tarea != " " && tarea != "") {
                
                setLista([...lista, {label: tarea, done: false}]);
                setTarea("")
            }
        };


        //   ELIMINAR ELEMENTO

        const removeItem = (tarea,i) => {
            const updatedItems = lista.filter((item) => item != tarea);
            setLista(updatedItems);

            if (lista.length <= 1){eliminarTareas()}
        };

        // NUEVO ELEMENTO LISTA

        const newList = lista.map(function(tarea,i){


            return (<li className="list-group-item px-2" id={i} key = {i}>

                {tarea.label}

                <button  type="button" onClick={() => removeItem(tarea,i)} className="btn float-end px-3 pt-2" aria-label="Close">X</button>

                </li>)})

console.log(lista.length);        

        useEffect (() => {
                    actualizarLista()
                }, [lista])

            
    return (

        <div className="justify-content-center">

            <h1 className="text-center mt-3">todos</h1>

            {/* <div className="d-flex justify-content-center m-5">

                <input type="text" value = {usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Introducir usuario"/>   
                <button className="btn btn-primary mx-4" onClick={crearUsuario}>Nuevo Usuario</button>

            </div> */}

            <div className="d-flex justify-content-center">

                <ul className="list-group d-flex col-6 shadow-lg mb-3 bg-body rounded">

                    <input type="text" value = {tarea} onChange={(e) => setTarea(e.target.value)} onKeyDown={handleKey} placeholder={lista.length === 0 ? "No hay tareas, añadir tareas" : ""}/>

                    {newList}

                    <li id ="aviso"className="list-group-item" style ={{display: 'none'}}>{

                        lista.length === 0 ? "" :
                        lista.length === 1 ?  lista.length + " tarea pendiente." :
                        lista.length + " tareas pendientes."}


                    </li>

                    
                </ul>

            </div>

            <div className="d-flex justify-content-center">
                
                <button className="btn btn-success" onClick={eliminarTareas}>Borrar Tareas</button>
                {/* <button className="btn btn-warning mx-4" onClick={estadoLista}>Comprobar Lista</button> */}

            </div>

        </div>
    )
   
}



export default Todo

