import GradeOneIntroduction from '@/components/dyslexia/GradeOneIntroduction'
import GradeOneSidebar from '@/components/dyslexia/GradeOneSidebar'
import React from 'react'



const GradeOne = () => {
  return (
      <div className='container h-screen flex'>
          <GradeOneSidebar />
          <GradeOneIntroduction />
    </div>
  )
}

export default GradeOne