import { useEffect,useState } from "react"
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css"
import Link from "next/link"
export default () => {

    const [ show, setShow ] = useState(false)
    const router = useRouter();
    const func = () => {
        setShow(true)

    }
    const exit = () => {
        setShow(false)
    }
    useEffect(() => {
        const handleRouteChange = () => {
          setShow(false);
        };
    
        router.events.on("routeChangeStart", handleRouteChange);
    
        return () => {
          router.events.off("routeChangeStart", handleRouteChange);
        };
      }, [router.events]);


    return (
            <div>
            <div>
                <nav>
                {
                    <div  className={`${styles.navbarSecond} ${ show ? styles.active: ''}`}>
                        <br></br>
                        <div className={styles.navbarTexts}>
                            <Link className={styles.navbarText} href='/'>Home</Link>
                            <Link className={styles.navbarText} href="/products" >Products</Link>
                            <Link className={styles.navbarText} href="/">About</Link>
                            <Link className={styles.navbarText} href="/">Client</Link>
                            <Link className={styles.navbarText} href="/">Contact</Link>
                        </div>
                        <div>
                            <button className={styles.xbutton} onClick={exit}>X</button>
                        </div>
                    </div>
                }
                <div className={`${styles.navbar}`}>
                <span style={{cursor: 'pointer'}}><img onClick={func}  src="toggle-icon.png" alt="logo"/></span>
                    <Link style={{textDecoration: 'none'}} href="/"><h2 className={styles.siteName}>PC Parts</h2></Link>
                    <form>
                        <div>
                            <Link className={styles.navbarA} href="/login"><img src="user-icon.png"/></Link>
                            <Link className={styles.navbarA} href="/"><img src="bag-icon.png"/></Link>
                            <Link className={styles.navbarA} href="/"><img src="search-icon.png"/></Link>
                        </div>
                    </form>
                </div>
                </nav>
            </div>
            </div>
        )
}