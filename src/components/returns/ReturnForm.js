import {useEffect, useState} from 'react'
import Input from "../form/Input"
import Select from "../form/Select"
import Submit from '../form/Submit'
import TextArea from "../form/TextArea"

function ReturnForm({handleSubmit, returnData}){
    const [categories, setCategories] = useState([]);
    const [Return, setReturn] = useState(returnData || {})

    //Função que pega as categorias de recebimento
    useEffect(() => {
        fetch("http://localhost:5000/categoriesReturns", {
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

    //Envio dos dados
    const submit = (e) => {
        e.preventDefault();
        handleSubmit(Return);
    }

    //Salva os dados enviados por input
    function handleChange(e){
        setReturn({...Return, [e.target.name] : e.target.value});
    }

    //Salva o dado do select
    function handleCategory(e){
        setReturn({...Return, category : {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }});
    }

    //Renderiza o JSX na tela
    return (
        <form onSubmit={submit}>
            <Input 
                name="title" 
                placeholder="Digite o título do recebimento"  
                type="text"
                text="Título do recebimento"
                handleOnChange={handleChange}
                value={Return.title ? Return.title : ''}
            />
            <Input 
                name="value" 
                placeholder="Insira o valor total"  
                type="number"
                text="Valor do recebimento"
                handleOnChange={handleChange}
                value={Return.value ? Return.value : ''}
            />
            <Input 
                name="date"
                type="date"
                text="Data do recebimento"
                handleOnChange={handleChange}
                value={Return.date ? Return.date : ''}
            />
            <Select 
                name="category" 
                text="Categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={Return.category ? Return.category.id : ''}
            />
            <TextArea 
                name="description" 
                placeholder="Digite outras informações que achar necessário..." 
                text="Descrição"
                handleOnChange={handleChange}
                value={Return.description ? Return.description : ''}
            />
            <Submit />
        </form>
    )
}

export default ReturnForm