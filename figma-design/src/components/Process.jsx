import React from 'react'

const Process = () => {
    return <>
        <div className="process-container px-[7%] my-[10%]">
            <div className="heading flex sm:flex-row flex-col items-center sm:gap-10 gap-7">
                <h2 className="sm:text-[2.7vw] text-[4vw] font-medium bg-[#B9FF66] rounded-sm h-[1%] px-2">Our Working Process </h2>
                <p className="sm:text-[1.3vw] sm:w-[27%] w-[83%] text-[3vw] max-sm:text-center">Step-by-Step Guide to Achieving Your Business Goals</p>
            </div>

            <div className="card-container mt-[7%]">

                <div className="card w-full mb-7 sm:bg-[#B9FF66] bg-[#F3F3F3] sm:px-[5%] pl-[5%] sm:py-[3%] py-[7%]  rounded-[45px] border shadow-[0px_5px_0px_0px_black]">
                    <div className="content flex justify-between items-center w-full font-medium">
                        <div className="text w-[65%] flex items-center gap-5">
                            <h2 className='sm:text-[4.3vw] text-[7vw]'>01</h2>
                            <p className='sm:text-[2.1vw] text-[3vw]'>Consultation</p>
                        </div>

                        <div className="plus-icon">
                            <img className='sm:w-full w-[50%]' src="minus-icon.png" alt="" />
                        </div>
                    </div>

                    <div className="line bg-black mt-5 w-full h-[1px] sm:block hidden"></div>

                    <p className='text-[1.3vw] mt-7 sm:block hidden'>During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.</p>
                </div>



                <div className="card w-full mb-7 bg-[#F3F3F3] flex justify-between items-center gap-5 sm:px-[5%] pl-[5%] sm:py-[3%] py-[7%]  rounded-[45px] border shadow-[0px_5px_0px_0px_black]">
                    <div className="content w-[65%] flex items-center gap-5 font-medium">
                        <h2 className='sm:text-[4.3vw] text-[7vw]'>02</h2>
                        <p className='sm:text-[2.1vw] text-[3vw]'>Research and Strategy Development</p>
                    </div>

                    <div className="plus-icon">
                        <img className='sm:w-full w-[50%]' src="plus-icon.png" alt="" />
                    </div>
                </div>

                <div className="card w-full mb-7 bg-[#F3F3F3] flex justify-between items-center gap-5 sm:px-[5%] pl-[5%] sm:py-[3%] py-[7%]  rounded-[45px] border shadow-[0px_5px_0px_0px_black]">
                    <div className="content w-[65%] flex items-center gap-5 font-medium">
                        <h2 className='sm:text-[4.3vw] text-[7vw]'>03</h2>
                        <p className='sm:text-[2.1vw] text-[3vw]'>Implementation</p>
                    </div>

                    <div className="plus-icon">
                        <img className='sm:w-full w-[50%]' src="plus-icon.png" alt="" />
                    </div>
                </div>

                <div className="card w-full mb-7 bg-[#F3F3F3] flex justify-between items-center gap-5 sm:px-[5%] pl-[5%] sm:py-[3%] py-[7%]  rounded-[45px] border shadow-[0px_5px_0px_0px_black]">
                    <div className="content w-[65%] flex items-center gap-5 font-medium">
                        <h2 className='sm:text-[4.3vw] text-[7vw]'>04</h2>
                        <p className='sm:text-[2.1vw] text-[3vw]'>Monitoring and Optimization</p>
                    </div>

                    <div className="plus-icon">
                        <img className='sm:w-full w-[50%]' src="plus-icon.png" alt="" />
                    </div>
                </div>

                <div className="card w-full mb-7 bg-[#F3F3F3] flex justify-between items-center gap-5 sm:px-[5%] pl-[5%] sm:py-[3%] py-[7%]  rounded-[45px] border shadow-[0px_5px_0px_0px_black]">
                    <div className="content w-[65%] flex items-center gap-5 font-medium">
                        <h2 className='sm:text-[4.3vw] text-[7vw]'>05</h2>
                        <p className='sm:text-[2.1vw] text-[3vw]'>Reporting and Communication</p>
                    </div>

                    <div className="plus-icon">
                        <img className='sm:w-full w-[50%]' src="plus-icon.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="card w-full mb-7 bg-[#F3F3F3] flex justify-between items-center gap-5 sm:px-[5%] pl-[5%] sm:py-[3%] py-[7%]  rounded-[45px] border shadow-[0px_5px_0px_0px_black]">
                <div className="content w-[65%] flex items-center gap-5 font-medium">
                    <h2 className='sm:text-[4.3vw] text-[7vw]'>06</h2>
                    <p className='sm:text-[2.1vw] text-[3vw]'>Continual Improvement</p>
                </div>

                <div className="plus-icon">
                    <img className='sm:w-full w-[50%]' src="plus-icon.png" alt="" />
                </div>
            </div>
        </div>
    </>
}

export default Process