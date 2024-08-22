'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import VideoPlayer from '../VideoPlayer'
import { handleAudioPlayback } from './Introduction'
import { Play } from 'lucide-react'

const GradeTwoIntroduction = () => {
  return (
    <div className='container'>
          <div className=" my-5">
              <h1 className='text-3xl text-dark-400 antialiased font-extrabold'>Introduction to Number 2</h1>
          </div>
          <div className="">
              <Image src={'/Dyslexia/Maths/Grade 1/Images/2.png'} width={100} height={100} alt='number' className='w-56 h-56' />
              <Button className='text-buddy_text mt-2 bg-buddy-blue text-2xl p-8' onClick={() => handleAudioPlayback("Let's learn about the number 2. This is the number 2.")}><Play className='animate-ping' /> play instruction</Button>
              <VideoPlayer videoUrl='/Dyslexia/Maths/Grade 1/Animation /I am number 2.mp4' link='/needs-we-support/dyslexia/mathematics/grade-two' module='Move to module Three' />
          </div>
    </div>
  )
}

export default GradeTwoIntroduction