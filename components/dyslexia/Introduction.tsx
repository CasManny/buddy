"use client"
import 'regenerator-runtime/runtime';
import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export const handleAudioPlayback = (words: string) => {
    const utterance = new SpeechSynthesisUtterance(words)
    window.speechSynthesis.speak(utterance)
}
const Introduction = () => {
   
    useEffect(() => {
        handleAudioPlayback("We are learning the letters A, B, C, D, E")
    }, [])
  return (
      <div className='p-10'>
          <h1 className='text-3xl text-center'>Phonetic Lession: Letters A to E</h1>
    </div>
  )
}

export default Introduction