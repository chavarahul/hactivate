import Image from 'next/image'
import React from 'react'
import Stem from '@/app/assets/stem.png'
import Rocket from '@/app/assets/rocket.png';

const About = () => {
    return (
        <section className='md:pb-40 pb-20 pt-14' id='about'>
            <div className='flex items-center justify-center py-10'>
                <span className="text-sm  font-medium tracking-tight tag  px-4 py-2 rounded-full">
                    About Us
                </span>
            </div>
            <div className='mx-auto max-w-[950px] md:text-2xl text-lg'>
                <p className='md:leading-[50px] leading-10 text-[#010D3E] md:indent-32 indent-20 max-lg:px-6'>
                Our Website helps traveling doctors efficiently manage patient records in rural areas. It  allows doctors to update and access records 
                    {/* <Image
                        src={Stem}
                        alt='image'
                        className='inline w-20 h-9 mx-2 md:-mt-4'
                    /> */}
                    , and syncs data to the cloud .The system provides visual insights like graphs and trends for quick patient monitoring, saving time and improving decision-making. Designed for areas with limited connectivity, 
                    <span className='text-black/60'>
                        {" "}the Website simplifies record management and improves healthcare delivery.
                        {/* <Image
                            src={Rocket}
                            alt='image'
                            className='inline w-9 h-9 mx-1 -mt-2 md:mt-0'
                        /> */}
                        By focusing on usability and efficiency, it addresses the challenges of rural healthcare and ensures better outcomes for underserved communities.
                    </span>
                </p>
            </div>
        </section>
    )
}

export default About


