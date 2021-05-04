<?php
namespace Contracts;

interface BlogInterface
{
    public function index(): void;
    
    public function sendmail(): void;
}