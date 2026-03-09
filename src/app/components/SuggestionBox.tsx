"use client"
import { useState } from "react";
import styles from "./SuggestionBox.module.css";


export const SuggestionBox = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count+1)}>
      <div className={styles.suggestBoxNomal}></div>
      <div className={styles.suggestBoxNomal}>{count}</div>
      <div className={styles.suggestBox60}></div>
      <div className={styles.suggestBoxMinus60}></div>
    </button>
  );
}