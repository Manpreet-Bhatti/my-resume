import React from "react";
import usePortal from "../../utils/usePortal";
import PrintScreen from "./PrintScreen";
import ToggleMode from "./ToggleMode";
import GitHub from "./GitHub";
import * as styles from "./Menu.module.scss";

export default function Menu() {
  const Portal = usePortal(styles.portal);
  return (
    <Portal>
      <GitHub />
      <PrintScreen />
      <ToggleMode />
    </Portal>
  );
}
