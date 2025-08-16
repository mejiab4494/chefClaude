import React from "react"
import "../components/main.css"

export function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [inputValue, setInputValue] = React.useState("")

    function addIngredients(e) {
        e.preventDefault()

        if (inputValue.trim() !== "") {
            setIngredients(items => [...items, inputValue.trim()])
            setInputValue("")
        }
    }

    return (
        <main>
            <form className="add-ingredient-form" onSubmit={addIngredients}>
                <input
                    type="text"
                    placeholder="e.g oregano"
                    aria-label="Add ingredient"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Add Ingredient</button>
            </form>
            <div className="ingredients-list">
                <ul>
                {ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </div>
        </main>
    )
}