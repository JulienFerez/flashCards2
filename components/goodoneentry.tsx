import React, { useEffect } from "react";

type mentaleFlashCard = { question: string; answer: string }[];
type propsFlashCardMentale = { mentaleFlashCardData: mentaleFlashCard };

const FlashCardOneEntry = ({
  mentaleFlashCardData,
}: propsFlashCardMentale): JSX.Element => {
  function numberAleatoire(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let number = numberAleatoire(0, 2);
  console.log("nombre aleatoire", number);
  const [click, setclick] = React.useState(true);

  const [randomNumber, setRandomNumber] = React.useState(0);
  const [question, setQuestion] = React.useState(
    mentaleFlashCardData[randomNumber].question
  );
  const [affichage, SetAffichage] = React.useState(question);
  const [show, setShow] = React.useState(true);
  const [input, setInput] = React.useState("");

  const [reponseFinal, setReponseFinal] = React.useState("");

  const [cssReponse, setcssResponse] = React.useState("red-text-class");

  const [response, setResponse] = React.useState(
    mentaleFlashCardData[randomNumber].answer
  );

  console.log("input", input);
  // setRandomNumber(Math.floor(Math.random() * 10));
  // setQuestion(mentaleFlashCardData[number].question);
  // setResponse(mentaleFlashCardData[number].answer);

  useEffect(() => {
    if (click === false) {
      SetAffichage(response);
      setShow(false);
      if (input === response) {
        setReponseFinal("Bonne réponse");
        setcssResponse("green-text-class");
      } else {
        setReponseFinal("Mauvaise réponse");
        setcssResponse("red-text-class");
      }
    } else {
      SetAffichage(question);
      setShow(true);
    }
  }, [click, input, mentaleFlashCardData, question, response]);

  if (show === true) {
    return (
      <div className="Contour">
        {affichage}
        <hr />
        <input
          type="text"
          onChange={(event) => setInput(event.target.value)}
        ></input>
        <br />
        <br />
        <br />
        <button type="submit" onClick={() => setclick(!click)}>
          Submit
        </button>
      </div>
    );
  } else {
    return (
      <div
        className={cssReponse}
        onClick={() => {
          setclick(!click);
        }}
      >
        {reponseFinal}

        <br />
        <br />
        <br />
        <button
          onClick={() => {
            setQuestion(mentaleFlashCardData[randomNumber].question),
              setResponse(mentaleFlashCardData[randomNumber].answer),
              setRandomNumber(numberAleatoire(0, 2));
          }}
        >
          {" "}
          Question Suivante
        </button>
      </div>
    );
  }
};

export default FlashCardOneEntry;
