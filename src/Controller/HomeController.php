<?php

namespace App\Controller;

use App\Services\HttpClientService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(HttpClientService $HttpClientService): Response
    {
        // dd($HttpClientService->getAll());
        return $this->render('home/index.html.twig', [
            'articles' => $HttpClientService->getAll(),
        ]);
    }
}