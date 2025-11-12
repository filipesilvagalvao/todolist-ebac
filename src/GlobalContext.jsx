import { createContext, useEffect} from "react";
import useTask from "./hook/useTask";

export const GlobalContext = createContext();

export const GlobalStorage = ({children}) =>{

    
    const [putTask, removeTask, putChecked, tasks] = useTask(); //hook customizado que coloca, remove, modifica "marca e desmarca" um item a lista

    useEffect(() => {//atualiza a chave no localStorage caso tenha novos items a lista de tarefas
        if (tasks)
            localStorage.setItem("list", JSON.stringify(tasks))
    }, [tasks])

    /*"tasks" é um array de objeto 
    contendo a lista de items com o estado de marcado: 
        [
            {task: "Tarefa 1", check: true}, 
            {task: "Tarefa 2", check: false}
        ] 
    */

    return(
        <GlobalContext.Provider value={{tasks, putTask, removeTask, putChecked}}>
            {children}
        </GlobalContext.Provider>
    )
}