<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FridgeController extends AbstractController
{
    #[Route('/fridge', name: 'fridge')]
    public function fridge(): Response
    {
        return $this->render('recipe/form.html.twig');
    }
}
