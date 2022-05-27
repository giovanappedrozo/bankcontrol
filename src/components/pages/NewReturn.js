import { useNavigate } from "react-router-dom"
import ReturnForm from "../returns/ReturnForm"
import styles from "./NewReturn.module.css"

function NewReturn(){
    const history = useNavigate();

    //Função que envia o objeto returm para o banco falso
    function createReturn(returm){
        fetch('http://localhost:5000/returns', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(returm),
        })
            .then((resp) => resp.json())
            .then((data) => {
                history("/expenses", {message: "Recebimento adicionado com sucesso!"})
            })
            .catch((err) => console.log(err));
    }

    return (
        <section className={styles.newExpense__container}>
            <h1>Adicionar Recebimento</h1>
            <ReturnForm handleSubmit={createReturn} />
        </section>
    )
}

export default NewReturn