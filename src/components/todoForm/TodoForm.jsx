import { memo, useContext, useRef } from "react"
import styles from "./TodoForm.module.css"
import { GlobalContext } from "../../GlobalContext";

function TodoForm() {

    const { putTask } = useContext(GlobalContext);
    const textRef = useRef(null)

    function addTask(e) {
        e.preventDefault()//previne comportamento padrão de formulário

        if (textRef.current.value === "") {//verifica se o form está vazio
            return
        }

        putTask({ task: textRef.current.value, check: false })//nova tarefa "task: 'nova tarefa'" e valor padrão para o "check:false"
        textRef.current.value = "" //limpa o input
        textRef.current.focus() //mantem o foco no input
    }
    return (
        <form className={styles.section__addToList} onSubmit={addTask}>
            <input type="text" className={styles.section__addToListInput} ref={textRef} required />

            <button className={styles.section__addToListBtn}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </form>
    )
}

export default memo(TodoForm);