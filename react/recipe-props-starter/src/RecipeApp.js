import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeApp.css';
import RecipeList from './RecipeList';
import NavBar from './NavBar';
class RecipeApp extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
