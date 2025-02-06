import React from 'react';
import Image from 'next/image';
import Globe from '@/app/assets/globe.png';
import Student from '@/app/assets/student.png';
import Kids from '@/app/assets/kids.png'

const data = [
  {
    icon: Kids, 
    label: 'For kids',
    value: 'Age 8-16',
  },
  {
    icon: Student,
    label: 'For Grades',
    value: '6-10',
  },
  {
    icon: Globe,
    label: '1000+ reviews',
    value: '4.6/5 on Google & FB',
  },
];

const Display = () => {
  return (
    <section className="flex w-full flex-col sm:flex-row">
      {data.map((item, index) => (
        <div key={index} className=" border flex-1 flex items-center py-5 gap-3 justify-center">
          <div className="flex justify-center mb-2">
            <Image src={item.icon} alt={item.label} width={40} height={40} />
          </div>
          <div className="">
          <p className="text-sm text-gray-500">{item.label}</p>
          <p className="text-lg font-semibold text-black">{item.value}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Display;
