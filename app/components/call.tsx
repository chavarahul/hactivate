import React from 'react';
import Arrow from '@/app/assets/arrow-right.svg';
import Link from 'next/link';
import Image from 'next/image';
import Car from '@/app/assets/car.png'

const CallToAction = () => {
    return (
        <section className="py-24 overflow-x-clip relative" aria-labelledby="cta-heading">
            <div className="px-5">
                <div className="max-w-[600px] text-center mx-auto relative">
                    <h2 id="cta-heading" className="md:text-4xl text-2xl font-bold my-6 bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                        Empower the Future of STEM Education
                        {/* <Image
                            src={Robo}
                            alt='Image'
                            className='inline w-10 h-10 ml-2 -mt-4'
                        /> */}
                    </h2>

                    <p className="section-description mt-5">
                        Discover innovative STEM labs, hands-on training kits, and expert guidance to inspire the next generation of creators and problem-solvers.
                    </p>
                </div>

                <div className="flex gap-2 mt-10 justify-center">
                    <Link
                        rel="noopener noreferrer"
                        href={"https://wa.me/+9178074775610?text=Hi,%20I%20am%20interested%20in%20booking%20a%20free%20trial%20for%20STEM%20labs!"}
                        className="btn btn-primary" aria-label="Get started with STEM labs now"
                        target='_blank'
                    >
                        Book a free trail
                    </Link>
                    <Link href={"/"}
                        className="btn btn-text flex gap-2 items-center"
                        aria-label="Learn more about our STEM solutions"
                    >
                        <span>Learn More</span>
                        <Arrow className="w-5 h-5" />
                    </Link>
                </div>
            </div>
            <div className='absolute -bottom-1 left-0 animate-car w-full' >
                <Image
                    src={Car}
                    alt='car'
                    className='w-10 h-10'
                />
            </div>
        </section>
    );
};

export default CallToAction;
