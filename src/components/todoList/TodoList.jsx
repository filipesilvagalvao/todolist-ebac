import styles from "./TodoList.module.css"
import { GlobalContext } from "../../GlobalContext"
import { useContext, useRef, useState } from "react"
import TodoForm from "../todoForm/TodoForm";
import TodoItem from "../todoItem/TodoItem";

function TodoList() {
    const { tasks, removeTask, putChecked } = useContext(GlobalContext);
    const [check, setCheck] = useState("all") //State para marcar de forma visual qual filtro está aplicado

    const listRef = useRef(null)

    function filterList(fill) {//função que filtra a exibição de items da lista de tarefas

        const inputsList = listRef.current.querySelectorAll("li>input")

        inputsList.forEach((input) => {

            const li = input.closest("li");

            input.checked === fill ? li.style.display = "none" : li.style.display = ""

        });
    }

    return (
        <section className={styles.section}>
            <div className={styles.section__container}>
                <h1 className={styles.section__h1}>My list</h1>

                {/*Filtro de tarefas */}
                <div className={styles.section__filter}>

                    <input type="radio" name="filter" id="all" className={styles.section__filterCheckbox} value="all" checked={check === "all"} onChange={(e) => setCheck(e.target.value)} />
                    <label htmlFor="all" className={styles.section__filterLabel} onClick={() => filterList("")} >Todas</label> {/*FILTRA POR TODOS OS ITEMS DA LISTA */}

                    <input type="radio" name="filter" id="check" className={styles.section__filterCheckbox} value="check" checked={check === "check"} onChange={(e) => setCheck(e.target.value)} />
                    <label htmlFor="check" className={styles.section__filterLabel} onClick={() => filterList(false)}>Concluídas</label>  {/*FILTRA POR ITEMS CONCLUÍDOS DA LISTA */}

                    <input type="radio" name="filter" id="pending" className={styles.section__filterCheckbox} value="pending" checked={check === "pending"} onChange={(e) => setCheck(e.target.value)} />
                    <label htmlFor="pending" className={styles.section__filterLabel} onClick={() => filterList(true)}>Pendentes</label>  {/*FILTRA POR ITEMS PENDENTES DA LISTA */}

                </div>

                {/*Adicionar tarefas */}
                <TodoForm />

                {/*Lista de tarefas */}
                <ul className={styles.section__list} ref={listRef}>
                    {tasks &&
                        tasks.map((task, index) => (
                            <TodoItem
                                task={task}
                                index={index}
                                removeTask={removeTask}
                                putChecked={putChecked}
                                key={task + index}
                            />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default TodoList