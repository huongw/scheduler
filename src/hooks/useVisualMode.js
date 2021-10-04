import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);


  function transition(mode, replace = false) {

    if (!replace) {
      const updatedHistory = [...history, mode]
      setHistory(updatedHistory)
    }

    setMode(mode)
  }

  function back() {
    if (history.length > 1) {
      const updatedHistory = history.slice(0, history.length - 1)
      setMode(updatedHistory[updatedHistory.length - 1])
      setHistory(updatedHistory)
    }
  }

  return { mode, transition, back };
}