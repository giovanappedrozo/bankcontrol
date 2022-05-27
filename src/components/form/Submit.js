import styles from "./Submit.module.css"

function Submit(){
    const name = "submit";
    return (
        <input
        className={styles.btnSubmit}
        type={name}
        name={name}
        id={name} 
        value="Enviar"
        />
    )
}

export default Submit