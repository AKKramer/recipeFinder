/* Gluten Free
Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).

Ketogenic
The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not.

Vegetarian
No ingredients may contain meat or meat by-products, such as bones or gelatin.

Lacto-Vegetarian
All ingredients must be vegetarian and none of the ingredients can be or contain egg.

Ovo-Vegetarian
All ingredients must be vegetarian and none of the ingredients can be or contain dairy.

Vegan
No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.

Pescetarian
Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.

Paleo
Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.

Primal
Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.

Whole30
Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.

*/
/*https://api.spoonacular.com/recipes/" + recipeID +"/information?includeNutrition=false&apiKey=2b49753a505a43fe8dbfb610bb43e250

https://api.spoonacular.com/recipes/search?query=cheese&number=2&diet=vegetarian&exlcudeIngredients=eggs&intolerances=gluten&apiKey=0dcf6018121d4ae3ab90ebb53ead0081 
*/

var intolerances = ['dairy','egg','gluten','grain','peanut','seafood','sesame','shellfish','soy','sulfite','tree','nut','wheat']

var dietrestrictions = ['glutenfree','ketogenic','vegetarian','lacto-vegetarian','ovo-vegetarian','vegan','pescetarian','paleo','primal','whole30']



