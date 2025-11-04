import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Button from './Button'
const AboutMe = () => {
  return (

    <Container>

<section className='pt-20 pb-20'>
<h2 className="text-6xl text-white font-bold text-center">About Me</h2>
        <p className="text-gray-400 text-center leading-6 py-5">
User Interface and User Experience and Also video editing </p>
<div className='grid grid-cols-2 mt-10'>
<div>
    <Image src="/person2.png" alt="about" height={700} width={700} />
</div>
<div className='pt-12'>
<p className="text-gray-400 text-start leading-8 py-5 pb-6 ">
A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs.In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code. designs.In this digital atelier. </p>

    <Button>Download CV</Button>

</div>
</div>
</section>

    </Container>
    
  )
}

export default AboutMe
