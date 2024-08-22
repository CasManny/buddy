import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import VideoPlayer from '@/components/VideoPlayer'
import React from 'react'

const ModuleTwo = () => {
  return (
      <div className='container'>
          <div className="py-10">
              <h1 className='text-center font-extrabold text-2xl'>Identification of Number</h1>
          </div>
          <VideoPlayer videoUrl={'/Dyslexia/Maths/Grade 1/Animation /I am number 1_.mp4'} link='/needs-we-support/dyslexia/module-three' />
          <div className="flex gap-4 mt-5 justify-center items-center">
              <Input placeholder='Enter the number you see above' className='w-[500px] text-dark-400 placeholder:text-dark-400 placeholder:text-lg p-5' />
              <Button className='bg-buddy-green text-buddy_text'>
                  check Answer
              </Button>
          </div>
    </div>
  )
}

export default ModuleTwo