import { useEffect, useState } from "react";
import "./ScrollToTopBtn.css"
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopBtn = () => {
    const [showTopBtn, setShowTopBtn] = useState(false)

    useEffect( () => {
        window.addEventListener("scroll", () => {
            window.scrollY > 400 ? setShowTopBtn(true) : setShowTopBtn(false)
        })
    }, [])

    const goToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return <div>
        {showTopBtn && (
            <button className="btn-scroll" onClick={goToTop}><FaArrowUp /></button>
        )}
    </div>
}

export default ScrollToTopBtn
