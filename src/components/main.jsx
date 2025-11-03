import React, { useEffect } from "react"
import ClaudeRecipe from "./claudeRecipe"
import IngredientsList from "./ingredientsList"
import { getRecipeFromMistral } from "./ai"
import chefClaudeImg from "../images/chefClaude.png"

export function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const [inputValue, setInputValue] = React.useState("")

    const [recipe, setRecipe] = React.useState("");
    const recipeSectionRef = React.useRef(null);

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);
    }

     React.useEffect(() => {
        if (recipeSectionRef.current && recipe !== null) {
        recipeSectionRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [recipe])


    function addIngredients(e) {
        e.preventDefault()

        if (inputValue.trim() !== "") {
            setIngredients(items => [...items, inputValue.trim()])
            setInputValue("")
        }
    }

    function clearBtn() {
        setIngredients([])
        setRecipe("")
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
                <button onClick={clearBtn}>Clear</button>
            </form>

            {ingredients.length === 0 && (
                <div className="chefClaude">
                    <img src={chefClaudeImg} alt="chefClaude" />
                </div>
            )}
            {ingredients.length > 0 && 
                <IngredientsList
                    ref={recipeSectionRef}
                    ingredients={ingredients}
                    getRecipe={getRecipe}
            />}

                {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}