import styles from "./Navbar2.module.css";
import smile from "../images/smile.png";
import { useState } from "react";

export default function Navbar2() {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <img src={smile} alt="profile" className={styles.profileAvatar}></img>
        My dog, My hero!
      </div>

      <ul className={open ? styles.ul : styles.ulClosed}>
        <li className={styles.li}>Home</li>
        <li className={styles.li}>About Us</li>
        <li className={styles.li}>Contact Us</li>
        <li className={styles.li}>Sign In</li>
        <li className={styles.li}>SIgn Up</li>
      </ul>
      <div className={styles.menu}>
        <div className={styles.StyledBurger} onClick={toggleOpen}>
          <div className={styles.div} />
          <div className={styles.div} />
          <div className={styles.div} />
        </div>
      </div>
    </div>
  );
}
