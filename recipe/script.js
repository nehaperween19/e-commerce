document.addEventListener('DOMContentLoaded', function() {
    const recipeForm = document.getElementById('recipe-form');
    const recipeList = document.getElementById('recipe-list');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    let recipes = [];

    recipeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        const newRecipe = { name, ingredients, instructions };
        recipes.push(newRecipe);

        displayRecipes(recipes, recipeList);
        recipeForm.reset();
    });

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(query) ||
            recipe.ingredients.toLowerCase().includes(query)
        );
        displayRecipes(filteredRecipes, searchResults);
    });

    function displayRecipes(recipes, container) {
        container.innerHTML = '';
        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');

            const recipeName = document.createElement('h3');
            recipeName.textContent = recipe.name;

            const recipeIngredients = document.createElement('p');
            recipeIngredients.textContent = `Ingredients: ${recipe.ingredients}`;

            const recipeInstructions = document.createElement('p');
            recipeInstructions.textContent = `Instructions: ${recipe.instructions}`;

            recipeCard.appendChild(recipeName);
            recipeCard.appendChild(recipeIngredients);
            recipeCard.appendChild(recipeInstructions);

            container.appendChild(recipeCard);
        });
    }
});
