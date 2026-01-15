import { Link } from "react-router-dom"
import styles from './Login.module.css'

function Login(){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>قم بتسجيل الدخول من فضلك</h1>
            <Link to="/" className={styles.link}>تسجيل الدخول</Link>
        </div>
    )
}

export default Login