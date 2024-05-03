import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

function Hero() {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideoSrcSet=()=>{
        if(window.innerWidth<760){
            setVideoSrc(smallHeroVideo)
        }
        else{
            setVideoSrc(heroVideo)
        }
    }

    useEffect(()=>{
        window.addEventListener('resize',handleVideoSrcSet);

        return()=>{
            window.removeEventListener('resize',handleVideoSrcSet)
        }
    },[]);

    useGSAP(() => {
        gsap.to('#hero', { opacity: 0.8,y:10, delay: 1.5 })
        gsap.to('.cc',{opacity:0.8, y:-80, delay:2})
    }, [])
    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p className="hero-title" id="hero">iPhone 15 Pro</p>
                <div className="md:w-10/12 w-9/12">
                    <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div id="cta" className="flex flex-col items-center">
                <a href="#highlights" className=" opacity-0 btn cc">Buy</a>
                <p className="font-normal text-xl opacity-0 cc">From &#8377;134900</p>
            </div>
        </section>
    )
}

export default Hero