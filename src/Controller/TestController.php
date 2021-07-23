<?php

namespace App\Controller;

use App\Entity\Ingredient;
use App\Form\IngredientType;
use App\Service\FetchData;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/test', name: 'test_')]
class TestController extends AbstractController
{
    #[Route('/form', name: 'form')]
    public function formIngredients(FetchData $data, Request $req): Response
    {
        $listIngredients = new Ingredient();

        $form = $this->createForm(IngredientType::class, $listIngredients);
        $form->handleRequest($req);
        if ($form->isSubmitted() && $form->isValid()) {
            $listIngredients = $form->getData();
            $recipes = $data->fetchRecipes($listIngredients);    

            return $this->render('test/test.html.twig', [
                'recipes' => $recipes,
                'form' => $form->createView()    
            ]);
        }

        return $this->render('test/test.html.twig', [
            'form' => $form->createView()
        ]);
    }
}
