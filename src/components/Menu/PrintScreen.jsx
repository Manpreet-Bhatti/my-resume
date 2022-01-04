import React from "react";
import { FiPrinter } from "react-icons/fi";
import styles from "./Menu.module.scss";

export default function PrintScreen() {
  return (
    <button
      onClick={() => window?.print()}
      title="Print/download resume"
      aria-label="Print page"
      className={styles.button}
    >
      <FiPrinter className={styles.icon} />
    </button>
  );
}
