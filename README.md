# Cooking Book

Simple cooking application created with React and Symfony.

## Introduction

My friends often complain about me cooking the same dishes everyday. 

So I decided to make a web application allowing the user to input the available ingredients they have in their fridge, and it'll output the corresponding list of recipes.

## Technologies

- PHP 8.0.9
- Symfony 5.3.6
- React 17.0.2
- [Spoonacular API](https://spoonacular.com/food-api)

## Setup

1. Clone this repository
2. Make sure you're positioned at the root of the project
3. Run `composer update` to install Symfony's dependencies
4. Run `yarn upgrade` to install React's dependencies

## Usage

1. Make sure you're positioned at the root of the project
2. Run `symfony server:start` in a terminal
3. Run `yarn encre dev --watch` in a new terminal
4. Go to `localhost:8000` to preview the web application in the browser

## Features

- Get recipes from the ingredients you currently have at home

### Todo:

- Allow looking for a specific recipe
- Allow favouring recipes
- Randomize the output of recipe(s)
- Implement a .pdf system to print the recipes

## Project status

Currently W.I.P. trying to figure out thing.