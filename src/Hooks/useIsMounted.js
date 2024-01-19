import { useEffect } from "react"


const useIsMounted = (name) => {
    useEffect(() => {

        function tellMoutend(){
            console.log(`${name} is Unmounted`);
        }
        return tellMoutend;
    },[]);
}

export default useIsMounted;