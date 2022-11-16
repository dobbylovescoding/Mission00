import styles from "./Navbar.module.css";
import smile from "../images/smile.png";

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.cont1}>
        <img src={smile} alt="profile" className={styles.profileAvatar}></img>
        <div className={styles.howies}>Howie's cute dog pics Inc.</div>
      </div>

      <div className={styles.cont2}>
        <div className={styles.navButtons}>Very</div>
        <div className={styles.navButtons}>Very</div>
        <div className={styles.navButtons}>Cute</div>
        <button className={styles.button}>Log In</button>
      </div>
    </div>
  );
}
