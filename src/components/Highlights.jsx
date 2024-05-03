import { useGSAP } from "@gsap/react"
import gsap from "gsap/gsap-core"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {

    useGSAP(() => {
        gsap.to('#title', { opacity: 1, y: 0 })
        gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
    }, [])

    return (
        <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
            <div className="screen-max-width">
                <div className="mb-12 w-full md:flex items-center justify-between">
                    <h1 id="title" className="section-heading">Get the highlights.</h1>
                    <div className="flex flex-wrap items-center gap-7">
                        <p className="link">Watch the film
                            <img src={watchImg} alt="watch" className=" md:ml-2 scale-50 md:scale-100" />
                        </p>
                        <p className="link">Watch the event
                            <img src={rightImg} alt="right" className="ml-1 md:ml-2 scale-50 md:scale-100" />
                        </p>
                    </div>
                </div>
                <VideoCarousel/>
            </div>
        </section>
    )
}

export default Highlights