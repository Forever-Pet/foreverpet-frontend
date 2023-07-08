import { useState } from "react";

export const IconClickHook = (initialValue) => {
  const [click, setClick] = useState(initialValue)

  const handleIcon = () => {
    setClick(!click)
  }

  return [click, handleIcon]
}
