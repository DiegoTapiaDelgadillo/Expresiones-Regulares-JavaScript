import { useState } from "react";

export default function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const [willChange, setWillChange] = useState(false);

  const toggle = () => {
    if (state) {
      setWillChange(true);
      setTimeout(() => {
        setState((prevState) => !prevState);
        setWillChange(false);
      }, 280);
    } else {
      setState((prevState) => !prevState);
    }
  };

  return { state, toggle, willChange };
}
