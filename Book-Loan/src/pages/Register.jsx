import { Link } from 'react-router-dom'
import styles from './Register.module.css'

function Register(){
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>قم بالتسجيل</h1>
            <Link to="/login" className={styles.link}>سجل</Link>
        </div>
    )
}

export default Register