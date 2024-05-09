import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth < 780 ? smallHeroVideo : heroVideo
    );

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo);
        } else {
            setVideoSrc(heroVideo);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleVideoSrcSet);

        return () => {
            window.removeEventListener("resize", handleVideoSrcSet);
        };
    }, []);
    useGSAP(() => {
        gsap.to("#hero", {
            opacity: 1,
            delay: 2,
        });
        gsap.to("#cta", {
            opacity: 1,
            y: -60,
            delay: 1.5,
            duration: 1.5,
            stagger: 0.25,
        });
    }, []);
    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">
                    iPhone 15 Pro
                </p>
                <div className="md:w-10/12 w-9/12">
                    <video
                        className="pointer-events-none"
                        autoPlay
                        muted
                        playsInline={true}
                        key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div
                // id="cta"
                className="flex flex-col items-center">
                <a id="cta" href="#highlights" className="btn opacity-0">
                    Buy
                </a>
                <p id="cta" className="font-normal text-xl opacity-0">
                    From $1449 or $65.53/mo. for 24 mo. at 7.99 % APR‡
                </p>
            </div>
        </section>
    );
};

export default Hero;
