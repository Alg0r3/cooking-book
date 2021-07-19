<?php

namespace App\Controller;

use App\Service\FetchData;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
    #[Route('/test', name: 'test')]
    public function test(FetchData $data): Response
    {
        $recipes = $data->fetchRecipes();        
        
        return $this->render('test.html.twig', [
            'recipes' => $recipes
        ]);
    }
}