import { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export default function usePortal(className) {
  const element = useRef();
  useEffect(() => {
    element.current = document.createElement("div");
    return () => element.current.remove();
  }, []);

  useEffect(() => {
    element.current.classList.add(className);
    document.body.appendChild(element.current);
  }, [className]);

  return element.current
    ? ({ children }) => ReactDOM.createPortal(children, element.current)
    : () => null;
}
