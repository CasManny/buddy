'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Play } from 'lucide-react'
import { handleAudioPlayback } from './Introduction'
import VideoPlayer from '../VideoPlayer'

const GradeOneIntroduction = () => {
  return (
      <div className='container'>
          <div className=" my-5">
              <h1 className='text-3xl text-dark-400 antialiased font-extrabold'>Introduction to Number 1</h1>
          </div>
          <div className="">
              <Image src={'/Dyslexia/Maths/Grade 1/Images/number1.png'} width={100} height={100} alt='number' className='w-56 h-56' />
              <Button className='text-buddy_text mt-2 bg-buddy-blue text-2xl p-8' onClick={() => handleAudioPlayback("Let's learn about the number 1. This is the number 1.")}><Play className='animate-ping' /> play instruction</Button>
              <VideoPlayer videoUrl='/Dyslexia/Maths/Grade 1/Animation /I am number 1_.mp4' link='/needs-we-support/dyslexia/mathematics/grade-two' module='Move to module Two' />
          </div>
    </div>
  )
}

export default GradeOneIntroduction