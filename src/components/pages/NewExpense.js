import { useNavigate } from "react-router-dom"
import ExpenseForm from "../expenses/ExpenseForm"
import styles from "./NewExpense.module.css"

function NewExpense(){
    const history = useNavigate();

    //Função que envia o objeto expense para o banco falso
    function createExpense(expense){
        fetch('http://localhost:5000/expenses', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(expense),
        })
            .then((resp) => resp.json())
            .then((data) => {
                history("/expenses", {message: "Gasto adicionado com sucesso!"})
            })
            .catch((err) => console.log(err));
    }

    return (
        <section className={styles.newExpense__container}>
            <h1>Adicionar Gasto</h1>
            <ExpenseForm handleSubmit={createExpense} />
        </section>
    )
}

export default NewExpense