import { forwardRef } from "react";

const IngredientsList = forwardRef(({ ingredients, getRecipe }, recipeSectionRef) => {
    return (
        <section>
            <h2>Ingredients:</h2>
            <ul className="ingredients-list">
                {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
            </ul>

            {ingredients.length > 3 && (
                <div className="get-recipe-container">
                    <div ref={recipeSectionRef}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={getRecipe}>Get a recipe</button>
                </div>
            )}
        </section>
    );
});

export default IngredientsList;