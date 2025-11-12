import styles from "./TodoList.module.css"
import { GlobalContext } from "../../GlobalContext"
import { useContext, useRef, useState } from "react"
import TodoForm from "../todoForm/TodoForm";
import TodoItem from "../todoItem/TodoItem";
import TodoFilter from "../todoFilter/TodoFilter";

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
                    <TodoFilter idName="all" check={check} setCheck={setCheck} filterList={filterList} fillterValue="" nameLabel="Todas" />
                    <TodoFilter idName="check" check={check} setCheck={setCheck} filterList={filterList} fillterValue={false} nameLabel="Concluídas" />
                    <TodoFilter idName="pending" check={check} setCheck={setCheck} filterList={filterList} fillterValue={true} nameLabel="Pendentes" />
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