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

    public function fetchRecipes(array $ingredients, int $number, int $ranking): array
    {   
        $response = $this->client->request(
            'GET',
            'https://api.spoonacular.com/recipes/findByIngredients?ingredients='.implode(',', $ingredients).'&number='.$number.'&ranking='.$ranking.'&ignorePantry=true&apiKey='.$this->apiKey
        );

        $content = $response->toArray();

        return $content;
    }
}
