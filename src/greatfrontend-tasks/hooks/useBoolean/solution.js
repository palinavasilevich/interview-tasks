/**
 * @typedef {{
 *   value: boolean,
 *   setTrue: () => void,
 *   setFalse: () => void,
 * }} UseBooleanReturn
 */

/**
 * @param {boolean} [initialValue=false]
 * @returns {UseBooleanReturn}
 */

import { useState } from "react";

export default function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return {
    value,
    setTrue,
    setFalse,
  };
}
