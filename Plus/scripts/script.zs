println("Is this working?");

import crafttweaker.api.recipe.replacement.Replacer; import crafttweaker.api.ingredient.IIngredient;

Replacer.create().replace<IIngredient>(<recipecomponent:crafttweaker:input/ingredients>, <item:minecraft:chest>, <tag:items:c:wooden_chests>).execute();