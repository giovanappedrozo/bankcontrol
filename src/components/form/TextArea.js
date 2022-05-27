import styles from "./TextArea.module.css"

function TextArea({name, text, placeholder, handleOnChange}){
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
            <textarea 
            name={name}
            placeholder={placeholder}
            rows="5"
            onChange={handleOnChange}
            ></textarea>
        </div>
    )
}

export default TextArea