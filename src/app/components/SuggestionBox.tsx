"use client"
import { useState } from "react";

import styles from "./SuggestionBox.module.css";
import { Send } from "lucide-react";

export const SuggestionBox = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={(() => window.open("", "_blank"))}>
      <div className={styles.suggestBoxNomal}></div>
      <div className={styles.suggestBox60}></div>
      <div className={styles.suggestBoxMinus60}></div>
      <div className={styles.suggestBoxNomal}>
        <Send className={styles.suggestBoxIcon} />
      </div>
    </button>
  );
}