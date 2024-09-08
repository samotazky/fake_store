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
        }, 5000)
        console.log(index);
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

                    if (imageIndex === index - 1 || (index === 0 && imageIndex === dataSlider.length - 1)) {
                        mainClass = "last-slide"
                    }

                    return <article key={id} className={mainClass}>
                        <img className="slider-image" src={img} alt="" />
                    </article>
                })
            }
            <div className="slider-text">
                <h1>Welcome to our store</h1>
            </div>
        </div>}

    </section>
}

export default ImagesSlider
