import styles from "./Burger.module.css";
import { useState } from "react";
import styled from "styled-components";

export default function Burger() {
  const [open, setopen] = useState(true);
  const toggleOpen = () => {
    setopen(!open);
  };
  return (
    <div className={styles.StyledBurger}>
      <div className={styles.div} />
      <div className={styles.div} />
      <div className={styles.div} />
    </div>
  );
}
