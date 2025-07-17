const API_KEY = "275d58779ccf4e22af03e792e8819fff";
const recipeUL = document.querySelector("#recipe-list");

const dispalyRecipes = (recipes) => {
    recipeUL.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        const recipeItemImageEl = document.createElement("img");
        recipeItemImageEl.src = recipe.image;
        recipeItemImageEl.alt = "recipe-image";

        const recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        const recipeIngredient = document.createElement("p")
        recipeIngredient.innerHTML = `<strong>Ingredients:</strong>${recipe.extendIngredients.map((ingredient) =>
            ingredient.original.join(", ")
        )}`

    });
};
