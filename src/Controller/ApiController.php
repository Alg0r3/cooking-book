<?php

namespace App\Controller;

use App\Service\FetchData;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api', name: 'api_')]
class ApiController extends AbstractController
{
    #[Route('/recipes', name: 'recipes',  methods: 'POST')]
    public function getRecipes(FetchData $data, Request $req): Response
    {
        $arr = $req->toArray();
        
        $ingredients = $arr['ingredients'];
        $number = intval($arr['number']);
        $ranking = intval($arr['ranking']);
        
        $recipes = $data->fetchRecipes($ingredients, $number, $ranking);

        return $this->json($recipes);
    }
}
