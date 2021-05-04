<?php
namespace NextMail;

class Transfer
{
    public function __construct()
    {
        $this->data = new DataClear;
    }

    public function getHost(): string
    {
        return $this->data->findExpression("smtp-host");
    }

    public function getPort(): string
    {
        return $this->data->findExpression("smtp-port");
    }
    public function getSecure(): string
    {
        return $this->data->findExpression("smtp-secure");
    }
    public function getUsername(): string
    {
        return $this->data->findExpression("smtp-username");
    }

    public function getPassword(): string
    {
        return $this->data->findExpression("smtp-password");
    }

    public function getName(): string
    {
        return $this->data->findExpression("smtp-name");
    }
}