<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/test', name: 'test_')]
class TestController extends AbstractController
{
    #[Route('/form', name: 'form')]
    public function formIngredients(): Response
    {
        return $this->render('test/test.html.twig');
    }
}
