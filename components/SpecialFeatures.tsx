import { buddyFeatures } from '@/constants'
import React from 'react'

const SpecialFeatures = () => {
  return (
    <section className="container py-20">
      <div className="flex flex-col justify-center items-center text-buddy-blue">
        <h1 className='text-4xl font-extrabold mb-2'>Buddy's Features</h1>
        <p>Everything you need to ensure every child succeeds with Buddy by their side</p>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-5">
        {buddyFeatures.map((item, index) => (
          <div className=" bg-buddy_text p-5 rounded-lg text-center">
            <h1 className='font-bold my-2 tracking-wider'>{item.label}</h1>
            <p>{ item.content}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SpecialFeatures