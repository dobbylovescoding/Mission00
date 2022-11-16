import { displayData } from "./displayData";
import styles from "./Images.module.css";

export default function Images() {
  return (
    <div className={styles.cont}>
      {displayData.map((item) => {
        return (
          <div key={item.id} className={styles.sideitem}>
            <img src={item.photo} className={styles.images}></img>
            <div className={styles.cont1}>
              <span className={styles.linkName}>{item.name}</span>
              <span className={styles.linkText}>{item.text}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
