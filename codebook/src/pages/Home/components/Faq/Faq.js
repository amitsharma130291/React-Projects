import React from 'react'
import { FAQContainer } from './Faq.style.js'
import Question from "./Question/Question"

function Faq() {
  const qa = [
    {
      id: 1,
      question: "Why should I use CodeBook ?",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse! Magni praesentium delectus excepturi nostrum illo repellendus cum eius neque, aperiam dolores quaerat quis dolore magnam doloremque minus sint nemo qui necessitatibus at. Perspiciatis, corrupti cum labore quos odio porro!"
    },{
      id: 2,
      question: "Can I access my eBook on moblie?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusamus nobis tempore perferendis qui, quam, atque reprehenderit vero quaerat, assumenda pariatur eveniet. Maxime eaque, neque corrupti ad minus repudiandae consectetur!"
    },
    {
      id: 3,
      question: "Do you offer refunds?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
    },
    {
      id: 4,
      question: "Do you support international payments?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi."
    }
  ]

  return (
    <FAQContainer> 
        <h1>Questions in mind?</h1>
        {
          qa.map((qaObj)=>(
            <Question key = { qaObj.id } questionTxt = { qaObj.question } answerTxt = { qaObj.answer } />
          ))
        }
       
    </FAQContainer>
  )
}

export default Faq


