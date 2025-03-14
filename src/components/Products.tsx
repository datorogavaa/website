'use client'
import Link from "next/link";
import styles from "@/styles/Home.module.css";
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
import { useEffect,useState } from "react";
import { useSession, signIn, signOut} from "next-auth/react";

export default () => {
    const { data: session } = useSession() 
    const [products, setProducts ] = useState<any[]>([])
    useEffect(() => {
    async function getData() {
        const response = await fetch('/api/products')
        const modResponse = await response.json();
        setProducts(modResponse)
        }
        getData();
    }, [])
    console.log(session?.user)
    return (
        <div className={styles.Products}>
            <h2 className={styles.ProductsHeader}>ჩვენი პროდუქტები</h2>
            <h5 className={styles.ProductsHeader1}>გააუმჯობესეთ თქვენი კომპიუტერი ხარისხით და სისწრაფით!</h5>
            <div className={styles.ParentDivofProduct}>
            
            {
                products.slice(0,10).map((item: any, key: any) => (
                        <div key={key} className={styles.Product}>
                            <div className={styles.ProductFirstDiv}>
                            <Link href={`/products/${item.id}`}><h3 className={styles.ProductTitle}>{item.Name}</h3></Link>
                                <h5 className={styles.ProductDescription}>{item.Description}</h5>
                                <img className={styles.ProductImg} src={item.Image}/>
                            </div>
                            <div className={styles.ProductSecondDiv}>
                                <button className={styles.ProductButton}>ყიდვა</button>
                                <button  className={styles.ProductButton1}>კალათაში დამატება</button>
                                <p className={styles.ProductText}>ფასი: <br/>{item.Price}$</p>
                            </div>
                        </div>
                ))
            }

            </div>
            <div style={{ justifyContent: "center", display: 'flex'}}><Link href="/products"><button  className={styles.seemoreButton}>ყველა პროდუქტი</button></Link> 
            {session?.user &&  <Link href="addProduct"><button className={styles.addProductsButton}>პროდუქტის დამატება</button></Link>}
            </div>
        </div>
    )
}