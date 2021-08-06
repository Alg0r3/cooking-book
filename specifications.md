# Cooking Book

## Introduction

As part of a PHP training, it was asked of us to realize a project using mainly the framework Symfony. To mix learning with pleasure, I thought of using some practical ideas I had but never took the time to implement.

For example, my friends often complain about me cooking the same dishes everyday. It made me thought of making a web application allowing the user to input the available ingredients they have in their fridge, and it'll output a list of recipes or a random one. Not a groundbreaking concept, but it's decent enough.

## Restriction

To ensure this project has a fair size, some requirements must be met:
- Connection to a database
- Authentification system
- Roles management
- Implementation of an API
- Mailing system

Bonus requirements:
- PDF document generation
- Unit tests
- Front-end: Bootstrap and Jquery

## Basic Planning

As mentioned earlier, the application's back-end will be made with the Symfony framework. The main goal here is to learn and get better at working with Symfony.

For the database, I'll use MariaDB, a fork of MySQL: faster and more efficient than the latter.

Which data to use for the recipes though ? Well, numerous API are free and available on the internet. I chose the [Spoonacular API](https://spoonacular.com/food-api) because it fits the needs of the application and after some research, it appears to be one of the most popular at the moment.

## Technology

> PHP 8.0.8

> Symfony 5.3.2

> MySQL 15.1 Distrib 10.3.29 - MariaDB

> Node ???

## Coding

### PHASE 1: API Endpoints

[Spoonacular documentation](https://spoonacular.com/food-api/docs)

API often have requests limitation since they are providing services to a vast numbers of users. In this case, Spoonacular has a daily quota system in place for free users so the API calls must be made carefully.

Spoonacular has an endpoint that fits perfectly the needs of the application : finding recipes that use as many of the given ingredients as possible and require as few additional ingredients as possible.

    GET https://api.spoonacular.com/recipes/findByIngredients

Another interesting endpoint to get the informations about multiple recipes at once, this is equivalent to calling the Get Recipe Information endpoint multiple times, but faster.

    GET https://api.spoonacular.com/recipes/informationBulk

This endpoint could be used to randomize the recipe given when inputting the ingredients by setting the `sort` request parameter to `random`.

    GET https://api.spoonacular.com/recipes/complexSearch

Finally, this endpoint can get an analyzed breakdown of a recipe's instructions. Each step is enriched with the ingredients and equipment required. This could be used to generate a PDF document with the instructions for a given recipe. 

    GET https://api.spoonacular.com/recipes/{id}/analyzedInstructions

### PHASE 1.5: Features

From those different endpoints that can be hit, some obvious features can be deduced :
| Feature name | Implementation |
| --- | --- |
| "What's in your fridge ?" | Input ingredients, output recipes |
| "Looking for a specific recipe ?" | Input recipe name, output recipe |
| "Not sure about what to cook ?" | No input, output a random recipes |
| "Don't forget your recipe !" | Return a .pdf file of the selected recipe |

### PHASE 2: User Input

Now, how to let the user input their ingredients ? 

- With a simple HTML `<input type=search>`, then the data will be treated afterwards

> **Pro:** Easy to implement

> **Con:** Need to formate the data

- From a list of ingredients extracted from the database

> **Pro:** Ingredients can be sorted by categories and types

> **Con:** Need to have a huge amount of data in the database

Actual implementation, splitting the differences:
- Spoonacular provides a .csv file containing their 1.000 more popular ingredients, instead of creating a database, a local file can be made by converting the .csv file to the JSON format
- When the user is typing the name of an ingredient, a function will autocomplete/pull out potential ingredients with a similar name
- Upon validating the entry, the ingredient will be add in a "What's in my fridge ?" list on the side to be prepped for the request

The user input data would then be send to the Symfony backend with a POST request, thhat soukj W I P AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

### PHASE 2.5: Frontend ?

After trying to implement some complex JavaScript functions in the Twig templates of Symfony, I decided to chose a more definitive and easily scalable option when it comes to the front-end part of the application: React.js.

Having some experience with that framework and wanting to increase my knowledge about it, the decision was quickly made.

An existing library called Webpack Encore is mandatory to make React.js works with Symfony.

Webpack Encore is a simpler way to integrate Webpack into an application. It wraps Webpack, offering a clean & powerful API for bundling JavaScript modules, pre-processing CSS & JS and compiling and minifying assets.

    composer require symfony/webpack-encore-bundle
    yarn install

W.I.P.

    yarn add axios

W.I.P.

Maker for entities, controllers and such:

    composer require --dev symfony/maker-bundle

The HTTP module of Symfony makes it easier to work with external API:

    composer require symfony/http-client

Twig to temporary render the fetched data:

    composer require "twig/twig:^3.0"
    composer require symfony/twig-bundle

Forms

    composer require symfony/form

W.I.P.

| | **Query database** | **Fetch API** |
| --- | --- | --- |
| **PROS** | | |
| | Retrieving data is faster | Data fetched always up-to-date |
| | Data still accessible if the API is down |  |
| **CONS** | | |
| | Data aren't necesarry up-to-date | Number of requests made to fetch data can scale up really fast |
| | Duplicates data | The API access is restricted |

Should the data fetched from Spoonacular be saved in the database ? A middle ground can be found by caching some of the data.
