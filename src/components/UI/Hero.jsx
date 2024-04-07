import React from 'react'
import heroImg from "../../assests/images/myimg3.png"
import CountUp from 'react-countup'

const Hero = () => {

    const handleClick = e =>{
        e.preventDefault()
        const targetAttr = e.target.getAttribute("href")
        const location = document.querySelector(targetAttr).offsetTop
        window.scrollTo({
            top:location-80,
            left:0,
        })
    }

  return (
    <section className="pt-0" id="about">
        <div className="container pt-14">
            <div className="md:flex items-center justify-between sm:flex-col md:flex-row">


                <div className="w-full md:basis-1/2">
                    <h5 data-aos="fade-right" data-aos-duration="1500" className="text-headingColor font-[600] text-[16px]">
                        Hello Welcome
                    </h5>
                    <h1 data-aos="fade-up" data-aos-duration="1500" className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5">
                        I'm Bala Subramanian <br />
                        Software Developer
                    </h1>
                    <div data-aos="fade-up" data-aos-duration="1800" data-aos-delay="200" className="flex items-center gap-6 mt-7">
                        <a href="#contact">
                            <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                                <i class="ri-mail-line"></i>Hire Me
                            </button>
                        </a>
                        <a onClick={handleClick} className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor" href="#portfolio" >
                            See portfolio
                        </a>
                    </div>
                    <p data-aos="fade-down" data-aos-duration="1500" className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10 ">
                        <span>
                            <i class="ri-apps-2-line"></i>
                        </span>
                        Goal-driven student with a passion for technology, seeking a challenging role in computer technologies. Proficient in programming and committed to continuous learning, I aim to contribute to a forward-thinking company, leveraging my skills for mutual growth.
                    </p>
                    <div className="flex items-center gap-9 mt-14">
                        <span data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500" className="text-smallTextColor text-[15px] font-[600]">
                            Follow me:
                        </span>
                        <span data-aos="fade-down" data-aos-duration="1500">
                            <a href="http://www.skillrack.com/profile/351272/6ea476ad7178ee1d8665cfa5e885a26fbd70d475" className="text-smallTextColor text-[18px] font-[600]">
                                <i class="ri-code-line"></i>
                            </a>
                        </span>
                        <span data-aos="fade-up" data-aos-duration="1500">
                            <a href="https://leetcode.com/balasubramanian150304" className="text-smallTextColor text-[18px] font-[600]">
                                <i class="ri-brain-line"></i>
                            </a>
                        </span>
                        <span data-aos="fade-down" data-aos-duration="1500">
                            <a href="https://github.com/Bala1503" className="text-smallTextColor text-[18px] font-[600]">
                                <i class="ri-github-line"></i>
                            </a>
                        </span>
                        <span data-aos="fade-up" data-aos-duration="1500">
                            <a href="https://www.linkedin.com/in/bala-subramanian-9b6262252" className="text-smallTextColor text-[18px] font-[600]">
                                <i class="ri-linkedin-line"></i>
                            </a>
                        </span>
                        <span data-aos="fade-down" data-aos-duration="1500">
                            <a href="https://www.instagram.com/m_bala_7" className="text-smallTextColor text-[18px] font-[600]">
                                <i class="ri-instagram-line"></i>
                            </a>
                        </span>
                    </div>
                </div>

                <div className="basis-1/3 mt-10 sm:mt-0">
                    <figure className="flex items-center justify-center">
                        <img src={heroImg} alt="" />
                    </figure>
                </div>

                <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={2500} duration={2} suffix='+' />
                        </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">
                            Solved in Skillrack
                        </h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={140} duration={2} suffix='+' />
                        </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">
                            Solved in LeetCode
                        </h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={4} duration={2} suffix='+' />
                        </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">
                            Projects Completed
                        </h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={6} duration={2} suffix='+' />
                        </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">
                            Certifications
                        </h4>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero