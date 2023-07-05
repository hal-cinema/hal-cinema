"use strict";
import { useState } from "react";


export const useSetScreen =()=>{
    const [isScreening, setScreening] = useState(false);
    const handleSetScreen = (isScreening: boolean) => {
        setScreening(isScreening);
    }
    return {isScreening, handleSetScreen}
}