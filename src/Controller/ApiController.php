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
    #[Route('/data', name: 'data')]
    public function setData(FetchData $data, Request $req): Response
    {
        $temp = json_decode($req->getContent(), true);
        
        $ingredient = $temp['ingredients'];
        $number = $temp['number'];
        $ranking = $temp['ranking'];
        
        $recipes = $data->fetchRecipes($ingredient, $number, $ranking);
        
        return $this->render('api/api.html.twig', [
            'recipes' => $recipes
        ]);
    }
}
