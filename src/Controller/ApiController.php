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
    #[Route('/data', name: 'data',  methods: 'POST')]
    public function setData(FetchData $data, Request $req): Response
    {
        $arr = $req->toArray();
        
        $ingredients = $arr['ingredients'];
        $number = intval($arr['number']);
        $ranking = intval($arr['ranking']);
        
        $recipes = $data->fetchRecipes($ingredients, $number, $ranking);

        return $this->json($recipes);
    }
}
