import EnglishSidebar from '@/components/hearing-impairment/EnglishSidebar'
import HearingImpairmentTest from '@/components/hearing-impairment/HearingImpairmentTest'
import React from 'react'

const GradeOneEnglish = () => {
  return (
    <div className='container flex h-screen'>
      <EnglishSidebar />
      <HearingImpairmentTest />
    </div>
  )
}

export default GradeOneEnglish