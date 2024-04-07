import React from 'react'
import frondendImg from "../../assests/images/front-end.png"
import backendImg from "../../assests/images/backend.png"
import uiImg from "../../assests/images/design.png"
import appsImg from "../../assests/images/apps.png"

const Services = () => {
  return (
    <section id="services">
        <div className="container lg:pt-5">
            <div className="text-center">
                <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                    What do I help
                </h2>
                <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
                I excel in full-stack development, UI/UX design, and MERN stack development, showcasing proficiency and dedication in IT projects. With a solid foundation and a knack for app development, I offer versatile skills to innovate and elevate projects to new heights.
                </p>
            </div>

            <div className="flex flex-col justify-center sm:py-12">
                <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                    <div className="relative text-gray-700 antialiased text-sm font-semibold">
                        {/* vertical line */}
                        <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
                        {/* left card */}

                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row ">

                                <div className="flex justify-start w-full mx-auto items-center ">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos="fade-right" data-aos-duration="1200" className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                                                Frontend Development
                                            </h3>
                                            <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                            Crafting seamless user experiences through dynamic frontend solutions, blending creativity with functionality to captivate audiences.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:-translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={frondendImg} alt="" />
                                    </figure>
                                </div>

                            </div>
                        </div>

                        {/* right card */}

                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row ">

                                <div className="flex justify-end w-full mx-auto items-center ">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos="fade-right" data-aos-delay="50" data-aos-duration="1300" className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                                                Backend Development
                                            </h3>
                                            <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                            Architecting robust backend systems, ensuring data integrity and scalability while powering the core functionality of applications.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:-translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={backendImg} alt="" />
                                    </figure>
                                </div>

                            </div>
                        </div>

                        {/* left card */}

                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row ">

                                <div className="flex justify-start w-full mx-auto items-center ">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1400" className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                                                UI/UX Design
                                            </h3>
                                            <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                            Designing intuitive interfaces that resonate with users, merging aesthetics with usability to elevate engagement and satisfaction.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:-translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={uiImg} alt="" />
                                    </figure>
                                </div>

                            </div>
                        </div>

                        {/* right card */}

                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex items-center flex-col sm:flex-row ">

                                <div className="flex justify-end w-full mx-auto items-center ">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div data-aos="fade-right" data-aos-duration="1500" className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                                                App Development
                                            </h3>
                                            <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7">
                                            Transforming ideas into sleek, user-centric applications, leveraging innovative technologies to deliver immersive digital experiences.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:-translate-y-0 flex items-center justify-center">
                                    <figure>
                                        <img src={appsImg} alt="" />
                                    </figure>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Services