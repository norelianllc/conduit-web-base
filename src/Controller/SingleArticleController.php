<?php

namespace App\Controller;

use App\Services\HttpClientService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SingleArticleController extends AbstractController
{
    #[Route('/article/{slug}', name: 'single_article')]
    public function index(
        string $slug,
        HttpClientService $httpClientService
    ): Response {
        // dd($httpClientService->getOneArticle($slug));
        return $this->render('single_article/index.html.twig', [
            'article' => $httpClientService->getOneArticle($slug),
        ]);
    }
}