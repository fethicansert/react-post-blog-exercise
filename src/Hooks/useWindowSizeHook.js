import React, { useEffect, useState } from 'react'

function useWindowSize(){
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        const cleanUpResize = () =>{
            console.log("Resize cleanUp Function");
            window.addEventListener('resize', handleResize);
        }

        return cleanUpResize;
    },[]);


    return windowSize;
}

export default useWindowSize

