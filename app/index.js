// Load React and React-DOM modules.
var React = require("react");
var ReactDOM = require("react-dom");

var person = {
	fname: "Louis",
	mname: "Oscar",
	lname: "Hankins"
};


var recipe = {
   name: "Daddy's Pancakes",
   by: "",
   prep: "10 minutes",
   cook: "20 minutes",
   description: "Light fluffy pancakes",
   instructions: "Ipadr klh iraiohga alihga abfeuug",
   ingredients: [{
   	amount: 1.5,
   	unit: "cups",
   	name: "flour"
   },
   {
   	amount: 1,
   	unit: "tablespoon",
   	name: "sugar"
   },
   {
   	amount: 2,
   	unit: "teaspoon",
   	name: "Baking Powder"
   },
   {
   	amount: 0.25,
   	unit: "teaspoon",
   	name: "salt"
   },
   {
   	amount: 1,
   	unit: "",
   	name: "egg"
   },
   {
   	amount: 2,
   	unit: "cups",
   	name: "skim milk"
   }]
};


var Person = React.createClass({
    render: function(){
      return (
        <div>
          <h1>{this.props.fname}</h1>
          <h1>{this.props.mname}</h1>
          <h1>{this.props.lname}</h1>

        </div>
      )
    }
  })

ReactDOM.render(
	<Person fname={person.fname} mname={person.mname} lname={person.lname} />,
	document.getElementById("app")
);

var Recipe = React.createClass({
  render: function(){
  	var ingredientsList = this.props.ingredients.map(function(ingredient, index) {
  		return <Ingredient key={index} ingredientBody={ingredient.amount + " " + ingredient.unit + " of " +   ingredient.name} />
  	});
 
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.prep}</p>
        <p>{this.props.cook}</p>
        <p>{this.props.description}</p>
        <p>{this.props.instructions}</p>

        <h4>Ingredients</h4>
        <p>{this.props.ingredientBody}</p>
        {ingredientsList}

      </div>
    )
  }
})

var Ingredient = React.createClass({
	render: function(){
		return (
		<p>{this.props.ingredientBody}</p>
		)
	}
})

ReactDOM.render(
  <Recipe name={recipe.name} prep={recipe.prep} cook={recipe.cook} description={recipe.description} instructions={recipe.instructions} ingredients={recipe.ingredients}/>,
  document.getElementById("app")
);