"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With extra frikken?",
      "I'll give you a hug",
      "I'll give you a kiss",
      "I'll give you a bear hug",
      "Fineeee, I'll give you khinkali and kebab",
      "Don't make me beg",
      "Baby, I love you",
      "Look, this button is just for show",
      "I'm not taking no for an answer",
      "I'm not giving up",
      "If you keep clicking this button, I'll keep coming up with new phrases",
      "I'll come to your house and ask you in person",
      "I'll bring you flowers",
      "I'll bring you chocolate",
      "MARISHKO",
      "Tsoupoupou",
      "Agapitakimou",
      "Ok now you're just being mean",
      "Please click yes",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <iframe src='/marishko-valentine/story.html' style={{width: '100%', height: '100%'}}/>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Marishko, will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
