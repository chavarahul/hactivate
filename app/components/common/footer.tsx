import Link from 'next/link';
import SocailX from '@/app/assets/social-x.svg';
import SocialInsta from '@/app/assets/social-insta.svg';
import SocailLinkedin from '@/app/assets/social-linkedin.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10" id="contact">
      <div className="flex flex-col md:flex-row justify-between px-5 md:items-start">
        <div className="md:w-1/2">
          <div className="inline-flex relative ">
            <h2 className='text-white font-bold text-3xl'>SRUSTA</h2>
          </div>
          <nav className="flex flex-col md:flex-row gap-4 mt-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/#about" className="hover:text-white">About</Link>
            <Link href="/#services" className="hover:text-white">Services</Link>
          </nav>
          <div className="flex justify-start gap-6 mt-6">
            <SocailX className="cursor-pointer" />
            <SocailLinkedin className="cursor-pointer" />
            <SocialInsta className="cursor-pointer" />
          </div>
        </div>

        <div className="md:w-1/3 md:text-left mt-8 md:mt-0">
          <p className="mb-4">
            <strong>Address:</strong> Second Floor, Vishnu Nivas, 3rd Cross Street, <br />
            Soundararajan Nagar, Chennai, Tamil Nadu, 600117, India.
          </p>
          <p className="mb-4">
            <strong>Email:</strong> <Link href="mailto:nodetronics@gmail.com" className="hover:text-white">nodetronics@gmail.com</Link>
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> <Link href="tel:+918074775610" className="hover:text-white">+91 8074775610</Link>
          </p>
        </div>
      </div>
      <div className="mt-10 text-center md:text-left px-5">
        © Copyright CoffeeCodes 2025
      </div>
    </footer>
  );
};

export default Footer;
