import styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"

export default function NavBar(){
    return(
        <div className = {styles.navbar}>
            
            <Image src="/auraLogo.png" height={32} width={32}/>
            <Link href="/">
            
                <h1><span className={styles.logo1}>A</span><span className={styles.logo2}>u</span><span className={styles.logo3}>r</span><span className={styles.logo4}>a</span>Safe</h1>
            </Link>
                <div className = {styles.navlinks}>
                    <Link href="/locate">
                    <Image src ="/location.png"
                            width={32}
                            height={32}
                    />
                    </Link>
                    <Link href="/profile">
                    <Image src ="/profile.png"
                            width={32}
                            height={32}
                    /></Link>
                </div>
        </div>
    )
}