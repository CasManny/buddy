import GradeOneSidebar from '@/components/dyslexia/GradeOneSidebar'
import GradeTwoIntroduction from '@/components/dyslexia/GradeTwoIntroduction'
import React from 'react'

const GradeTwo = () => {
  return (
    <div className='container h-screen flex'>
          <GradeOneSidebar />
          <GradeTwoIntroduction />
    </div>
  )
}

export default GradeTwo