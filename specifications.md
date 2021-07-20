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

## Basic planning

As mentioned earlier, the application's back-end will be made with the Symfony framework. The main goal here is to learn and get better at working with Symfony.

For the database, I'll use MariaDB, a fork of MySQL: faster and more efficient than the latter.

Which data to use for the recipes though ? Well, numerous API are free and available on the internet. I chose the [Spoonacular API](https://spoonacular.com/food-api) because it fits the needs of the application and after some research, it appears to be one of the most popular at the moment.

## Technology

> PHP 8.0.8

> Symfony 5.3.2

> MySQL 15.1 Distrib 10.3.29 - MariaDB

## Coding

### PHASE 1: Fetch data

The HTTP module of Symfony makes it easier to work with external API:

    composer require symfony/http-client

Twig to temporary render the fetched data:

    composer require "twig/twig:^3.0"
    composer require symfony/twig-bundle

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
