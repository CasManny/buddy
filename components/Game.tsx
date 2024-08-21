'use client'
import React, { useState } from 'react';
import styles from '@/app/game.module.css'
import { Input } from './ui/input';
import { Button } from './ui/button';

const letters = ['A', 'B', 'C', 'D', 'E'];

const Game: React.FC = () => {
  const [currentLetterIndex, setCurrentLetterIndex] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  const playPronunciation = () => {
    const audio = new Audio(`/audio/${letters[currentLetterIndex]}.mp3`);
    audio.play();
  };

  const checkAnswer = () => {
    if (userInput.toUpperCase() === letters[currentLetterIndex]) {
      setMessage('Correct!');
      setProgress(progress + (100 / letters.length));
      setUserInput('');
      setTimeout(() => {
        setMessage('');
        if (currentLetterIndex < letters.length - 1) {
          setCurrentLetterIndex(currentLetterIndex + 1);
        } else {
          setMessage('You have completed all the letters!');
        }
      }, 1000);
    } else {
      setMessage('Try again!');
    }
  };

  return (
    <div className={styles.gameContainer}>
      <h1 className='text-4xl mb-5'>Letter Recognition Game</h1>
      <div className={styles.letterContainer}>
        <h2 className='font-extrabold text-3xl text-buddy-blue'>Letter {letters[currentLetterIndex]}</h2>
        <button onClick={playPronunciation}>Play Pronunciation</button>
      </div>
      <div className='w-[500px] flex justify-center items-center mx-auto gap-3'>
        <Input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          maxLength={1} 
          className='text-dark-400 border w-[200px]'
        />
        <Button onClick={checkAnswer} className='bg-buddy-blue text-buddy_text'>Check Answer</Button>
      </div>
      <p>{message}</p>
      <div className={styles.progressBar}>
        <div style={{ width: `${progress}%` }} className={styles.progress}></div>
      </div>
    </div>
  );
};

export default Game;
