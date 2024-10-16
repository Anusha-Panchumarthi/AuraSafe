"use client"
import Image from "next/image";
import styles from "../page.module.css";
import NavBar from "../navbar";
import { useState, useEffect } from "react";
import Footer from "../footer";

export default function Home() {
  const [date, setDate] = useState(new Date());
    
  return (
    
    <div className={styles.page}>
      <NavBar/> 
      <div  className={styles.locate}>
        <h2 className={styles.header}>Locate Device</h2>
        <iframe suppressHydrationWarning src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9350221614013!2d77.73935637507647!3d12.97600778733977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11ff0416e105%3A0xb5cec4d301ed451e!2sThe%20Deens%20Academy!5e0!3m2!1sen!2sin!4v1729092926830!5m2!1sen!2sin" width="600" height="450" className={styles.locateMap} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>Last updated : {date.toLocaleDateString()} {date.toLocaleTimeString()} </p>
      </div>
      <Footer/>
    </div>
  );
}
