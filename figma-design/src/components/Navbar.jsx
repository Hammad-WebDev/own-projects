import React from 'react'

const Navbar = () => {
    return <>
        <div className="nav-container flex justify-between items-center md:mt-[60px] mt-5 px-[7%]">
            <div className="logo w-[20%] min-w-[150px]">
                <img src='/Logo.png' alt="LOGO" />
            </div>

            <div className="list flex xl:gap-10 gap-7 items-center md:text-[1.3vw] text-[1.5vw]">
                <div className="hamburger md:hidden block">
                    <img src="bar.png" width={30} alt="" />
                </div>

                <ul className='md:flex xl:gap-10 gap-7 list-none hidden'>
                    <li>About us</li>
                    <li>Services</li>
                    <li>Use Cases</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>

                <div className="btn xl:px-10 xl:py-5 px-8 py-4 border rounded-[14px] md:block hidden">
                    <button>Request a quote</button>
                </div>
            </div>
        </div>
    </>
}

export default Navbar