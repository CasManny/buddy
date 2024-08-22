import Link from 'next/link'
import React from 'react'

const modules = [
    {
        chapter: "Introduction",
        link: "/needs-we-support/hearing-impairment/"
    },
    {
        chapter: "Module One",
        link: "/needs-we-support/hearing-impairment/module-one"
    },
    {
        chapter: "Module Two",
        link: "/needs-we-support/hearing-impairment/module-two"
    },
    {
        chapter: "Module Three",
        link: "/needs-we-support/hearing-impairment/module-three"
    },
   
]

const HearingImpairmentSidebar = () => {
  return (
      <div className='w-72 flex flex-col gap-5 p-10 border-r h-full'>
          {modules.map((module) => (
              <Link href={module.link} className='text-2xl hover:bg-buddy-blue rounded-lg p-5 hover:text-buddy_text'>
                  {module.chapter}
              </Link>
          ))}
    </div>
  )
}

export default HearingImpairmentSidebar