import { useState } from "react";

export const useClickHook = (initialValue) => {
  const [click, setClick] = useState(initialValue)

  const handleClick = () => {
    setClick(!click)
  }

  return [click, handleClick]
}
