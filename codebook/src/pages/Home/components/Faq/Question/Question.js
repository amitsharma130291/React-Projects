import { useState } from "react";
import styled from "styled-components";

const Question = ({ questionTxt, answerTxt }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <QAContainer>
      <QuestionContainer onClick={() => setShowAnswer(!showAnswer)}>
        <p>{questionTxt}</p>
        { showAnswer ? (
             <svg
             xmlns="http://www.w3.org/2000/svg"
             fill="none"
             viewBox="0 0 24 24"
             strokeWidth={1.5}
             stroke="currentColor"
             className="question-svg"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M4.5 15.75l7.5-7.5 7.5 7.5"
             />
           </svg>
        ) : 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="question-svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
        }       
      </QuestionContainer>
      {showAnswer && <AnswerContainer>{answerTxt}</AnswerContainer>}
    </QAContainer>
  );
};

export default Question;

const QAContainer = styled.div`
  margin: 1rem auto;
`;

const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid lightgray;
  font-size: 1.1rem;

  &:hover {
    cursor: pointer;
  }

  .question-svg {
    width: 20px;
  }
`;

const AnswerContainer = styled.div`
  padding: 20px 0;
  color: rgb(107 114 128);
  border-bottom: 1px solid lightgray;
  font-size: 1.1rem;
`;
