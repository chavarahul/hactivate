import React from "react";
import Lab from '@/app/assets/lab.png'
import Ecosystem from '@/app/assets/ecosystem.png';
import Trainer from '@/app/assets/teaching.png';
import Expo from '@/app/assets/expo.png';
import Parcel from '@/app/assets/parcel.png';
import Owner from '@/app/assets/owner.png';
import Image from "next/image";

const services = [
    {
        title: "Visual Insights for Better Monitoring",
        description:
            "Get visual graphs and trends to quickly analyze patient health, reducing the need to review every report manually.",
        icon: Lab,
    },
    {
        title: "Sync Data When Online",
        description: " All records automatically sync to the cloud when internet connectivity is available, keeping data up-to-date.",
        icon: Trainer,
    },
    {
        title: "Manage Patient Records Offline",
        description:
            "Our app allows doctors to securely manage patient records even without internet access, ensuring seamless workflow.",
        icon: Parcel,
    },
    {
        title: "Multiple Languages",
        description:
            "We offer our services in multiple languages to ensure clear communication and a seamless experience. You can choose from Hindi, English, Odia, and Telugu...",
        icon: Expo,
    },
    {
        title: "Designed for Low-Connectivity Areas",
        description:
            "Optimized for rural healthcare settings where internet access is limited, ensuring reliable performance even in remote locations.",
        icon: Ecosystem,
    },
    {
        title: "Time-Saving Data Management",
        description:
            "Simplifies patient record-keeping with an intuitive interface, reducing paperwork and allowing doctors to focus on patient care.",
        icon: Owner,
    },
];

const Services = () => {
    return (
        <section className="relative" id="services">
            <div className="border text-center">
                <h3 className="md:text-4xl text-2xl font-bold my-6 bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                    Services
                </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-6 border"
                    >
                        <Image
                            src={service.icon}
                            alt={`${service.title} Icon`}
                            className="w-12 h-12 mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2 text-center text-black">
                            {service.title}
                        </h3>
                        <p className="text-center text-black/80">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
