import Toast from "../components/toast";
import React, {ReactElement, useEffect, useState} from "react";


function useToast(msg: string): [() => void, ReactElement] {
    const [toastHolder, setHolder] = useState(<></>);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        clearTimeout(timer);
    }, [timer]);

    function openToast(): void {
        setHolder(<Toast msg={msg}/>)

        const timer = setTimeout(() => {
            setHolder(<></>)
            setTimer(timer);
        }, 800)
    }

    return [openToast, toastHolder]
}

export default useToast;