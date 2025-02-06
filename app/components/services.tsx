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
        title: "STEM Laboratories Setup",
        description:
            "Initial setup of immersive lab environments with dedicated sections for various STEM specializations. Customized curriculum to engage and involve students in skill development.",
        icon: Lab,
    },
    {
        title: "Certified STEM Trainers",
        description: "Trained and dedicated educators to teach students with care.",
        icon: Trainer,
    },
    {
        title: "Consumables and Parts",
        description:
            "Provision and replacement of consumables and damaged parts during the training process.",
        icon: Parcel,
    },
    {
        title: "STEM Expos",
        description:
            "Regular expos to encourage students to showcase their creative ideas and projects.",
        icon: Expo,
    },
    {
        title: "Ecosystem Support",
        description:
            "Facilitating participation in national and international challenges. Connecting students with domain experts for guidance and support.",
        icon: Ecosystem,
    },
    {
        title: "Operational Ownership",
        description:
            "Complete operational ownership and accountability for lab setup, management, maintenance, and upgrades.",
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
