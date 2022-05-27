import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Link className={styles.navbar__link} to="/">Início</Link>
            <Link className={styles.navbar__link} to="/newexpense">Gastos</Link>
            <Link className={styles.navbar__link} to="/newreturn">Recebimentos</Link>
        </nav>
    )
}

export default Navbar