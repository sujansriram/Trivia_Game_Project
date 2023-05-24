import { useState } from "react";

const QuestionForm = ({categories, handleFilter}) => {

    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedDifficulty, setSelectedDifficulty] = useState("");
    const [selectedType, setSelectedType] = useState("");

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    
    const handleDifficultyChange = (event) => {
        setSelectedDifficulty(event.target.value);
    };
    
    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleFilter(selectedCategory, selectedDifficulty, selectedType);
    }
    
    const categoryOptions = categories.map((category) => {
        return <option key={category.id} value={category.id}>{category.name}</option>
    })

    return ( 
        <>
            <form onSubmit={handleFormSubmit}>
                <h2>Question filter</h2>
                
                <select class="categories" onChange={handleCategoryChange}>
                    <option disabled-value="">Select Category</option>
                    {categoryOptions}
                </select>

                <select class="difficulty" onChange={handleDifficultyChange}>
                    <option disabled-value="">Select Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                <select class="type" onChange={handleTypeChange}>
                    <option disabled-value="">Select Type</option>
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True / False</option>
                </select>

                <button type="submit">Filter</button>

            </form>
        </>
     );
}
 
export default QuestionForm;