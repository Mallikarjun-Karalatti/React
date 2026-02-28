import { useState } from "react";

export default function Main() {
    const [ingredients, setIngredients] = useState([]);

    const ingredientsListItems = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ));

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
        console.log(ingredients);
    }

    function RecipeContainer() {
        return <></>;
    }

    return (
        <main>
            <form action={addIngredient}>
                <input
                    id="inputIngredient"
                    type="text"
                    placeholder="e.g. oregano"
                    name="ingredient"
                    aria-label="Add ingredient"
                />
                <button id="addIngrdntBtn" name="add-ingredient-btn">
                    Add ingredient
                </button>
            </form>

            {ingredients.length > 0 && (
                <section id="recipe-container">
                    <h2>Ingredients on hand: </h2>
                    <ul className="ingredient-list">{ingredientsListItems}</ul>
                    {ingredients.length > 3 && (
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients</p>
                            </div>
                            <button>Get a recipe</button>
                        </div>
                    )}
                </section>
            )}
        </main>
    );
}
