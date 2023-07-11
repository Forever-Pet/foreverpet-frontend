import { useState } from "react";

export const ClickHook = (initialValue) => {
  const [click, setClick] = useState(initialValue)

  const handleClick = () => {
    setClick(!click)
  }

  return [click, handleClick]
}
