import LinkButton from "../layout/LinkButton"
import styles from "./Home.module.css"
import savings from '../../img/savings.svg'

function Home(){ 
    // function typeWrite(elemento){
    //     const textoArray = elemento.innerHTML.split('');
    //     elemento.innerHTML = '';
    //     textoArray.forEach(function(letra, i){   
          
    //     setTimeout(function(){
    //         elemento.innerHTML += letra;
    //     }, 75 * i)
    
    //   });
    // }
    
    // {const titulo = document.querySelector('#titulo__principal');
    // typeWrite(titulo);}

    return (
        <section className={styles.home__container}>
            <h1 id="titulo__principal" className={styles.h1}>Olá, &lt;Giovana&gt;</h1>
            <p className={styles.p}>Comece a gerenciar seu dinheiro agora mesmo!</p>
            <p>Seu saldo atual é de:</p>
            <LinkButton to="/newexpense" text="+ Gasto"/>&nbsp;
            <LinkButton to="/newreturn" text="+ Recebimento"/>
            <img src={savings} alt="Savings" className={styles.img__savings} />
        </section>
    )
}

export default Home