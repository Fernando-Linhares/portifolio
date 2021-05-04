<?php
namespace NextMail;

use PHPMailer\PHPMailer\PHPMailer;

class MailContent
{
    public function __construct(
        private Transfer $transfer,
        private PHPMailer $mail
        )
        {
            $this->mail->isSMTP();
            $this->mail->Host = $this->transfer->getHost();
            $this->mail->Port = $this->transfer->getPort();
            $this->mail->SMTPAuth = "true";
            $this->mail->SMTPSecure = $this->transfer->getSecure();
            $this->mail->Username = $this->transfer->getUsername();
            $this->mail->Password = $this->transfer->getPassword();
            $this->mail->setFrom($this->mail->Username,$this->transfer->getName());
        }

    public function sendMail(string $to,string $title, string $text): self
    {
        $this->mail->addAddress($to);
        $this->mail->Subject = $title;
        $this->mail->IsHTML(true);
        $this->mail->Body = $text;
        $this->mail->send();
       return $this;
    }

    public function getErrors(): string
    {
        return $this->mail->ErrorInfo;
    }

}