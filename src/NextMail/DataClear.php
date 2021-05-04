<?php
namespace NextMail;

class DataClear
{
    private const PATH = "../.env";

    public function getContent(): string
    {
        return file_get_contents(self::PATH);
    }

    public function findExpression(string $key): mixed
    {
        $pattern = "/".$key.":[a-z0-9.\_\-\@]+/i";
        preg_match($pattern,$this->getContent(),$matches);
        $keys = explode(":",current($matches));
        return next($keys);
    }

    public function __set($name, $value)
    {
        $this->$name = $value;
    }
}