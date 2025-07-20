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

        const recipeIngredient = document.createElement("p");
        recipeIngredient.innerHTML = `<strong>Ingredients:</strong>${recipe.extendedIngredients.map(
            (ingredient) => ingredient.original).join(", ")
            }`;
            const recipeLink = document.createElement("a");
            recipeLink.href = recipe.sourceUrl;
            recipeLink.innerText = "View Recipe";
            
            recipeItemEl.appendChild(recipeItemImageEl);
            recipeItemEl.appendChild(recipeTitleEl);
            recipeItemEl.appendChild(recipeIngredient);
            recipeItemEl.appendChild(recipeLink);
            recipeUL.appendChild(recipeItemEl);
    });
};

async function getRecipes() {
    const response = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
    );

    const data = await response.json()

    return data.recipes
}

async function init() {
    const recipes = await getRecipes()
    dispalyRecipes(recipes)
}

init()