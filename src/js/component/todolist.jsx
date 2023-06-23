import React, {useState} from "react";


const Todo = () => {

    // ESTADOS

    const [tarea,setTarea] = useState("");
    const [lista,setLista] = useState([]);
    const [cerar,setCerrar] = useState(false);



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




    const removeItem = (e) => {
        // const updatedItems = lista.filter(tarea => tarea.target.parentNode.id !== e.target.parentNode.id);
        // // setLista(updatedItems);
        // console.log(updatedItems);

        // console.log(e.target.parentNode.id);
      };
    

    // NUEVO ELEMENTO LISTA

    const newList = lista.map(function(tarea,i){
        
        return <li className="list-group-item" id={i} key = {i}>
            
            {tarea}

            <button type="button" onClick={removeItem} className="btn-close float-end" aria-label="Close"></button>
            
            
            </li>})

            console.log(lista[id]);
            console.log(newList);



  
    return (

        <div className="justify-content-center">

            <h1 className="text-center mt-5">ToDoList</h1>
            
            <div className="d-flex justify-content-center"> 

                <ul className="list-group d-flex col-4 mt-5 shadow-lg mb-5 bg-body rounded">
                    
                    <input type="text" value = {tarea} onChange={(e) => setTarea(e.target.value)} onKeyDown={handleKey}/>

                    {newList}
                
                </ul>

            </div>
        
        </div>
    )
}


export default Todo

