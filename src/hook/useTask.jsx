import { useState } from "react";

 const useTask = () =>{
    const list = JSON.parse(localStorage.getItem("list")) || []; //caso não tenha algo no storage na chave ele coloca um array limpo

    const [tasks, setTasks] = useState(list) //useState que recebe a lista de tarefas
    
    function putTask(task){
        setTasks([...tasks,task]) //Coloca um item a lista
    }

    function removeTask(task) {
        setTasks(tasks.filter((t) => t.task !== task)) //Remove um item a lista
    }

    function putChecked(checked, index) {
        setTasks(tasks.map((t, i) => i === index ? { ...t, check: checked } : t)) //Atualiza o estado de concluído  "checked"
    }

    return [putTask, removeTask, putChecked, tasks] //retorna as funções e o state
 }

 export default useTask;
 
 