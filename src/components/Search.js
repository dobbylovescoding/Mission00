import styles from "./Search.module.css";
import smile from "../images/landscape.jpeg";

export default function Search() {
  return (
    <div className={styles.cont}>
      <section className={styles.dream}>
        Dream to Dare, <br /> Dare to Dream!
      </section>

      <div className={styles.bar}>
        <input
          type="text"
          className={styles.inputBar}
          placeholder="Have a browse!"
        ></input>
        <button className={styles.button}>Search!</button>
      </div>
    </div>
  );
}
