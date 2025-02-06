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
                            Redefining STEM Education
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            At Nodetronics Technology, we empower students and schools to thrive in a tech-driven future through hands-on STEM learning and expert support.                        </p>
                        <ul className="list-disc list-inside space-y-4 text-gray-600">
                            <li>
                                <span className="font-bold text-black">Monetization Opportunities:</span> Schools can generate revenue through yearly fees and additional services.
                            </li>
                            <li>
                                <span className="font-bold text-black">Future-Ready Topics:</span> Courses designed around cutting-edge fields like Robotics, IoT, AI, and Space Exploration.
                            </li>
                            <li>
                                <span className="font-bold text-black">Long-Term Partnerships:</span> Collaborations built on trust, ensuring consistent support and growth.
                            </li>
                            <li>
                                <span className="font-bold text-black">Consultancy Services:</span> Expertise in product development and optimization to maximize learning outcomes.
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
