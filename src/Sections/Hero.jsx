import Button from "../Components/Button"
import HeroExperience from "../Components/HeroModels/HeroExperience"
import { words } from "../constants"

const Hero = () => {
    return (
        <section id="hero" className='relative overflow-hidden'>
            <div className='absolute top-0 left-0 z-10'>
                <img src="/images/bg.png" alt="background" />
            </div>
            <div className="hero-layout">
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Shaping <span className="slide"><span className="wrapper">
                                {words.map((word) => (
                                    <span key={word.text} className="flex items-center gap-1 md:gap-3 pb-2">
                                        <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50 " />
                                        {word.text}
                                    </span>
                                ))}
                            </span></span></h1>
                            <h1>into Real Project</h1>
                            <h1>that Deliver Results</h1>
                            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none ">Hi, I'm Kayode ,a developer based in Nigeria with a  passion for code.</p>
                            <Button className="md:w-80 md:h-16 w-60 h-12"
                                id="button"
                                text="See my Work" />
                        </div>
                    </div>
                </header>

                <figure >
                    <div className="hero-3d-layout border-red-200 border-2 ">
<HeroExperience/>
                    </div>
                </figure>
            </div>
        </section>
    )
}

export default Hero