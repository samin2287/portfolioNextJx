import React from 'react'
import Container from './Container'
import SocialLink from './SocialLink'
import Button from './Button'
import Image from 'next/image'
const Banner = () => {
  return (
   <Container>


    
<div className="grid grid-cols-9 grid-rows-1 gap-4">
    <div className="col-span-4 mt-20">

      <h3 className='font-semibold text-2xl text-gray-500'>Hi I am</h3>
      <h2 className='font-semibold text-3xl text-gray-400 pt-3 pb-5'>Mahmood Fazile</h2>
      <h1 className='text-7xl font-bold text-[#FD6F00]'>UI/UX designer</h1>

    <SocialLink/>

    <div className='flex gap-5 py-5'>
        <Button>Hire Me</Button>
        <Button>Download CV</Button>
    </div>
    <div className='flex gap-4 px-5 py-3 bg-gray-700 rounded-md'>
        <div className=' border-r-2 border-gray-400 pr-5'>

<h2 className='text-3xl font-bold text-[#FD6F00]'>5+</h2>
<p className='text-xl font-semibold text-gray-300'>Experiences</p>

        </div>
        <div className=' border-r-2 border-gray-400 pr-5'>

<h2 className='text-3xl font-bold text-[#FD6F00]'>5+</h2>
<p className='text-xl font-semibold text-gray-300'>Experiences</p>

        </div>
        <div className=' border-r-2 border-gray-400 pr-5'>

<h2 className='text-3xl font-bold text-[#FD6F00]'>5+</h2>
<p className='text-xl font-semibold text-gray-300'>Experiences</p>

        </div>
    </div>
    </div>
    <div className="col-span-5 col-start-5 pt-20">

<div className='border-2 border-amber-600 rounded-full bg-amber-500'><Image src="/person2.png" alt="person" height={600} width={600}/></div>

    </div>
</div>
    


   </Container>
  )
}

export default Banner
