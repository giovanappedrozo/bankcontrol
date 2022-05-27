import {useEffect, useState} from 'react'
import Input from "../form/Input"
import Select from "../form/Select"
import Submit from '../form/Submit'
import TextArea from "../form/TextArea"

function ExpenseForm({handleSubmit, expenseData}){
    const [categories, setCategories] = useState([]);
    const [expense, setExpense] = useState(expenseData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categoriesExpenses", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(expense);
    }

    function handleChange(e){
        setExpense({...expense, [e.target.name] : e.target.value});
    }

    function handleCategory(e){
        setExpense({...expense, category : {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }});
    }

    return (
        <form onSubmit={submit}>
            <Input 
                name="title" 
                placeholder="Digite o título do gasto"  
                type="text"
                text="Título do gasto"
                handleOnChange={handleChange}
                value={expense.title ? expense.title : ''}
            />
            <Input 
                name="value" 
                placeholder="Insira o valor total"  
                type="number"
                text="Valor do gasto"
                handleOnChange={handleChange}
                value={expense.value ? expense.value : ''}
            />
            <Input 
                name="date"
                type="date"
                text="Data do gasto"
                handleOnChange={handleChange}
                value={expense.date ? expense.date : ''}
            />
            <Select 
                name="category" 
                text="Categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={expense.category ? expense.category.id : ''}
            />
            <TextArea 
                name="description" 
                placeholder="Digite outras informações que achar necessário..." 
                text="Descrição"
                handleOnChange={handleChange}
                value={expense.description ? expense.description : ''}
            />
            <Submit />
        </form>
    )
}

export default ExpenseForm