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
                    At Nodetronics Technology, we are inspiring the next generation of innovators with hands-on
                    <Image
                        src={Stem}
                        alt='image'
                        className='inline w-20 h-9 mx-2 md:-mt-4'
                    />
                    education. We’re rethinking how students,
                    <span className='text-black/60'>
                        {" "}from grades 6 to 10, engage with science and technology through immersive experiences. By focusing on exciting fields like Robotics, AI, Drones, IoT, 3D Printing, and Space Exploration
                        <Image
                            src={Rocket}
                            alt='image'
                            className='inline w-9 h-9 mx-1 -mt-2 md:mt-0'
                        />
                        , we make STEM education simple, engaging, and accessible—bringing the future into the classroom...
                    </span>
                </p>
            </div>
        </section>
    )
}

export default About