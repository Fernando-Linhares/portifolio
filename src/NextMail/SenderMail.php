<?php
namespace NextMail;

use \PHPMailer\PHPMailer\PHPMailer;

class SenderMail
{

    private MailContent $manager;
    private string $msg;
    private string $to;
    private string $title;

    public function __construct()
    {
        $this->manager = new MailContent(
            new Transfer,
            new PHPMailer
        );
    }

    public static function send(string $msg, string $to, string $title)
    {
        $sender = new self;
        $sender->to = $to;
        $sender->msg = $msg;
        $sender->title = $title;
        return $sender;
    }

    public function commit()
    {
        return $this->manager->sendMail(
            to: $this->to,
            title: $this->title,
            text: $this->msg
        );
    }

    public function __set($name, $value)
    {
        $this->$name = $value;
    }
}