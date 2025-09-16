export default function IngredientsList({ ingredients, getRecipe }) {

     const listItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
             <section>
                    <h2>Ingredients:</h2>
                    <ul className="ingredients-list">{listItems}</ul>

                    {ingredients.length > 3 &&
                         <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={getRecipe}>Get a recipe</button>
                        </div>
                    }
                </section>
    )
}