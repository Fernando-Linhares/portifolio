<?php
namespace Http;

trait BaseController
{
    protected function render($view,$datatarget=null) 
    {
       $page = $view;
       $data = $datatarget;
       require '../views/layout.php';
    }

    protected function redirect(string $to)
    {
        header("location:{$to}");
    }
}