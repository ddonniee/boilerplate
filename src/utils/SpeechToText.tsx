"use client";

import "regenerator-runtime/runtime";
import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const useSpeechToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const toggleListening = () => {
    if (browserSupportsSpeechRecognition) {
      if (listening) {
        SpeechRecognitioxn.stopListening();
      } else {
        SpeechRecognition.startListening({
          language: "ko-KR",
          continuous: true,
        });
        resetTranscript();
      }
    } else {
      alert("브라우저가 음성인식을 지원하지 않습니다.");
    }
  };

  return {
    transcript,
    listening,
    toggleListening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  };
};

export default useSpeechToText;