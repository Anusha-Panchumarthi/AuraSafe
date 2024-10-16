import Image from "next/image";
import styles from "../page.module.css";
import { Stack } from "react-bootstrap";
import Link from "next/link";
import NavBar from "../navbar";

export default function ProfileCard({userName, userNumber, userEmail}){
    return(
        <div className={styles.profileCard}>
            <Image src="/user.png" height={100} width={100} className={styles.emergencyPic}/>
            <p className={styles.userName}>{userName}</p>
            <p>{userNumber}</p>
            <p>{userEmail}</p>
        </div>
    )
}