import React, {useState} from "react";


const Todo = () => {

    // ESTADOS

    const [tarea,setTarea] = useState("");
    const [lista,setLista] = useState([]);

    



    // FUNCIÓN KEYDOWN

    const handleKey= (e) => {
        if (e.key === 'Enter' && tarea != "") {
            handleLista()
            setTarea("")
        }
      };


    //   FUNCION LISTA

    const handleLista = (e) => {
        setLista([...lista, tarea]);
     
      };

    //   ELIMINAR ELEMENTO

    const removeItem = (tarea,i) => {
        const updatedItems = lista.filter((item) => item != tarea);
        setLista(updatedItems);
 
      };



    // NUEVO ELEMENTO LISTA

    const newList = lista.map(function(tarea,i){

        
        return (<li className="list-group-item pt-3" id={i} key = {i}>
            
            {tarea}

            <button  type="button" onClick={() => removeItem(tarea,i)} className="btn float-end" aria-label="Close">x</button>
               
            </li>)})

    return (

        <div className="justify-content-center">

            <h1 className="text-center mt-5">ToDoList</h1>
            
            <div className="d-flex justify-content-center"> 
            
                <ul className="list-group d-flex col-4 mt-5 shadow-lg mb-5 bg-body rounded">

                    <input type="text" value = {tarea} onChange={(e) => setTarea(e.target.value)} onKeyDown={handleKey} placeholder={lista.length === 0 ? "No hay tareas, añadir tareas" : ""}/>   

                    {newList}

                    <li className="list-group-item">{lista.length === 0 ? "" : 
                                                     lista.length === 1 ?  "Queda " + lista.length + " tarea pendiente." : 
                                                    "Quedan " + lista.length + " tareas pendientes."} 
                    </li>
                </ul>

            </div>
        
        </div>
    )
}


export default Todo

