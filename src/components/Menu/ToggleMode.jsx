import React, { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import classnames from "classnames";
import { modeContext } from "../../pages";
import * as styles from "./Menu.module.scss";

export default function ToggleMode() {
  const context = useContext(modeContext);
  return (
    <button
      onClick={() => context.set(!context.get)}
      title="Change theme"
      aria-label="Toggle dark mode"
      className={styles.button}
    >
      <FiSun
        className={classnames(styles.icon, context.get || styles.icon__hidden)}
      />
      <FiMoon
        className={classnames(
          styles.icon,
          styles.icon__abs,
          context.get && styles.icon__hidden,
        )}
      />
    </button>
  );
}
