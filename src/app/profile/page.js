"use client";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import NavBar from "../navbar";
import ProfileCard from "./profile-card";
import { useState } from "react";
import Footer from "../footer";

export default function Profile(){

    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState("Aashna Panchumarthi")
    const [age, setAge] = useState("16")
    const [number, setNumber] = useState("9916000147")
    const [address, setAddress] = useState("Villa 4, Chaithanya Armadale")
    const [city, setCity] = useState("Bangalore")
    const [pincode, setPincode] = useState("560066")

    console.log(isEdit)  
    return(
    <div className={styles.page}>
        <NavBar/>    
        <form className={styles.profile}
            onSubmit={(e) =>{
                e.preventDefault();
                setIsEdit(!isEdit);
            }}>
            <h2 className={styles.header}>Profile Details</h2>
            <div className={styles.profileGrid}>
                
                    
                    {isEdit?(
                        <div className={styles.profileDetails}>
                            <Image src="/user.png" height={150} width={150} className={styles.profilePic}/>
                            <input className={styles.profileEdit} 
                                    value={name}
                                    placeholder="  Name"
                                    onChange={(e)=>{
                                        setName(e.target.value);
                                    }} />
                            <input className={styles.profileEdit} 
                                    value={age}
                                    placeholder="  Age"
                                    onChange={(e)=>{
                                        setAge(e.target.value);
                                    }} />
                            <input className={styles.profileEdit} 
                                    value={number}
                                    placeholder="  Phone Number"
                                    onChange={(e)=>{
                                        setNumber(e.target.value);
                                    }} />
                            <input className={styles.profileEdit} 
                                    value={address}
                                    placeholder="  Address"
                                    onChange={(e)=>{
                                        setAddress(e.target.value);
                                    }} />
                            <input className={styles.profileEdit} 
                                    value={city}
                                    placeholder="  City"
                                    onChange={(e)=>{
                                        setCity(e.target.value);
                                    }} />
                            <input className={styles.profileEdit} 
                                    value={pincode}
                                    placeholder="  Pincode"
                                    onChange={(e)=>{
                                        setPincode(e.target.value);
                                    }} />
                        </div>
                    ):(
                        <div className={styles.profileDetails}>
                            <Image src="/user.png" height={150} width={150} className={styles.profilePic}/>
                            <p className={styles.profileDetail}>{name}</p>
                            <p className={styles.profileDetail}>{age} years old</p>
                            <p className={styles.profileDetail}>+91 {number}</p>
                            <p className={styles.profileDetail}>{address}</p>
                            <p className={styles.profileDetail}>{city}</p>
                            <p className={styles.profileDetail}>{pincode}</p>
                        </div>
                    )}
                    
                
                <ProfileCard userName="Anil Rana" userNumber="9916000961" userEmail="anilrana@abc.com"/>
                <ProfileCard userName="Ankita V" userNumber="9916000962" userEmail="ankita@pqr.com"/>
                <ProfileCard userName="Charlie Chaplin" userNumber="9916020963" userEmail="charlie.xyz@abc.com"/>
            </div>
            
            {isEdit?(
                <button className={styles.editButton}>Save Profile</button>):(
                <button className={styles.editButton}>Edit Profile</button>)
            }
        
        </form>
        <Footer/>
    </div>
    )
}