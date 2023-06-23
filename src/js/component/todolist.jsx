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


    // const removeItem = (id) => {
    //     const updatedItems = lista.filter((tarea,id) => tarea.id !== id);
    //     setLista(updatedItems);
    //   };

    // NUEVO ELEMENTO LISTA

    const newList = lista.map(function(tarea,i){
        
        return <li className="list-group-item" key = {i}>
            
            {tarea}

            <button type="button" onClick={removeItem} className="btn-close float-end" aria-label="Close"></button>
            
            
            </li>})



    return (

        <div className="justify-content-center">

            <h1 className="text-center mt-5">ToDoList</h1>
            <ul className="list-group d-flex col-3 shadow-lg mb-5 bg-body rounded">
                
                <input type="text" value = {tarea} onChange={(e) => setTarea(e.target.value)} onKeyDown={handleKey}/>

                {newList}
               
            </ul>
        
        </div>
    )
}


export default Todo

