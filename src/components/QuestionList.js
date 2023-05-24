import Question from "./Question";

const QuestionList = ({questions, changeScore, scoreCounter}) => {

    const questionComponents = questions.map((question, index) => {
        return <Question 
            key={index} 
            question={question} 
            changeScore={changeScore} 
            scoreCounter={scoreCounter}
            questionNumber={index + 1}/>
    });

    return ( 
        <>
            {questionComponents}
        </>
     );
}
 
export default QuestionList;