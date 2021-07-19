<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class FetchData
{
    public function __construct(
        private HttpClientInterface $client,
        private string $apiKey
    ) {}

    public function fetchRecipes(): array
    {
        $response = $this->client->request(
            'GET',
            'https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar,+chocolate&apiKey='.$this->apiKey
        );

        $content = $response->toArray();

        return $content;
    }
}
