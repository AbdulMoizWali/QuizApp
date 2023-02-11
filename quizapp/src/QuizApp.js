import { useState } from "react";
import RadioQuestionOption from "./Components/RadioQuesionOption";
import {questions, AllQuestions} from './QuizQuestions'
import './QuizApp.css'


export function QuizApp() {
    const [Question, SetQuestion] = useState(questions);
    const [indexNumber, SetIndexNumber] = useState(0);
    const [marks, SetMarks] = useState(0);
    const [result, SetResult] = useState(false);

    const checkAns = (userSelected, correctAns) => {
        if (userSelected == correctAns) {
            SetMarks(marks + 1);
        }
        if (indexNumber == Question.length - 1) {
            SetResult(true);
        }

        SetIndexNumber(indexNumber + 1);
    }

    return (
        <div>
            {
                result ? (<h1 className="Result"> Your Marks is: {marks}</h1 >) : (
                    <div className="QuestionWrapper">

                        <h1 key={indexNumber}>
                            {Question[indexNumber].question}
                        </h1>
                        <div className="OptionWrapper">
                            {
                                Question[indexNumber].options.map((opt, i) => {
                                    return <button key={i} onClick={() => checkAns(opt, Question[indexNumber].answer)}> {opt}</button>
                                })
                            }
                        </div>
                    </div>

                )
            }
        </div>
    )
}


