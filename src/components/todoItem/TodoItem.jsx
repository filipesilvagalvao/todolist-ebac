import { memo } from "react";
import styles from "./TodoItem.module.css"

function TodoItem({task, index, removeTask, putChecked}) {

    return (
        <li className={styles.section__item}>
            <input
                type="checkbox"
                name="task" id={"task" + index}
                className={styles.section__itemCheckbox}
                checked={task.check}
                onChange={() => putChecked(!task.check, index)}//marca e desmarca a tarefa
            />
            <label htmlFor={"task" + index} className={styles.section__itemLabel}><i className="fa-solid fa-check"></i></label>

            <span className={styles.section__itemText}>{task.task}</span>

            <button className={styles.section__itemBtnDelete} onClick={() => removeTask(task.task)}><i className="fa-solid fa-trash-can"></i></button>{/*excluir a tarefa*/}
        </li>
    )
}

export default memo(TodoItem);