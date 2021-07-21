<?php

namespace App\Controller;

use App\Entity\Ingredient;
use App\Form\IngredientType;
use App\Service\FetchData;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/test', name: 'test_')]
class TestController extends AbstractController
{
    #[Route('/api', name: 'api')]
    public function fetchApi(FetchData $data): Response
    {
        $recipes = $data->fetchRecipes();        
        
        return $this->render('test.html.twig', [
            'recipes' => $recipes
        ]);
    }

    #[Route('/form', name: 'form')]
    public function formIngredients(): Response
    {
        $listIngredients = new Ingredient();

        $form = $this->createForm(IngredientType::class, $listIngredients);

        return $this->render('test.html.twig', [
            'form' => $form->createView()
        ]);
    }
}
