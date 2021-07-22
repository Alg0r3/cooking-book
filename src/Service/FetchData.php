<?php

namespace App\Service;

use App\Entity\Ingredient;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class FetchData
{
    public function __construct(
        private HttpClientInterface $client,
        private string $apiKey
    ) {}

    public function fetchRecipes(Ingredient $listIngredients): array
    {
        $ingredients = $listIngredients->getIngredients();
        $number = $listIngredients->getNumber();
        $ranking = $listIngredients->getRanking();
        $pantry = $listIngredients->getPantry();
        
        $response = $this->client->request(
            'GET',
            'https://api.spoonacular.com/recipes/findByIngredients?ingredients='.$ingredients.'&number='.$number.'&ranking='.$ranking.'&ignorePantry='.$pantry.'&apiKey='.$this->apiKey
        );

        $content = $response->toArray();

        return $content;
    }
}
