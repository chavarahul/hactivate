import React from 'react'
import Header from '../components/common/header'
import Hero from '../components/hero'
import Footer from '../components/common/footer'
import CallToAction from '../components/call'
import WhyUs from '../components/WhyUs'
import Display from '../components/display'
import About from '../components/about'
import Services from '../components/services'
import Blogs from '../components/blogs'

const Home = () => {
  return (
    <>
      <main className='md:w-3/4 max-md:mx-3 mx-auto border-l border-r'>
        <Header />
        <Hero />
        {/* <Display /> */}
        <About />
        <Services/>
        <WhyUs />
        {/* <Blogs/> */}
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}

export default Home