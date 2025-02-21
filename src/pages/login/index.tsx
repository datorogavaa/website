import styles from '@/styles/Home.module.css'
import Link from 'next/link'
export default () => {
    return (
            <div className={styles.LoginDiv}>
                <h1>Welcome back!</h1>
                <form action="get">
                    <h2>Email</h2>
                    <input name='login' className={styles.loginInput}></input>
                    <h2>Password</h2>
                    <input name='password' className={styles.loginInput}></input>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <button className={styles.loginButton} type='submit'>Log In</button>
                       <Link href='/login/register'><button className={styles.loginButton} type='button'>Sign Up</button></Link>
                    </div>
                </form>
            </div>
    )
}