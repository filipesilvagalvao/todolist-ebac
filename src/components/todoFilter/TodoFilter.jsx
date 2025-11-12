import styles from './TodoFilter.module.css'

function TodoFilter({idName, check, setCheck, filterList,fillterValue,nameLabel}) {
    return (
        <>
            <input type="radio" name="filter" id={idName} className={styles.section__filterCheckbox} value={idName} checked={check === idName} onChange={(e) => setCheck(e.target.value)} />
            <label htmlFor={idName} className={styles.section__filterLabel} onClick={() => filterList(fillterValue)}>{nameLabel}</label>
        </>
    )
}

export default TodoFilter