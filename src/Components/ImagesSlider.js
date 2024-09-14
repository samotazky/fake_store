import "./ImagesSlider.css"
import dataSlider from "../dataSlider"
import { useState, useEffect } from "react"

const ImagesSlider = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index < 0) {
            setIndex(dataSlider.length - 1)
        } else if (index > dataSlider.length - 1) {
            setIndex(0)
        }
    }, [index])

    useEffect(() => {
        let setIntervalId = setInterval(() => {
            setIndex(index + 1)
        }, 2500)
        return () => clearInterval(setIntervalId)
    }, [index])

    return <section className="hero-section">
        {<div className="images-slider">
            {
                dataSlider.map((image, imageIndex) => {
                    const { id, img } = image
                    let mainClass = "next-slide"

                    if (imageIndex === index) {
                        mainClass = "active-slide"
                    }

                    return <article key={id} className={mainClass}>
                        <img className="slider-image" src={img} alt="" />
                    </article>
                })
            }
            <div className="slider-text">
                <h1>NEW SEASON ARRIVALS</h1>
                <h2>CHECK OUT ALL THE TRENDS</h2>
            </div>
        </div>}

    </section>
}

export default ImagesSlider
