import React from 'react'

const Contact = () => {
    return <>
        <div className="contact-container px-[7%] my-[10%]">
            <div className="heading flex md:flex-row flex-col items-center md:gap-10 gap-7">
                <h2 className="md:text-[2.7vw] text-[4vw] font-medium bg-[#B9FF66] rounded-md h-[1%] px-2">Contact Us</h2>
                <p className="md:text-[1.3vw] md:w-[30%] w-[87%] text-[3vw] max-md:text-center">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
            </div>

            <div className="contact-card relative overflow-hidden flex items-center bg-[#F3F3F3] mt-[7%] px-[7%] sm:py-[6%] py-[8%] md:rounded-[45px] rounded-4xl">
                <div className="form md:w-[50%] w-full max-sm:text-sm">
                    <div className="radio-btns flex items-center mb-7">
                        <input className='mr-3 sm:scale-170 scale-150' type="radio" id='say' name='val' />
                        <label className='sm:mr-7 mr-[25%]' htmlFor="say">Say Hi</label>

                        <input className='mr-3 sm:scale-170 scale-150' type="radio" id='get' name='val' />
                        <label htmlFor="get">Get a Quote</label>
                    </div>

                    <div className="fields flex flex-col">
                        <label htmlFor="name">Name*</label>
                        <input className='bg-white border rounded-[14px] px-7 py-3.5 mb-[5%] mt-2' type="text" placeholder='Name' id='name' />

                        <label htmlFor="email">Email*</label>
                        <input className='bg-white border rounded-[14px] px-7 py-3.5 mb-[5%] mt-2' type="email" placeholder='Email' id='email' />

                        <label htmlFor="message">Message*</label>
                        <textarea className='resize-none bg-white rounded-[14px] border px-7 py-3.5 mb-[5%] mt-2 sm:h-[170px] h-28' id="message" placeholder='Message'></textarea>
                    </div>

                    <div className="btn bg-[#191A23] text-white rounded-[14px] md:py-5 py-4 text-center">
                        <button className=''>Send Message</button>
                    </div>
                </div>


                <div className="image absolute md:block hidden right-[-291px] h-[83%]">
                    <img className='w-full h-full' src="contact-img.png" alt="" />
                </div>
            </div>

        </div>
    </>
}

export default Contact
