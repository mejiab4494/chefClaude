import React from "react"
import ClaudeRecipe from "./claudeRecipe"
import IngredientsList from "./ingredientsList"
import { getRecipeFromMistral } from "./ai"
import "../components/main.css"

export function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [inputValue, setInputValue] = React.useState("")

    const [recipe, setRecipe] = React.useState("");

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    }


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
            {ingredients.length > 0 && 
            <IngredientsList
            ingredients={ingredients}
            getRecipe={getRecipe}
            />}

                {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}