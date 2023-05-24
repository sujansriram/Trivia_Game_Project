import { useState } from "react";
import '../cssFiles/Question.css';

const Question = ({question, changeScore, scoreCounter, questionNumber}) => {

    const [result, setResult] = useState("");
    const [answered, setAnswered] = useState(false);

    const handleClick = (event) => {
        if(!answered){
            const isCorrect = event.target.value === question.correct_answer;
            if(isCorrect){
                let newScore = scoreCounter + 1;
                changeScore(newScore);
                setResult("That is the correct answer!");
            } else {
                setResult(event.target.value + " is incorrect! the correct answer is " + question.correct_answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'"));
            }
        }
        setAnswered(true);
    }

    const options = [...question.incorrect_answers, question.correct_answer];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const optionButtons = shuffleArray(options).map((option) => {
        return <button 
            class="options_button"
            onClick={handleClick} 
            value={option}
            disabled={answered}>{option.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}</button>
    })

    return ( 
        <>
            <div class="question">
                <h3>{`${questionNumber}. ${question.question.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}`}</h3>
                    <div class="options">
                        {optionButtons}
                    </div>
                <p>{result}</p>
            </div>
            
        </>
     );
}
 
export default Question;


