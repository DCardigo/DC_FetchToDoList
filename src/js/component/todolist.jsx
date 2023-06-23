import React, {useState} from "react";


const Todo = () => {

    // ESTADOS

    const [tarea,setTarea] = useState("");
    // console.log(tarea)

    const [lista,setLista] = useState([]);

    // console.log(lista);

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
    
        // console.log(lista);

    const newList = lista.map(function(tarea,i){return <li className="list-group-item" key = {i}>{tarea}</li>})

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

