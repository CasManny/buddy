"use client";
import "regenerator-runtime/runtime";
import { ArrowRight, Mic } from "lucide-react";
import React, { useEffect, useId, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Link from "next/link";
import { Button } from "../ui/button";

const Speak = ({
  word,
  link,
  module,
  number,
}: {
  word: string;
  link: string;
  module: string;
  number: string;
}) => {
  const [input, setInput] = useState("");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn't support speech recognition.</span>;
  // }

  useEffect(() => {
    setInput(transcript);
    console.log(transcript);
  }, [transcript, setInput]);

  const handleVoiceRecording = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  };

  return (
    <div>
      <Button
        className="bg-buddy-blue text-buddy_text p-8"
        onClick={handleVoiceRecording}
      >
        <Mic className="text-gray-400 h-10 w-10" size={22} />
        <p className="text-lg">
          {listening ? "Listening..." : `Speak the Number ${number}`}
        </p>
      </Button>
      {input && (
        <div className="mt-5">
          {input === word ? (
            <div className="">
              <p className="text-buddy-green text-lg my-5">
                You are correct! 👏
              </p>
              <Link href={link}>
                <Button className="bg-buddy-blue text-buddy_text rounded-lg p-8 text-lg">
                  {" "}
                  Move to Module {
                    module
                  } <ArrowRight className="h-6 w-6" />{" "}
                </Button>
              </Link>
            </div>
          ) : (
            <p className="text-buddy-red text-lg">
              You are wrong! Try again 😔
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Speak;
