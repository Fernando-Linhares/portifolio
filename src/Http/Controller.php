<?php
namespace Http;

use Contracts\BlogInterface;
use NextMail\SenderMail;

class Controller implements BlogInterface
{
    use BaseController;

    public function index(): void
    {
        $this->render('home');
    }

    public function sendmail(): void
    {
        $email = filter_input(INPUT_POST,'email',FILTER_SANITIZE_EMAIL);
        $name = filter_input(INPUT_POST,'name',FILTER_SANITIZE_EMAIL);
        $date = date('d/m/Y');

        SenderMail::send(
            to:"daredavilrusso@gmail.com",
            title:"Cliente com interesse",
            msg:"cliente de email: ($email) e nome: ($name) interessado no serviso data ($date) ."
            )
        ->commit();
        
        $this->render('sendedemail');
    }
}