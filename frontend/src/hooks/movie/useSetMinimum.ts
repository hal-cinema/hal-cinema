"use strict";
import { useState } from "react";

export const useSetMinimum = () => {
  const [isMinimum, setIsMinimum] = useState(false);

  const handleSetMinimum = (isScreening: boolean) => {
    setIsMinimum(isScreening);
  };
  return { isMinimum, handleSetMinimum };
};
