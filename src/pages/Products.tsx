import { Data } from "@/components/Products"
import styles from "@/styles/Home.module.css"
export default () => {
    
    return (
        <div>
           
            <div className={styles.ParentDivofProducts}>
            <h2 className={styles.ProductsHeader}>OUR PRODUCTS</h2>
            {
            Data.filter((item: any) => item.id > 1000 && item.price > 0).map(((item: any,key) => {
                return (
                <div className={styles.Product} key={key}>
                    <div className={styles.ProductFirstDiv}>
                        <h3 className={styles.ProductTitle}>{item.name}</h3>
                        <h5 className={styles.ProductDescription}>{item.description}</h5>
                        <img className={styles.ProductImg} src={item.api_featured_image }/>
                    </div>
                    <div className={styles.ProductSecondDiv}>
                        <button className={styles.ProductButton}>BUY NOW</button>
                        <button  className={styles.ProductButton1}>ADD TO CART</button>
                        <p className={styles.ProductText}>Price <br/> {item.price}$</p>
                    </div>
                </div>
                )
            }))
            }
            </div>
            <div style={{ justifyContent: "center", display: 'flex', marginBottom: '40px'}}> <button className={styles.seemoreButton}>See More</button> </div>
        </div>
    )
}