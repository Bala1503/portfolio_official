import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear()

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
    <footer className="bg-[#12141e] pt-12">
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make beautiful products?
            </h2>
            <a href="#contact">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                <i class="ri-mail-line"></i>Hire Me
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, itaque in earum quidem aperiam harum.
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me:
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="https://www.linkedin.com/in/bala-subramanian-9b6262252" className="text-gray-300 font-[500] text-[18px]">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="https://www.instagram.com/m_bala_7" className="text-gray-300 font-[500] text-[18px]">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="https://github.com/Bala1503" className="text-gray-300 font-[500] text-[18px]">
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="http://www.skillrack.com/profile/351272/6ea476ad7178ee1d8665cfa5e885a26fbd70d475" className="text-gray-300 font-[500] text-[18px]">
                  <i class="ri-code-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="https://leetcode.com/balasubramanian150304" className="text-gray-300 font-[500] text-[18px]">
                  <i class="ri-brain-line"></i>
                </a>
              </span>
            </div>
          </div>

        </div>
      </div>

      <div>
        <ul className="flex items-center justify-center gap-10 mt-10 flex-wrap">
          <li>
            <a onClick={handleClick} className="text-gray-400 font-[600]" href="#about">
               About
            </a>
          </li>
          <li>
            <a onClick={handleClick} className="text-gray-400 font-[600]" href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={handleClick} className="text-gray-400 font-[600]" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a className="text-gray-400 font-[600]" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a className="text-gray-400 font-[600]" href="https://drive.google.com/file/d/1AVJw8CtX_tA5Ex77ulUlkqmZoGx7H5-d/view?usp=drivesdk">
              CV
            </a>
          </li>
         </ul>
      </div>

      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  B
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">
                    Bala
                  </h2>
                  <p className="text-gray-400 text-[14px] font-[500]">
                    Personal
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-[14px]">
                Copyright {year} developed by Bala - All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer