import { useEffect } from "react"

const useTitle =(title)=>{
    useEffect(()=>{
        document.title = `${title} - kids toy`
    },[title])
}

export default useTitle;