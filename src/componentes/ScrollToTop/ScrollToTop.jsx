import { useLocation} from "react-router-dom";
import { useEffect } from "react";

function ScrolltoTop () {
    const location = useLocation()
    
    useEffect(()=> {
        window.scrollTo({
            top:0,
            left: 0,
            behavior: 'smooth'
        })
    }, [location]) 

    return null
}

export default ScrolltoTop