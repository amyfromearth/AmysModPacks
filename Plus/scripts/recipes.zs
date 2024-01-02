//tutorial
println("Is this working?");

//Replace vanilla item chest with any wooden chest variant by tag
import crafttweaker.api.recipe.replacement.Replacer; import crafttweaker.api.ingredient.IIngredient;
Replacer.create().replace<IIngredient>(<recipecomponent:crafttweaker:input/ingredients>, <item:minecraft:chest>, <tag:items:c:wooden_chests>).execute();

//Remove backpack recipe and add new recipe with overworld items
craftingTable.removeByName("umu_backpack:backpack");
craftingTable.addShaped("backpack", <item:umu_backpack:backpack>, [
	[<item:farmersdelight:rope>, <item:create:brass_nugget>, <item:farmersdelight:rope>], 
	[<tag:items:minecraft:wool>, <item:minecraft:bundle>, <tag:items:minecraft:wool>], 
	[<item:minecraft:leather>, <item:minecraft:leather>, <item:minecraft:leather>]
]);

