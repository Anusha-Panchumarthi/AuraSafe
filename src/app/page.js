import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "./navbar";
import Footer from "./footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar/> 
      
      <div className = {styles.heroSection}>
        <h2 className={styles.header}>About AuraSafe</h2>
        <p className={styles.heroInfo}>
        AuraSafe was founded by a group of young, innovative minds driven by a shared goal: to enhance safety and security in today's world. With the rising crime rates in India, we recognized the urgent need for reliable personal safety solutions that empower individuals to feel secure and connected. This brand was born out of a passion to create products that combine technology, style, and practicality, ensuring safety is always within reach.
        </p>
        <h2>Our Products</h2>
        <table className={styles.productTable}>
          <tbody>
          <tr>
            <th className={styles.productTitle}>AuraBracelet</th>
            <th className={styles.productTitle}>AuraWatch (XYZ)</th>
          </tr>
          <tr>
            <td>Designed to be multi-purpose and user-friendly, this bracelet goes beyond just a stylish accessory.</td>
            <td>A sleek and stylish analog watch that ensures you're always connected and protected.</td>
          </tr>
          <tr>
            <td><b>GPS Tracking: </b> Constant location tracking to ensure safety at all times.</td>
            <td><b>GPS Tracking: </b> Constant tracking to ensure your location is always accessible to those who care.</td>
          </tr>
          <tr>
            <td><b>Emergency Alarm: </b> Activates in dangerous situations to alert those around you.</td>
            <td><b>SMS Alerts: </b> Automatically sends messages to emergency contacts during critical situations.</td>
          </tr>
          <tr>
            <td><b>SMS Alerts: </b> Sends instant messages to pre-set emergency contacts when activated.</td>
            <td><b>Emergency Alarm: </b> Discreet but effective, notifying those around you when you need help.</td>
          </tr>
          <tr>
            <td><b>Fidgeting Textured Beads:</b> Designed for individuals with anxiety, helping reduce stress and habits like nail-biting.</td>
            <td><b>Customizable Design:</b> Available in multiple colors and designs to match your personal taste.</td>
          </tr>
          <tr>
            <td><b>Durable, Lightweight, and Waterproof:</b> Built for everyday wear, it’s robust, easy to carry, and withstands all weather conditions.</td>
            <td></td>
          </tr>
          <tr>
            <td><b>App Integration:</b> Seamless connection with a mobile app for added functionality and customization.</td>
            <td></td>
          </tr>
          <tr>
            <td>Color Options and Scented Available in various shades and scents to suit your style.</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
}
