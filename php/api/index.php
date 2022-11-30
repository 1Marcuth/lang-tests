<?php

require __DIR__ . "/vendor/autoload.php";

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

$app = AppFactory::create();

$app->get("/", function(Request $req, Response $res, $args) {
    $res->getBody()->write("Hello World!");

    return $res;
});

$app->run();

?>