import { useState } from "react";

export const UseClickHook = (initialValue) => {
  const [click, setClick] = useState(initialValue)

  const handleClick = () => {
    setClick(!click)
  }

  return [click, handleClick]
}
