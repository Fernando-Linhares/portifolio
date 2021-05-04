<?php
namespace Main;

class Kernel
{
    public static function start(object $router)
    {
        $router->executeHandler();
    }
}