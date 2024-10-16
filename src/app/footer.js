import styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <div className = {styles.footer}>
            <p>Copyright 2024 by AuraSafe. All Rights Reserved.</p>
            <p>Contact: +91 9731045766</p>
        </div>
    )
}