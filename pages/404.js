import styles from "../styles/404.module.css"
import Link from "next/link"

const Error404 = () => {
  return <>
   <div className={styles.mainDiv}>
     <h1>404</h1>
     <p>Sorry <span>!</span> Page Not Found</p>
     <Link href="/"><a className={styles.themeButton}>Go to Home</a></Link>
   </div>
  </>
}

export default Error404