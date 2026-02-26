import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)


const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const projectRef1 = useRef(null);
    const projectRef2 = useRef(null);
    const projectRef3 = useRef(null);
    

    
 useGSAP(() => {
const projects = [projectRef1.current, projectRef2.current,projectRef3.current ]



    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);
    return (
        <section id='work' ref={sectionRef} className='app-showcase '>

            <div className="w-full ">
                <div className="showcaselayout">
                    <div className="first-project-wrapper" ref={projectRef1}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Ryde" />
                        </div>
                        <div className="text-content">

                            <h2>  On demand Rides Made simple with a powerful, user-friendly App called ryde.  </h2>
                            <p className="text-white-50 md:text-xl">
                                An app built bla,bla bla ballaklfuvur
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={projectRef2}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Library Management Plartform" />

                            </div>
                            <h2>Library Management Plartform"</h2>
                        </div>

                        <div className="project" ref={projectRef3}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project3.png" alt="Yc Directory -  A startup Shocase App" />

                            </div>
                            <h2>Yc Directory -  A startup Shocase App"</h2>
                        </div>
                    </div>

                </div>
            </div>

        </section >
    )
}

export default ShowcaseSection