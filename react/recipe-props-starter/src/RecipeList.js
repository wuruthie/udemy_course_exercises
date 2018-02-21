import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css';
import PropTypes from 'prop-types';
class RecipeList extends Component {
  static defaultProps = {
    recipes: [{
      title: 'Spaghetti',
      ingredients: ['flour', 'water'],
      instructions: 'Mix ingredients',
      img: 'spaghetti.jpg'
    },
    {
      title: 'Sushi',
      instructions: 'Combine sushi ingredients. Roll until ready',
      ingredients: ['avocado', 'rice', 'vinegar', 'carrot', 'seaweed'],
      img: 'sushi.jpeg'
    },
    {
      title: 'Kimchi',
      instructions: 'Combine ingredients. Put in Kimchi in an earthen pot underground until desired fermentation level',
      ingredients: ['napa cabbage', 'gochujang', 'garlic', 'love'],
      img: 'kimchi.jpeg'
    }
    ]
  }
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }
  render() {
    const recipes = this.props.recipes.map((r, index) => (
      <Recipe key={index}{...r} />
    ));
    return (
      <div>
        {recipes}
      </div>
    );
  }
}

export default RecipeList;