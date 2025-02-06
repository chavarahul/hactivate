import React from "react";
import { IconCloudDemo } from "./common/IconCloud";

const WhyUs = () => {
    return (
        <section className="relative">
            <div className="border-t border-b py-24 max-md:pb-10 border-gray-300 mx-auto">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 items-center gap-12">
                    <div className="text-black">
                        <span className="text-sm text-black/80 px-2 font-medium tracking-tight border p-1 border-black/30 rounded-full">
                            Why Choose Us
                        </span>
                        <h2 className="md:text-4xl text-2xl font-bold my-6 bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                        Revolutionizing Rural Healthcare
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        We empower doctors with seamless, cloud-based patient record management, ensuring efficient and effective healthcare delivery in remote areas.                        </p>
                        <ul className="list-disc list-inside space-y-4 text-gray-600">
                            <li>
                                <span className="font-bold text-black">Real-Time Data Access:</span> Secure cloud storage allows doctors to update and retrieve patient records anytime, anywhere.
                            </li>
                            <li>
                                <span className="font-bold text-black">Smart Analytics:</span> Visual insights like graphs and trends enable better decision-making and patient tracking.
                            </li>
                            <li>
                                <span className="font-bold text-black">Seamless Collaboration:</span>Multiple healthcare professionals can access and update records, ensuring coordinated patient care.
                            </li>
                            <li>
                                <span className="font-bold text-black">Scalable & Reliable</span> Designed for healthcare professionals in low-connectivity areas, ensuring uninterrupted service.
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <IconCloudDemo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
