import React, { useEffect } from "react";

type mentaleFlashCard = { question: string; answer: string }[];
type propsFlashCardMentale = { mentaleFlashCardData: mentaleFlashCard };

const FlashCardMentale = ({
  mentaleFlashCardData,
}: propsFlashCardMentale): JSX.Element => {
  let number = numberAleatoire(0, 2);

  const [click, setclick] = React.useState(true);
  const [randomNumber, setRandomNumber] = React.useState(0);
  const [question, setQuestion] = React.useState(
    mentaleFlashCardData[number].question
  );
  const [response, setResponse] = React.useState(
    mentaleFlashCardData[number].answer
  );
  const [affichage, SetAffichage] = React.useState(question);

  function numberAleatoire(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // const goodQuestion = mentaleFlashCardData[number].question;
  // const goodAnswer = mentaleFlashCardData[number].answer;

  useEffect(() => {
    if (click === false) {
      SetAffichage(response);
    } else {
      SetAffichage(question);

      setRandomNumber(Math.floor(Math.random() * 10));
      setQuestion(mentaleFlashCardData[number].question);
      setResponse(mentaleFlashCardData[number].answer);
    }
  }, [click, mentaleFlashCardData, number, question, response]);

  return (
    <div className="Contour" onClick={() => setclick(!click)}>
      {affichage}
    </div>
  );
};

export default FlashCardMentale;
