import React, { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import classnames from "classnames";
import { modeContext } from "../../pages";
import styles from "./Menu.module.scss";

export default function ToggleMode() {
  const context = useContext(modeContext);
  return (
    <button
      onClick={() => context.set(!context.get)}
      aria-label="Toggle dark mode"
      className={styles.button}
    >
      <FiSun
        className={classnames(
          styles.icon,
          context.get || styles["icon--hidden"],
        )}
      />
      <FiMoon
        className={classnames(
          styles.icon,
          styles["icon--abs"],
          context.get && styles["icon--hidden"],
        )}
      />
    </button>
  );
}
