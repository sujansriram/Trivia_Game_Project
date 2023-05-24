import { useEffect, useState } from "react";
import QuestionList from "../components/QuestionList";
import QuestionForm from "../components/QuestionForm";

const QuestionsContainer = () => {

    const [questions, setQuestions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [scoreCounter, setScoreCounter] = useState(0);
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [type, setType] = useState("");

    const fetchQuestions = async () => {
        const response = await fetch(`https://opentdb.com/api.php?amount=15&category=${category}&difficulty=${difficulty}&type=${type}`);
        const jsonData = await response.json();
        setQuestions(jsonData.results);
    }

    const fetchCategories = async () => {
        const response = await fetch(`https://opentdb.com/api_category.php`);
        const jsonData = await response.json();
        setCategories(jsonData.trivia_categories);
    }

    useEffect(() => {
        fetchQuestions();
    }, [category, difficulty, type])

    useEffect(() => {
        fetchCategories();
    }, [])

    const changeScore = (newScore) => {
        setScoreCounter(newScore);
    }

    const handleFilter = (newCategory, newDifficulty, newType) => {
        setCategory(newCategory);
        setDifficulty(newDifficulty);
        setType(newType);
    }

    return ( 
        <>
            <QuestionForm categories={categories} handleFilter={handleFilter}/>
            <QuestionList questions={questions} changeScore={changeScore} scoreCounter={scoreCounter}/>
            <h2>Score: {scoreCounter}/15</h2>
        </>
     );
}
 
export default QuestionsContainer;