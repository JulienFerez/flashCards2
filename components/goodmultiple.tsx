import React, { useEffect } from "react";

type mentaleFlashCard = {
  question: string;
  answer: string;
  answerTwo: string;
  answerThree: string;
}[];
type propsFlashCardMentale = { mentaleFlashCardData: mentaleFlashCard };

// random number management

function numberAleatoire(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let number = numberAleatoire(0, 2);
// console.log("nombre aleatoire", number);

const FlashCardResponseMultiple = ({
  mentaleFlashCardData,
}: propsFlashCardMentale): JSX.Element => {
  const [click, setclick] = React.useState(false);
  const [randomNumber, setRandomNumber] = React.useState(0);
  const [question, setQuestion] = React.useState(
    mentaleFlashCardData[randomNumber].question
  );
  // const [response, setResponse] = React.useState(){}
  const [response, setResponse] = React.useState([
    mentaleFlashCardData[randomNumber].answer,
    mentaleFlashCardData[randomNumber].answerTwo,
    mentaleFlashCardData[randomNumber].answerThree,
  ]);
  // const [responseTwo, setResponseOneTwo] = React.useState(
  //   mentaleFlashCardData[randomNumber].answerTwo
  // );
  // const [responseThree, setResponseThree] = React.useState(
  //   mentaleFlashCardData[randomNumber].answerThree
  // );
  const [affichage, SetAffichage] = React.useState(question);
  const [show, setShow] = React.useState(true);
  const [cssReponse, setcssResponse] = React.useState("red-text-class");
  const [input, setInput] = React.useState("");
  const [reponseFinal, setReponseFinal] = React.useState("");
  console.log("lineinput", input);

  useEffect(() => {
    if (input === "ResponseA") {
      setReponseFinal("Bonne réponse");
      setcssResponse("green-text-class");
    } else {
      setReponseFinal("Mauvaise réponse");
      setcssResponse("red-text-class");
    }
  }, [affichage, click, mentaleFlashCardData, number, question]);
  if (show === true) {
    return (
      <div className="Contour">
        {question}
        <hr />
        <form>
          <br />
          {response.map((element) => {
            return (
              <div>
                <input
                  type="checkbox"
                  onChange={(event) => setInput(`${element}`)}
                />
                <label className="form-check-label">{element}</label>
              </div>
            );
          })}
          <br />
          <br />
          <br />
          <br />

          <button type="submit" onClick={() => setShow(false)}>
            Submit
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div
        className={cssReponse}
        onClick={() => {
          setQuestion(mentaleFlashCardData[randomNumber].question);
          setResponse([
            mentaleFlashCardData[randomNumber].answer,
            mentaleFlashCardData[randomNumber].answerTwo,
            mentaleFlashCardData[randomNumber].answerThree,
          ]);
          setRandomNumber(numberAleatoire(0, 2));
          setShow(true);
        }}
      >
        {reponseFinal}
      </div>
    );
  }
};

export default FlashCardResponseMultiple;
