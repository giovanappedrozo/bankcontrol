import styles from "./Input.module.css"

function Input({type, name, placeholder, value, text, handleOnChange}){
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                onChange={handleOnChange}
                value={value}
            />
        </div>
    )
}

export default Input